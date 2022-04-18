import react, { useState } from "react";
import styles from './NavBar.module.css'
import menuIcon from '../../assets/images/burgerMenu-icon.png';
import Image from "next/image";


function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(undefined)

  const openMenu = () => {
    if(toggleMenu === undefined) {
      setToggleMenu(true)
    } else {
      setToggleMenu(prev => !prev)
    }
    
  }
  
  return(
    <>
      <nav className={styles.nav}>   
        <div 
          className={styles.navBar_button}
          onClick={openMenu}
        >
            <Image src={menuIcon}/>
        </div>
        <ul 
          className={`${styles.navBar}`}
        >
          {(toggleMenu === true || toggleMenu === undefined) &&
            <>
              <li className={styles.navBar_item}>
                <a href="#">start</a>
              </li>
              <li className={styles.navBar_item}>
                <a href="#">services</a>
              </li>
              <li className={styles.navBar_item}>
                <a href="#">about</a>
              </li>
              <li className={styles.navBar_item}>
                <a href="#">contact</a>
              </li>
            </>
          }
        </ul>
      </nav>
    </>
  )
}


export default NavBar