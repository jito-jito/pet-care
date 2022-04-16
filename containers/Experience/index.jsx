import react from "react";
import Title from "../../components/commons/Title";
import SubTitle from "../../components/commons/SubTitle";
import ImageWithFocus from '../../components/commons/ImageWithFocus'
import ServiceItem from "../../components/commons/ServiceItem";
import Button from "../../components/commons/Button";

import styles from './Experience.module.css'
import shiba2 from '../../assets/images/shiba2.png'

function Experience({

}) {

  return(
    <>
      <article className={styles.experience}>
        <ImageWithFocus
          className={styles.experience_image}
          layout="fill"
          url={shiba2}
        />
        <section className={styles.experience_container}>
          <SubTitle>Our Success Story</SubTitle>
          <Title className={styles.experience_title}>Experience Vet Clinic And Services</Title>
          <p>Aliquam erat volutpat In id fermentum augue, ut pellentesque  Maecenas at arcu risus. Donec commodo sodales ex, scelerisque laoreet nibh hakso hendrerit id. In aliquet magna nec lobortis maximus.</p>
          <div className={styles.experience_servicesContainer}>
            <ServiceItem>
              Donec commodo scelerisque laoreet nibh hendrerit  
            </ServiceItem>
            <ServiceItem>
              In aliquet magna nec lobortis maximus. Etiam a dolor placerat
            </ServiceItem>
            <ServiceItem>
              In aliquet magna nec lobortis maximus. Etiam a dolor placerat  
            </ServiceItem>
            
          </div>
          <Button className={styles.experience_button}>Know More About Us</Button>
        </section>
      </article>
    </>
  )
}


export default Experience