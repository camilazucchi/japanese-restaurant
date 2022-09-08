import styles from './About.module.scss';
import stylesTheme from 'styles/_theme.module.scss';
import aboutPicture from 'assets/aboutPicture.jpg';
import chefPicture from 'assets/chefPicture.jpg';
import plateOfSushi from 'assets/plateOfSushi.jpg';

export default function About() {
  return (
    <section>
      <h3 className={stylesTheme.title}>More about us</h3>
      <div className={styles.imagesContainer}>
        <img src={aboutPicture} alt="Our restaurant" />
        <img src={chefPicture} alt="Chef serving a dish" />
        <img src={plateOfSushi} alt="Plate of Sushi" />
      </div>
      <div className={styles.aboutUs}>
        <p className={styles.aboutUs__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            reprehenderit, voluptas placeat laudantium maiores ut minus
            voluptatum voluptates cumque tenetur beatae nihil magnam nostrum
            delectus explicabo sapiente id quibusdam cupiditate.
          <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            reprehenderit, voluptas placeat laudantium maiores ut minus
            voluptatum voluptates cumque tenetur beatae nihil magnam nostrum
            delectus explicabo sapiente id quibusdam cupiditate.
        </p>
      </div>
    </section>
  );
}
