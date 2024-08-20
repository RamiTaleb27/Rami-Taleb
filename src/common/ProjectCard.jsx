import React from 'react'
import styles from '../components/Projects/Projects.module.css'
import viberr from '../assets/images/viberr.png'
import hipsster from '../assets/images/hipsster.png'
import fitlift from '../assets/images/fitlift.png'
export const ProjectCard = () => {
    const projectsCards = [
        {src:viberr, title:"Vibeer" , desc:"Streaming app" , href:"#",alt:"viberr pic"},
        {src:hipsster, title:"Vibeer" , desc:"Streaming app" , href:"#",alt:"viberr pic"},
        {src:fitlift, title:"Vibeer" , desc:"Streaming app" , href:"#",alt:"viberr pic"}
    ];
  return (
    <>
    {
          projectsCards.map((item ,index)=>{
            return(
                <a className={styles.project_card} href={item.href} target = "_blank" key={index}>
                    <img className={styles.hover} src={item.src} alt={item.alt} />
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </a>
            )
        })
    }
    </>
  )
}
