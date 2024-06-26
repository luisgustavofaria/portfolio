import styled from 'styled-components';

import H1 from '../../typograph/H1';
import H3 from '../../typograph/H3';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;
`;

const Container = styled.div`
  cursor: pointer;
  padding: 20px;
  background-color: ${(props) => props.theme.primary};
  width: 700px;
  border-radius: 30px;

  h1 {
    background-color: ${(props) => props.theme.primary};
    color: #222222;
    text-align: center;
  }

  :hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
  }

  @media (max-width: 800px) {
    width: 95%;
  }
`;

function Skills() {
  return (
    <MainContainer>
      <Title>
        <H1>Skills</H1>
      </Title>
      <Container>
        <H3>
          Certificados em: <br></br>
          JavaScript | TypeScript | HTML5 | CSS3 | ReactJS | NextJS | Vite |
          NodeJS | Express | Tailwind | Styled-Components | Stitches | Prisma |
          SQLite | PostegreSQL | Mongoose | MongoDB e outros
        </H3>
      </Container>
      <Container>
        <H3>Conhecimentos certificados por SejaDev, Rocketseat e Udemy</H3>
      </Container>
      <Container>
        <H3>Avançado em Inglês com certificado Park Idiomas</H3>
      </Container>
      <Container>
        <H3>
          Bacharelado:<br></br>
          Engenharia Civil em 2016
        </H3>
      </Container>
    </MainContainer>
  );
}

export default Skills;
