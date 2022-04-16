import react from "react";
import Logo from "../../components/Logo";
import InputWithButton from '../../components/commons/InputWithButton';
import ItemList from "../../components/commons/ItemList";
import styles from './Footer.module.css'

function Footer({
  className,
  url
}) {

  return(
    <>
      <footer className={styles.footer}>
        <section className={styles.footer_subscriptionContainer}>
          <Logo className={styles.footer_logo}/>
          <p>Quisque id leo non dolor tempor elementum quis ac urna. Nam pharetra, ligula eget finibus dignissim, turpis ipsum sollicitudin</p>
          <InputWithButton/>
        </section>
        <section className={styles.footer_descriptionContainer}>
          <ItemList
            title="Address"
          >
            <li className={styles.ItemList_item}>+23 384 485 29</li>
            <li className={styles.ItemList_item}>vet@shamim.com</li>
            <li className={styles.ItemList_item}>123 king street, Melbrown Victoria 3000, Australia</li>

          </ItemList>
          <ItemList
            title="Links"
          >
            <li className={styles.ItemList_item}><a href="">About Us</a></li>
            <li className={styles.ItemList_item}><a href="">Groomers</a></li>
            <li className={styles.ItemList_item}><a href="">Contact Us</a></li>
            <li className={styles.ItemList_item}><a href="">Privacy Policy</a></li>
            <li className={styles.ItemList_item}><a href="">Tearms</a></li>

          </ItemList>
          <ItemList
            title="Opening Hours"
          >
            <li className={styles.ItemList_item}>Monday-Tuesday 09:00-18:00</li>
            <li className={styles.ItemList_item}>Wednesday 09:00-18:00</li>
            <li className={styles.ItemList_item}>Thrusday-Friday 09:00-18:00</li>
            <li className={styles.ItemList_item}>Saturday 10:00-17:00</li>
            <li className={styles.ItemList_item}>Sunday 10:30-16:00</li>

          </ItemList>
        </section>
      </footer>
    
    </>
  )
}


export default Footer