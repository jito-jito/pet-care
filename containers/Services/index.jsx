import react from "react";
import Title from "../../components/commons/Title"
import SubTitle from "../../components/commons/SubTitle"
import Carousel from "../Carousel";
import ServiceCard from "../../components/ServiceCard";
import styles from './Services.module.css';
import icon1 from '../../assets/images/service1-icon.svg';
import icon2 from '../../assets/images/service2-icon.svg';
import icon3 from '../../assets/images/service3-icon.svg';
import icon4 from '../../assets/images/service4-icon.svg';

function Button({
  className,
  children
}) {

  return(
    <>
      <Carousel
        className={styles.employeesCarousel}
        subTitle="Care For Your Pet"
        title="What We Do"
      >
        <ServiceCard
          cardClassName={styles.veterinaryCard}
          imageClassName={styles.veterinaryCard_image}
          imageUrl={icon1}
          title="Veterinary"
          description="There are many variatio of passage of Lorem for a Ipsum available"
        /> 
        <ServiceCard
          cardClassName={styles.petGroomingCard}
          imageClassName={styles.petGroomingCard_image}
          imageUrl={icon2}
          title="Pet Grooming"
          description="There are many variatio of passage of Lorem for a Ipsum available"
        />  
        <ServiceCard
          cardClassName={styles.dogSettingCard}
          imageClassName={styles.dogSettingCard_image}
          imageUrl={icon3}
          title="Dog Setting"
          description="There are many variatio of passage of Lorem for a Ipsum available"
        />  
        <ServiceCard
          cardClassName={styles.healthyMealsCard}
          imageClassName={styles.healthyMealsCard_image}
          imageUrl={icon4}
          title="Healthy Meals"
          description="There are many variatio of passage of Lorem for a Ipsum available"
        />  
      </Carousel>
    </>
  )
}


export default Button