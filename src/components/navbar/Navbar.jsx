import styled from "styled-components"



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
    background-color: #000000;
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

    
  
   
    

   

    
`


function Navbar() {
    return (    
        <StyledUl>
            <StyledLi><a>Home</a></StyledLi>       
            <StyledLi><a>About</a></StyledLi>                        
            <StyledLi><a>Project</a></StyledLi>                        
            <StyledLi><a>Contact</a></StyledLi>                        
        </StyledUl>     
    )
}

export default Navbar