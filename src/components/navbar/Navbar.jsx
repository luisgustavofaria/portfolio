import styled from "styled-components"

import H6 from "../../typograph/H6"

const StyledUl = styled.ul`
    display: flex;
    justify-content: center;
    padding: 20px;
    height: 60px;  
    align-items: center;
    gap: 20px;
    list-style: none;
   
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
`

const StyledLi = styled.li`
    font-size: 20px;
    padding: 10px;
    

    :hover {
        cursor: pointer;
    }    
`


function Navbar() {
    return (    
        <StyledUl>
            <StyledLi><a><H6>Home</H6></a></StyledLi>       
            <StyledLi><a><H6>About</H6></a></StyledLi>                        
            <StyledLi><a><H6>Project</H6></a></StyledLi>                        
            <StyledLi><a><H6>Contact</H6></a></StyledLi>                        
        </StyledUl>     
    )
}

export default Navbar