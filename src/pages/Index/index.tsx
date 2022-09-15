import { useNavigate } from 'react-router-dom';
import menu from 'data/menu.json';
import styles from './Index.module.scss';
import stylesTheme from 'styles/_theme.module.scss';
import ourHouse from 'assets/ourHouse.jpg';
import { Dish } from 'types/Dish';

export default function Index() {
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes
    .sort(() => 0.5 - Math.random())
    .splice(0, 4);
  const navigate = useNavigate();

  function redirectToDetails(dishes: Dish) {
    navigate(`/dishes/${dishes.id}`, { state: { dishes }, replace: true });
  }

  return (
    <section>
      <h3 className={stylesTheme.title}>Our favorite dishes</h3>
      <div className={styles.recommendation}>
        {recommendedDishes.map((item) => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recommended__button}
              onClick={() => redirectToDetails(item)}
            >See more
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.title}> Our House </h3>
      <div className={styles.ourHouse}>
        <img src={ourHouse} alt='Where we are located' />
        <div className={styles.ourHouse__address}>
          Chinatown <br />New York<br /> NY
        </div>
      </div>
    </section>
  );
}
