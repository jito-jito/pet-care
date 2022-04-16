import react from "react";
import ImageWithFocus from "../../components/commons/ImageWithFocus";
import Button from "../../components/commons/Button";

import styles from './Hero.module.css';
import shiba1 from '../../assets/images/shiba.png';

function Hero({

}) {

  return(
    <>
      <article className={styles.hero}>
        <ImageWithFocus 
          layout="fill"
          url={shiba1}
          className={styles.hero_image}
        />
        <section className={styles.hero_container}>
          <h1 className={styles.hero_title}>For Your Pet’s Natural Life & Care</h1>
          <p className={styles.hero_description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt</p>
          <Button className={styles.button_services}>
            Our Services
          </Button>
          <Button className={styles.button_appointment}>
            Make Appointment
          </Button>
        </section>
      </article>
    </>
  )
}


export default Hero