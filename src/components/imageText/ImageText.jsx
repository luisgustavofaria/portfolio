import styled from "styled-components"

import H1 from "../../typograph/H1"
import H2 from "../../typograph/H2"
import H3 from "../../typograph/H3"
import H6 from "../../typograph/H6"
import Button from "../button/Button"
import IconImages from "../iconImages/IconImages"

const Container = styled.div`
    display: flex;
    
    @media (max-width: 800px) {
        flex-direction: column;
    }  
`

const ContainerDiv = styled.div`  
    margin-top: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 50%; 
    text-align: center;   
    gap: 30px;

    :nth-child(2){
        @media (max-width: 800px) {
           margin-top: 50px;
        }  
    }
    
`

const StyledImage = styled.div`
    background-image: url('${props => props.image}');  
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 50%;   
    min-width: 400px;
    min-height: 400px;  
    
    @media (max-width: 600px){
        min-width: 300px;
        min-height: 300px; 
    }
`

const StyledButton = styled.div`
    display: flex;
    gap: 15px;

    @media (max-width: 380px){
        gap: 10px;
        
    }
`

const StyledIconContainer = styled.div` 
    display: flex;
    gap: 30px;
    margin-top: 30px;
`



function ImageText({image}) {
    return (  
        <Container>
            <ContainerDiv>
                <StyledImage image={image}/>             
            </ContainerDiv>
            <ContainerDiv>
                <H1>Olá! Eu sou <br></br>Luis Gustavo Faria</H1>
                <H3>Fullstack Web Developer</H3>  
                <StyledButton>
                    <Button>Projetos</Button>      
                    <Button>Skills</Button>      
                    <Button>Contato</Button> 
                </StyledButton>
                <StyledIconContainer>
                    <IconImages imageName="JsIcon" type="svg" />
                    <IconImages imageName="HtmlIcon" type="svg" />
                    <IconImages imageName="CssIcon" type="svg" />
                    <IconImages imageName="GitHubIcon" type="svg" />
                </StyledIconContainer>
                <StyledIconContainer>
                    <IconImages imageName="ReactIcon" type="svg" />
                    <IconImages imageName="NextIcon" type="svg" />
                    <IconImages imageName="NodeIcon" type="svg" />
                    <IconImages imageName="MongoDBIcon" type="svg" />
                </StyledIconContainer>     
            </ContainerDiv>
        </Container>
       
        
    )
}



export default ImageText 

/*
import styled from "styled-components"

const StyledImage = styled.div`

    width: 50%;
    border-radius: 50%;
    background-color: aqua;
    position: relative;
    
    

    img{
        position: absolute;
        width: 100%; 
        
        
        
        
        
        
    }
    
`




function Image({src}) {
    return (  
        <StyledImage>
            <img src={src} />               
        </StyledImage>
    )
}



export default Image 
*/