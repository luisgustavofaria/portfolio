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
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="projects">
        <Projects id="projects"/>
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
        <Footer />
    </>
  )
}

export default HomePage