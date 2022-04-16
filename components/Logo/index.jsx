import react from "react";
import styles from './Logo.module.css'


function Logo({
  className
}) {

  return(
    <>
      <div className={`${className} ${styles.logo}`}>
        <h1>Vet<span>care</span></h1>
      </div>
    </>
  )
}


export default Logo