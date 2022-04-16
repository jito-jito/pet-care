import react from "react";
import Button from "../Button";
import styles from './InputWithButton.module.css'

function Footer({
  className,
  url
}) {

  return(
    <>
      <label htmlFor="" className={styles.container}>
        <input className={styles.input} type="text" placeholder="your email"/>
        <Button className={styles.button}>Subscribe</Button>
      </label>
    </>
  )
}


export default Footer