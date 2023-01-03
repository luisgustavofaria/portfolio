import Container from "../src/components/container/Container"
import Navbar from "../src/components/navbar/Navbar"
import Home from "../src/components/home/Home"
import AboutMe from "../src/components/aboutMe/AboutMe"
import Projects from "../src/components/projects/Projects"
import Skills from "../src/components/skills/Skills"
import Contact from "../src/components/contact/Contact"
import Footer from "../src/components/footer/Footer"


function HomePage () {
  
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default HomePage