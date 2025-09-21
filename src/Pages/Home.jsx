import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects'
import Experiences from '../components/Experiences/Experiences'
import Skills from '../components/Skills/Skills'
import Education from '../components/Education/Education'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return <>
    <Navbar/>
    <Hero/>
    <About/>
    <FeaturedProjects/>
    <Experiences/>
    <Skills/>
    <Education/>
    <Contact/>
    <Footer/>
  </>
}
