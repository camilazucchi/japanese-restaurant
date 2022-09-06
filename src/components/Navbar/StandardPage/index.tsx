import { Outlet } from 'react-router-dom';
import styles from './StandardPage.module.scss';

export default function StandardPage() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
                    食べ物<br/>
                    Original 
                    Japanese
                    Cousine
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}