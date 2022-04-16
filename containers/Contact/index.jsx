import react from "react";
import ImageWithFocus from "../../components/commons/ImageWithFocus";
import Title from "../../components/commons/Title";
import Button from "../../components/commons/Button";
import styles from './Contact.module.css';
import dog from '../../assets/images/dog.png'


function Prices({

}) {

  return(
    <>
      <article className={styles.contact}>
        <ImageWithFocus
          className={styles.contact_image}
          url={dog}
        />
        <section className={styles.contact_description}>
          <Title className={styles.contact_description_title}>Professional Pet Care</Title>
          <p>Pet owners trust us to look after the needs of their beloved companions. We are specialists committed to delivering the very highest of veterinary care and affection.</p>
          <Button className={styles.contact_button}>Contact Us Now</Button>
        </section>
      </article>
    </>
  )
}


export default Prices