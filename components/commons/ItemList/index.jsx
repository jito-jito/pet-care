import react from "react";
import styles from './ItemList.module.css'

function ItemList({
  children,
  className,
  title
}) {

  return(
    <>
      <ul className={`${className} ${styles.itemList}`}>
        <h3 className={styles.itemList_title}>{title}</h3>
        {children}
      </ul>
    </>
  )
}


export default ItemList