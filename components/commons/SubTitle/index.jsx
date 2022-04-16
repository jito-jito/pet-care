import react from "react";
import styles from './SubTitle.module.css'

function SubTitle({
  className,
  children
}) {

  return(
    <>
      <p className={`${className} ${styles.subtitle}`}>
        {children}
      </p>
    </>
  )
}


export default SubTitle