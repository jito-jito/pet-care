import react from "react";
import Image from "next/image";

import styles from './EmployeeCard.module.css';

function Carousel({
  className,
  imageUrl,
  name,
  position,
  children
}) {

  return(
    <>
      <section className={`${className} ${styles.employeeCard}`}>
        <figure>
          <Image src={imageUrl}/>
        </figure>
        <div>
          <h3 className={styles.employeeCard_name}>{name}</h3>
          <p className={styles.employeeCard_position}>{position}</p>

        </div>
      </section>
    </>
  )
}


export default Carousel