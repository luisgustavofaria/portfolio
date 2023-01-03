import styled from "styled-components"

import H1 from "../../typograph/H1"
import H3 from "../../typograph/H3"
import IconImages from "../iconImages/IconImages"

const MainContainer = styled.div`
    padding-top: 80px;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
        
`


const Title = styled.div` 
    margin-bottom: 50px;
`

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
     
    @media (max-width: 600px) {
        align-items: flex-start;
        
    }     
`

const Container = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 20px;
    gap: 20px;

    a{
        text-decoration: none;
    }

    :hover{
        transition: 0.2s ease-in-out;
        transform: scale(1.1);
    }

    h1{
        @media (max-width: 450px) {
        font-size: 20px;
        }  
        
        @media (max-width: 380px) {
        font-size: 18px;
        }  


    }

    img{
        @media (max-width: 450px) {
        width: 40px;
        }  
        
        @media (max-width: 450px) {
        width: 30px;
        }  
    }

    @media (max-width: 380px) {
        gap: 10px;
        padding: 10px;
    } 

`


function Contact() {
    return (
        <MainContainer>
            <Title>
                <H1>Contact</H1>
            </Title>
            <ContainerDiv>
                <Container>
                    <IconImages imageName="github" type="png" />
                    <H3><a href="http://github.com/luisgustavofaria" target="_blank"><H3>github.com/luisgustavofaria</H3></a></H3>
                </Container>
                <Container>
                    <IconImages imageName="gmail" type="png" />
                    <H3><a href="mailto:luis.gustavo.fariac@gmail.com"><H3>luis.gustavo.fariac@gmail.com</H3></a></H3>
                </Container>
                <Container>
                    <IconImages imageName="linkedin" type="png" />
                    <H3><a href="http://linkedin.com/in/luis-gustavo-cristovam-de-faria-50a753145/" target="_blank"><H3>linkedin.com/in/luis-gustavo-cristovam-de-faria-50a753145</H3></a></H3>
                </Container>
            </ContainerDiv>
            
        </MainContainer>
    )
}

export default Contact