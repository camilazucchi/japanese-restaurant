import {ReactComponent as Logo} from 'assets/logo.svg';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const routes =[{
    label: 'MENU',
    to: '/menu'
  }, {
    label: 'FIND US',
    to: '/find-us'
  },{
    label: 'FAVORITES',
    to: '/favorites'
  }];
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__logo}>
        <Logo />
      </div>
      <ul className={styles.navbar}>
        {routes.map((route, index) => (
          <li key={index} className={styles.navbar__links}>
            <Link to={route.to}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.navbar__button}>
        <button>ORDER NOW</button>
      </div>
    </nav>
  );}