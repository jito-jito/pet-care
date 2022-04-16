import react from "react";
import Icon from "../commons/Icon";
import styles from './ServiceCard.module.css';

function ServiceCard({
  cardClassName,
  imageClassName,
  children,
  title,
  description,
  imageUrl,
  cardColor
}) {

  return(
    <>
      <section className={`${cardClassName} ${styles.serviceCard}`} style={{background: `${cardColor}`}}>
        <Icon
          className={imageClassName}
          url={imageUrl}
        />
        <div>
          <h3 className={styles.serviceCard_title}>{title}</h3>
          <p className={styles.serviceCard_description}>{description}</p>
        </div>
      </section>
    </>
  )
}


export default ServiceCard