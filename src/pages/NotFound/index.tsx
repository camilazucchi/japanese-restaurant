import classNames from 'classnames';
import NotFoundImage from 'assets/ninjaSashimi.png';
import styles from './NotFound.module.scss';
import stylesTheme from 'styles/_theme.module.scss';

export default function NotFound() {
  return (
    <div
      className={classNames({
        [styles.container]: true,
        [stylesTheme.container]: true,
      })}
    >
      <img src={NotFoundImage} alt="Ninja Not Found" />
      <h4 className={stylesTheme.title}>Page Not Found</h4>
      <p className={styles.container__text}>
        We couldn&#39;t find the page you were looking for. This is either because:
        <br />There is an error in the URL entered into your web browser. Please check
        the URL and try again. 
        <br />The page you are looking for has been moved or
        deleted.
        <br />You can return to our homepage by clicking <a href='/'>here</a>.
      </p>
    </div>
  );
}
