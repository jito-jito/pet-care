import react from "react";
import Button from "../commons/Button";
import Title from "../commons/Title";
import SubTitle from "../commons/SubTitle";
import styles from './PriceCard.module.css';


function PriceCard({
  className,
  title,
  subTitle,
  price,
  children
}) {

  return(
    <>
      <section className={`${className} ${styles.priceCard}`}>
        <SubTitle>{subTitle}</SubTitle>
        <Title>{title}</Title>
        {children}
        <h3 className={styles.priceCard_price}>{price}<span>Per Visit</span></h3>
        <Button className={styles.priceCard_button}>Purchase Pack</Button>
      </section>
    </>
  )
}


export default PriceCard