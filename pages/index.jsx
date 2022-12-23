import Container from "../src/components/container/Container"
import Navbar from "../src/components/navbar/Navbar"
import Home from "../src/components/home/Home"


function HomePage () {
  
  return (
    <Container>
      <Navbar />
      <Home />
    </Container>
  )
}

export default HomePage