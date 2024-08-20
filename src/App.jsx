import './App.css'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import {Hero} from './components/hero/Hero'
import { Navbar } from './components/navbar/Navbar'
import { Projects } from './components/Projects/Projects'
import { Skills } from './components/skills/Skills'
function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
