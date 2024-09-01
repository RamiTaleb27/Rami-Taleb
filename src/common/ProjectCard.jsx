import React from 'react'
import styles from '../components/Projects/Projects.module.css'
import leon from '../assets/images/leon.png'
import TanatousStudio from '../assets/images/—Pngtree—design graphic tool software web_4297501.png'
import virtualR from '../assets/images/VR_Logo_Virtual_Reality_Logo.svg.png'
export const ProjectCard = () => {
    const projectsCards = [
        {src:leon, title:"Leon" , desc:"Creative Agency Web Template" , href:"https://ramitaleb27.github.io/Leon-Landing-Page/",alt:"Leon pic"},
        {src:TanatousStudio, title:"TanatousStudio" , desc:"Design Company" , href:"https://ramitaleb27.github.io/TanatousStudio-LandingPage/",alt:"Studio pic"},
        {src:virtualR, title:"VirtualR" , desc:"Virual Reality app company" , href:"https://main--virtualr-app.netlify.app/",alt:"Virtual pic"}
    ];
  return (
    <>
    {
          projectsCards.map((item ,index)=>{
            return(
                <a className={styles.project_card} href={item.href} target = "_blank" key={index}>
                    <img className={styles.hover} src={item.src} alt={item.alt} />
                    <h3>{item.title}</h3>
                    <p className={styles.projectsDesc}>{item.desc}</p>
                </a>
            )
        })
    }
    </>
  )
}
