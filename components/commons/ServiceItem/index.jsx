import react from "react";
import Image from "next/image";

import styles from './ServiceItem.module.css'
import pawIcon from '../../../assets/images/paw-icon.svg'

function ServiceItem({
  children
}) {

  return(
    <>
      <section className={styles.serviceItem}>
        <figure className={styles.serviceItem_image}>
          <Image 
            src={pawIcon}
          />
        </figure>
        <p className={styles.serviceItem_description}>
          {children}
        </p>
      </section>
    </>
  )
}


export default ServiceItem