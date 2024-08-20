import React from "react";
import  heroImg  from '../../assets/images/hero-img.png';
import  styles  from './HeroStyles.module.css';
import  sun  from "../../assets/images/sun.svg";
import  moon  from "../../assets/images/moon.svg";
import CV from "../../assets/My Resume_2.pdf"
import { useTheme } from '../../common/ThemeContext';
import twitterLight from '../../assets/images/twitter-light.svg'
import githubLight from '../../assets/images/github-light.svg'
import linkedinLight from '../../assets/images/linkedin-light.svg'
import twitterDark from '../../assets/images/twitter-dark.svg'
import githubDark from '../../assets/images/github-dark.svg'
import linkedinDark from '../../assets/images/linkedin-dark.svg'

export const Hero = () => {
  const {theme , toggleTheme} = useTheme();
 const themeIcon = theme === 'light' ? moon : sun;
 const twitterIcon = theme === 'light' ? twitterDark : twitterLight;
 const githubIcon = theme === 'light' ? githubDark : githubLight;
 const linkedinIcon = theme === 'light' ? linkedinDark : linkedinLight;
 
  return (
    <section className={styles.container} id="hero">
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="profile pic" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Rami Taleb</h1>
        <h2>Frontend Developer</h2>
        <div className={styles.social}>
                <a  href="#">
                  <img src={twitterIcon} alt='twitter' />
                  </a>
                <a  href="https://github.com/RamiTaleb27">
                  <img src={githubIcon} alt='github' />
                  </a>
                <a  href="#">
                  <img src={linkedinIcon} alt='linkedin' />
                  </a>
        </div>
      <p className={styles.desc}>with passion for developing modern react web apps for commercial businesses</p>
      <a href={CV} download>
        <button className="hover" >Resume</button>
      </a>
      </div>
    </section>
  )
};
