import styled from "styled-components"

import H1 from "../../typograph/H1"
import H2 from "../../typograph/H2"
import H3 from "../../typograph/H3"
import H6 from "../../typograph/H6"
import IconImages from "../iconImages/IconImages"

const MainContainer = styled.div`
    background-color: ${(props) => props.theme.primary};
`

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 60px;   
    background-color: ${(props) => props.theme.primary};
    
    H1{
        color: black;
        background-color: ${(props) => props.theme.primary};
    }
`

const Container = styled.div`
    padding-top: 50px;
    background-color: ${(props) => props.theme.primary};
    display: flex;
    gap: 50px;
    justify-content: center;
    
    
`

const Card = styled.div`
    width: 400px;
    display: flex;
    justify-content: center;
      
    
    

    :nth-child(1){
        
    }
    
    :nth-child(1):hover {
    transform: scale(1.1);
    }
    
    :nth-child(2){
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    a{
       
    }

    img{
        width: 100%;
    }

    H1 {
        padding: 10px 20px;
    }

    

    
`



function Projects() {
    return(
        <MainContainer>
            <Title><H1>Projects</H1></Title>
            <Container>
                <Card>
                    <a href="https://challenge-do-bem-react-js.vercel.app/" target="_blank"><IconImages imageName="climadev" type="png" /></a>
                </Card>
                <Card>
                    <H3>ClimaDev</H3>
                    <H6>WebSite de previsão do tempo. Desenvolvido utilizando ReactJS, NodeJS e Next JS, além de Styled Components. Foi consumido uma API do OpenWeather para o desenvolvimento, sendo possível obter informações do momento, daqui 3 horas e 6 horas. </H6>
                </Card>
            </Container>
            <Container>
                <Card>
                    <a href="https://challenge-do-bem-react-js.vercel.app/" target="_blank"><IconImages imageName="climadev" type="png" /></a>
                </Card>
                <Card>
                    <H3>ClimaDev</H3>
                    <H6>WebSite de previsão do tempo. Desenvolvido utilizando ReactJS, NodeJS e Next JS, além de Styled Components. Foi consumido uma API do OpenWeather para o desenvolvimento, sendo possível obter informações do momento, daqui 3 horas e 6 horas. </H6>
                </Card>
            </Container>
            <Container>
                <Card>
                    <a href="https://challenge-do-bem-react-js.vercel.app/" target="_blank"><IconImages imageName="climadev" type="png" /></a>
                </Card>
                <Card>
                    <H3>ClimaDev</H3>
                    <H6>WebSite de previsão do tempo. Desenvolvido utilizando ReactJS, NodeJS e Next JS, além de Styled Components. Foi consumido uma API do OpenWeather para o desenvolvimento, sendo possível obter informações do momento, daqui 3 horas e 6 horas. </H6>
                </Card>
            </Container>
            
            
        </MainContainer>
    )
}

export default Projects