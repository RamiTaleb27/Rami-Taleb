import React, { useState } from 'react'
import { navItems } from '../../common/constant'
import logo from '../../assets/images/logo.png'
import styles from './Navbar.module.css'
export const Navbar = () => {
  const [isActive , setIsActive] = useState(false);
  const toggleActiveClass = ()=>{
    setIsActive(!isActive);
  }
  const removeActive = ()=>{
    setIsActive(false);
  }
  return (
    <>
    <div className={styles.Navbar}>
        <div className={styles.navbar_container}>
            <img src={logo} alt="logo" className={styles.logo} />
            <ul className={`${styles.nav_items} ${isActive ? styles.active : ''}`}>
               {
                navItems.map((item ,index)=>{
                    return( 
                    <li onClick={removeActive} key={index}><a href={item.href}>{item.lable}</a></li>
                    )
                })
               }
            </ul>
            <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick = {toggleActiveClass}>
                  <span className={styles.bar}></span>
                  <span className={styles.bar}></span>
                  <span className={styles.bar}></span>
            </div>
        </div>
    </div>
    </>
  )
}
