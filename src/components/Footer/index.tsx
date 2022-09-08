import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FaInstagram
        className={styles.footer__icons}
        size={30}
        color='#fff'/>
      <FaWhatsapp 
        className={styles.footer__icons}
        size={30}
        color='#fff'/>
      <FaFacebook
        className={styles.footer__icons}
        size={30}
        color='#fff' />
    </footer>
  );
}