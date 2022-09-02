import {ReactComponent as Logo} from 'assets/logo.svg';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Logo />
      </div>
      <div className={styles.navbar__links}>
        <a>MENU</a>
        <a>FIND US</a>
        <a>CHEF&#39;S FAVORITE</a>
      </div>
      <div className={styles.navbar__button}>
        <button>ORDER NOW</button>
      </div>
    </nav>
  );
}