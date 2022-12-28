import Container from "../src/components/container/Container"
import Navbar from "../src/components/navbar/Navbar"
import Home from "../src/components/home/Home"
import AboutMe from "../src/components/aboutMe/AboutMe"
import Projects from "../src/components/projects/Projects"
import Formation from "../src/components/formation/Formation"


function HomePage () {
  
  return (
    <Container>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Formation />
    </Container>
  )
}

export default HomePage