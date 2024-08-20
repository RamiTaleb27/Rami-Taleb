import React from 'react'
import styles from '../Projects/Projects.module.css'
import {ProjectCard} from '../../common/ProjectCard'

export const Projects = () => {

  return (
    <section className={styles.projects} id ="projects">
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projects_container}>
         <ProjectCard/>
        </div>
    </section>
  )
}
