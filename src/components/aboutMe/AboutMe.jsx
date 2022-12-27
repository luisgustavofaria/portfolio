import styled from "styled-components"

import H1 from "../../typograph/H1"
import H2 from "../../typograph/H2"
import H3 from "../../typograph/H3"
import H6 from "../../typograph/H6"
import IconImages from "../iconImages/IconImages"


const ContainerAboutMe = styled.div` 
    text-align: center;
    margin-top: 100px;
`

const Container = styled.div`
    display: flex;
    height: 650px;
`

const StyledDiv = styled.div`
    width: 50%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    position: relative;

    :nth-child(1){
        overflow: hidden;
    }

    :nth-child(2) h3 {
        color:  ${props => props.theme.primary};
        padding: 30px;
        text-align: justify;
        border-top: solid 1px #00d8c6;
        border-right: solid 4px #00d8c6;
        border-bottom: solid 8px #00d8c6;
        border-radius: 0px 10px 10px 0;
        font-size: 20px;
        min-height: 200px;
    }
`

const StyledImg = styled.div`
    img {
        max-height: 600px;
        overflow: hidden;
        object-fit: cover;
        
    }
`




function AboutMe() {
    return (
        <>
        <ContainerAboutMe>
                <H1>About Me</H1>
        </ContainerAboutMe>
        <Container>
            <StyledDiv>
                <StyledImg>

                    <IconImages imageName="prog" type="jpg" />
                </StyledImg>
                
            </StyledDiv>
            <StyledDiv>
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
            </StyledDiv>
        </Container>
        </>
    )
}

export default AboutMe