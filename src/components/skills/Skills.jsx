import React from 'react'
import styles from './Skills.module.css'
import { useTheme } from '../../common/ThemeContext'
import checkMarkIconLight from '../../assets/images/checkmark-light.svg'
import checkMarkIconDark from '../../assets/images/checkmark-dark.svg'

export const Skills = () => {
    const {theme , toggleTheme} = useTheme();
    const checkMarkIcon = theme === 'light' ? checkMarkIconDark : checkMarkIconLight;
     const skillList =[
        {icon:checkMarkIcon , skill:"HTML"},
        {icon:checkMarkIcon , skill:"CSS"},
        {icon:checkMarkIcon , skill:"JavaScript"},
        {icon:checkMarkIcon , skill:"React Js"},
        {icon:checkMarkIcon , skill:"Tailwind Css"},
        {icon:checkMarkIcon , skill:"BootStrap"},
        {icon:checkMarkIcon , skill:"Git"},
    ]
    
  return (
    <section className={styles.skills_container} id = "skills">
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillsList}>
       {
        skillList.map((item, index)=>{
            return(
                <span key={index}>
                <img className={styles.skillIcon} src={item.icon} alt="" />
                <p>{item.skill}</p>
            </span>
            )
        })
       }
      </div>
    </section>
  )
}
