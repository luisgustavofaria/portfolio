import styled from "styled-components";

import H2 from "../../typograph/H2"
import H3 from "../../typograph/H3"
import H6 from "../../typograph/H6"

const FooterContainer = styled.div`
    background-color: ${props => props.theme.primary};
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1{
        background-color: ${props => props.theme.primary};
        color: #222222;
    }
`

export default function Footer () {
    return(
        <FooterContainer>
            <H6>
                All rights reserved @luisgustavofaria Janery 2023
            </H6>
        </FooterContainer>
    )
}