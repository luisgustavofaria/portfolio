import styled from "styled-components"

import H1 from "../../typograph/H1"
import H2 from "../../typograph/H2"
import H3 from "../../typograph/H3"
import H6 from "../../typograph/H6"
import IconImages from "../iconImages/IconImages"

const Title = styled.div` 
    text-align: center;
    margin-top: 100px;
    margin-bottom: 70px;

    @media (max-width: 800px) {
        margin-bottom: 20px;
    }
`

const MainContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 800px) {
        justify-content: center;
    }  
    
`

const StyledImg = styled.div`
    width: 50%;
    overflow: hidden;
    

    img{
        min-width: 100%;

        @media (max-width: 1000px) {
            min-width: 900px;
        }   
    }

    @media (max-width: 800px) {
          display: none;
    }
`

const StyledText = styled.div`
    padding: 3rem 3rem 3rem 0;
    width: 50%;

    h3{
        min-width: 30rem;
        max-width: 43rem;      
        color:  ${props => props.theme.primary};
        padding: 2rem;
        text-align: justify;
        border-top: solid 2px #00d8c6;
        border-right: solid 5px #00d8c6;
        border-bottom: solid 10px #00d8c6;
        border-radius: 0px 10px 10px 0;
        font-size: 20px;

        @media (max-width: 1000px) {
            min-width: 400px;
        }

        @media (max-width: 400px) {
            min-width: 100%;
            
        }

    } 
    
    @media (max-width: 800px) {
        min-width: 100%;
        
    }  

    @media (max-width: 400px) {
            min-width: 100%;
            padding: 0;
            padding-bottom: 50px;
        }
`



function AboutMe() {
    return (
        <>
            <Title>
                <H1>About Me</H1>
            </Title>
            <MainContainer>
                <StyledImg>
                    <IconImages imageName="prog" type="jpg" />               
                </StyledImg>
                <StyledText>
                    <h3>
                        Sou profissional na área de construção civil com 5 anos de
                        experiência no mercado com foco na elaboração de projetos,
                        orçamentos e execução de obras.<br/>
                        Atualmente estou em transição de carreira para área de
                        programação onde sempre fui apaixonado por tecnologia, desde a
                        parte de Hardware quanto Software. Foi então que decidi estudar para
                        me tornar um Desenvolvedor Web Full-Stack e realizei varios projetos
                        como aprendizado e experiência. Hoje considero que estou preparado
                        para ingressar na área, pois com a evolução das minhas habilidades e a
                        geração de resultados como objetivo, acredito que eu possa contribuir
                        muito para qualquer empresa.
                    </h3>
                </StyledText>
            </MainContainer>
        </>
    )
}

export default AboutMe