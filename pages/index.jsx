import Container from "../src/components/container/Container"
import Navbar from "../src/components/navbar/Navbar"
import Home from "../src/components/home/Home"
import AboutMe from "../src/components/aboutMe/AboutMe"


function HomePage () {
  
  return (
    <Container>
      <Navbar />
      <Home />
      <AboutMe/>
    </Container>
  )
}

export default HomePage