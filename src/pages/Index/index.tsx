import menu from 'data/menu.json';
import styles from './Index.module.scss';

export default function Index() {
  let recommendedDishes = [...menu];
  recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0,3);
  return (
    <section>
      <h3 className={styles.title}>
        Our favorite dishes
      </h3>
      <div className={styles.recommendation}>
        {recommendedDishes.map(item => (
          <div key={item.id} className={styles.recommended}>
            <div className={styles.recommended__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recommended__button}>
              See more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}