import styled from "styled-components"

import H6 from "../../typograph/H6"

const StyledUl = styled.ul`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    height: 100px;  
    align-items: center;
    gap: 20px;
    list-style: none;
    border-bottom: solid 1px #00d8c6;
   
    a {
        position: relative;
    }

    a:after {
    content: '';
    position: absolute;
    background-color: #00d8c6;
    height: 2px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

    a:hover:after {
        width: 100%;
    }

    @media (max-width: 380px){
        padding: 0px;
        gap: 10px;
    }
   
`

const StyledLi = styled.li`
    font-size: 20px;
    padding: 10px;
    

    :hover {
        cursor: pointer;
    }  

    h3 {
        color: ${props => props.theme.primary};
        font-size: 22px;

        @media (max-width: 450px){
        font-size: 18px;
        }

        @media (max-width: 380px){
            padding: 0;
        }
    }
    
    @media (max-width: 600px){
        padding: 0px;
    }
    
    
`


function Navbar() {
    return (    
        <StyledUl>
            <StyledLi><a><h3>Home</h3></a></StyledLi>       
            <StyledLi><a><h3>About</h3></a></StyledLi>                        
            <StyledLi><a><h3>Project</h3></a></StyledLi>                        
            <StyledLi><a><h3>Skills</h3></a></StyledLi>                        
            <StyledLi><a><h3>Contact</h3></a></StyledLi>                        
        </StyledUl>     
    )
}

export default Navbar