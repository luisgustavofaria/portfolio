import styled from "styled-components"

import H3 from "../../typograph/H3"

const StyledButton = styled.div`
    cursor: pointer;
    background-color: ${props => props.theme.primary};
    color: black;
    border-radius: 10px;
    padding: 10px 0px;
    width: 100px;
    font-size: 1rem;
    font-weight: bold;
    transition: 0.2s ease-in-out;
    
    :hover {
    transform: scale(1.1);
    background-color: #39f9e9;
  }   

` 

function Button({children}) {
    return (
        <StyledButton>
            {children}
        </StyledButton>   
    )
}

export default Button