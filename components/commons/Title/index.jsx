import react from "react";
import styles from './Title.module.css'

function Title({
  className,
  children
}) {

  return(
    <>
      <h1 className={`${className} ${styles.title}`}>
        {children}
      </h1>
    </>
  )
}


export default Title