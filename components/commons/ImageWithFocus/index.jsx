import react from "react";
import Image from "next/image";
import styles from './ImageWithFocus.module.css'

function ImageWithFocus({
  className,
  layout,
  url
}) {

  return(
    <>
      <div className={styles.focus}>
        <div className={styles.focus_container}>

        </div>
        <figure
          className={`${className} ${styles.focus_image}`}
        >
          <Image
            layout={layout}
            src={url}
          />
        </figure>
      </div>
    
    </>
  )
}


export default ImageWithFocus