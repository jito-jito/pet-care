import react from "react";
import Title from "../../components/commons/Title"
import SubTitle from "../../components/commons/SubTitle"
import styles from './Carousel.module.css';

function Carousel({
  className,
  title,
  subTitle,
  children
}) {

  return(
    <>
      <article className={`${className} ${styles.carousel}`}>
        <section className={styles.carousel_desecriptionContainer}>
          <SubTitle>{subTitle}</SubTitle>
          <Title>{title}</Title>
        </section>
        <section className={styles.carousel_container}>
          <div>
            {children}
          </div>
        </section>
      </article>
    </>
  )
}


export default Carousel