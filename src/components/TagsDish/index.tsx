import classNames from 'classnames';
import { Dish } from 'types/Dish';
import styles from './tagsDish.module.scss';

export default function TagsDish({
  category,
  size,
  serving,
  price
}: Dish) {
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__type]: true,
        [styles[`tags__type__${category.label.toLocaleLowerCase()}`]]: true
      })}
      >
        {category.label}
      </div>
      <div className={styles.tags__portion}>
        {size}g
      </div>
      <div className={styles.tags__serving}>
                        Ideal for {serving}
      </div>
      <div className={styles.tags__price}>
                    US${price.toFixed(2)}
      </div>
    </div>
  );
}