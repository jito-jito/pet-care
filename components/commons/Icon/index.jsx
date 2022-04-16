import react from "react";
import Image from "next/image";
import styles from './Icon.module.css';

function Icon({
  className,
  url
}) {

  return(
    <>
      <figure className={`${className} ${styles.image_container}`}>
        <Image
          src={url}
        />
      </figure>
    </>
  )
}


export default Icon