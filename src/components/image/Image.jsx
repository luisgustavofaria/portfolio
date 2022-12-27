import styled from "styled-components"

import H1 from "../../typograph/H1"
import H2 from "../../typograph/H2"
import H3 from "../../typograph/H3"
import H6 from "../../typograph/H6"
import Button from "../button/Button"

const Container = styled.div`
    display: flex;
    min-height: 400px;
`

const ContainerDiv = styled.div`  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 50%; 
    text-align: justify;   
`

const StyledImage = styled.div`
    background-image: url('${props => props.image}');
    
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom;
   
   
    border-radius: 50%;
    
    min-width: 300px;
    min-height: 300px;
    
`




function ImageText({image}) {
    return (  
        <Container>
            <ContainerDiv>
                <StyledImage image={image}/>             
            </ContainerDiv>
            <ContainerDiv>
                <H1>Olá! Eu sou <br></br>Luis Gustavo Faria</H1>
                <H3>Fullstack Deb Developer</H3>  
                <Button></Button>      
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