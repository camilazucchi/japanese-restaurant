import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import styles from './Dishes.module.scss';
import menu from 'data/menu.json';
import TagsDish from 'components/TagsDish';
import NotFound from 'pages/NotFound';
import StandardPage from 'components/StandardPage';

export default function Dishes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dishes = menu.find((item) => item.id === id);
  if (!dishes) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<StandardPage />}>
        <Route
          index
          element={
            <>
              <button className={styles.return} onClick={() => navigate(-1)}>
                {'< Return'}
              </button>
              <section className={styles.container}>
                <h1 className={styles.title}>{dishes.title}</h1>
                <div className={styles.image}>
                  <img src={dishes.photo} alt={dishes.title} />
                </div>
                <div className={styles.content}>
                  <p className={styles.content__description}>
                    {dishes.description}
                  </p>
                  <TagsDish {...dishes} />
                </div>
              </section>
            </>
          }
        />
      </Route>
    </Routes>
  );
}
