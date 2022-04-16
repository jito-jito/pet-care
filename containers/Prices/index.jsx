import react from "react";
import PriceCard from "../../components/PriceCard";
import styles from './Prices.module.css';


function Prices({

}) {

  return(
    <>
      <article className={styles.prices}>
        <PriceCard
          className={styles.priceCard_firstCard}
          subTitle="Regular Pack"
          title="3 Days"
          price="$150"
        >
          <p className={styles.priceCard_description}>Pet Shower</p>
          <p className={styles.priceCard_description}>Fitness Checkup</p>
          <p className={styles.priceCard_description}>Pet Grooming</p>
          <p className={styles.priceCard_description}>Hair and Nail Cut</p>
          <p className={styles.priceCard_description}>Control Hair Falling</p>
        </PriceCard>
        <PriceCard
          className={styles.priceCard_mainCard}
          subTitle="Exclusive Pack"
          title="10 Days"
          price="$350"
        >
          <p className={styles.priceCard_description}>Pet Shower</p>
          <p className={styles.priceCard_description}>Fitness Checkup</p>
          <p className={styles.priceCard_description}>Pet Grooming</p>
          <p className={styles.priceCard_description}>Hair and Nail Cut</p>
          <p className={styles.priceCard_description}>Control Hair Falling</p>
          <p className={styles.priceCard_description}>Brush & Blow Dry</p>
          <p className={styles.priceCard_description}>Pet Park And Games</p>
        </PriceCard>
        <PriceCard
          className={styles.priceCard_lastCard}
          subTitle="Premium Pack"
          title="30 Days"
          price="$550"
        >
          <p className={styles.priceCard_description}>Pet Shower</p>
          <p className={styles.priceCard_description}>Fitness Checkup</p>
          <p className={styles.priceCard_description}>Pet Grooming</p>
          <p className={styles.priceCard_description}>Hair and Nail Cut</p>
          <p className={styles.priceCard_description}>Control Hair Falling</p>
        </PriceCard>
      </article>
    </>
  )
}


export default Prices