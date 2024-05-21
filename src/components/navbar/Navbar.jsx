import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';

import H6 from '../../typograph/H6';

const StyledUl = styled.ul`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  height: 80px;
  align-items: center;
  gap: 20px;
  list-style: none;
  border-bottom: solid 1px ${(props) => props.theme.secondary};

  a {
    position: relative;
  }

  a:after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.secondary};
    height: 2px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  a:hover:after {
    width: 100%;
  }

  @media (max-width: 380px) {
    padding: 0px;
    gap: 10px;
  }
`;

const StyledLi = styled.li`
  font-size: 20px;
  padding: 10px;

  :hover {
    cursor: pointer;
  }

  h3 {
    color: ${(props) => props.theme.primary};
    font-size: 22px;

    @media (max-width: 450px) {
      font-size: 18px;
    }

    @media (max-width: 380px) {
      padding: 0;
    }
  }

  @media (max-width: 600px) {
    padding: 0px;
  }
`;

function Navbar() {
  return (
    <StyledUl>
      <StyledLi>
        <Link to="home" smooth={true} offset={0} duration={800}>
          <a>
            <h3>Home</h3>
          </a>
        </Link>
      </StyledLi>
      <StyledLi>
        <Link to="about" smooth={true} offset={-80} duration={800}>
          <a>
            <h3>About</h3>
          </a>
        </Link>
      </StyledLi>
      <StyledLi>
        <Link to="projects" smooth={true} offset={-20} duration={800}>
          <a>
            <h3>Project</h3>
          </a>
        </Link>
      </StyledLi>
      <StyledLi>
        <Link to="skills" smooth={true} offset={0} duration={800}>
          <a>
            <h3>Skills</h3>
          </a>
        </Link>
      </StyledLi>
      <StyledLi>
        <Link to="contact" smooth={true} offset={0} duration={800}>
          <a>
            <h3>Contact</h3>
          </a>
        </Link>
      </StyledLi>
    </StyledUl>
  );
}

export default Navbar;
