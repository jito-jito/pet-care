import react, { useState } from "react";
import styles from './NavBar.module.css'
import menuIcon from '../../assets/images/burgerMenu-icon.png';
import Image from "next/image";


function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false)

  const openMenu = () => {
    console.log('toogle menu')
    setToggleMenu(prev => !prev)
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
          id={`${toggleMenu ? 'open' : 'close'}`}
          className={`${styles.navBar}`}
        >
          <li className={styles.navBar_item}>
            <a href="">start</a>
          </li>
          <li className={styles.navBar_item}>
            <a href="">services</a>
          </li>
          <li className={styles.navBar_item}>
            <a href="">about</a>
          </li>
          <li className={styles.navBar_item}>
            <a href="">contact</a>
          </li>
      
        </ul>
      </nav>
    </>
  )
}


export default NavBar