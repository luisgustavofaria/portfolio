import styled from 'styled-components';

import H1 from '../../typograph/H1';
import H2 from '../../typograph/H2';
import H3 from '../../typograph/H3';
import H6 from '../../typograph/H6';
import IconImages from '../iconImages/IconImages';

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  padding-bottom: 50px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  background-color: ${(props) => props.theme.primary};

  H1 {
    color: #222222;
    background-color: ${(props) => props.theme.primary};
  }
`;

const Container = styled.div`
  padding-top: 50px;
  background-color: ${(props) => props.theme.primary};
  display: flex;
  gap: 50px;
  justify-content: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 80%;
  }

  :nth-child(1) {
  }

  :nth-child(1):hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
  }

  :nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
  }

  img {
    width: 100%;
  }

  H1 {
    padding: 10px 20px;
  }
`;

function Projects() {
  return (
    <MainContainer>
      <Title>
        <H1>Projects</H1>
      </Title>
      <Container>
        <Card>
          <a
            href="https://todo-list-api-vercel-lz68758td-luisgustavofaria.vercel.app"
            target="_blank"
          >
            <IconImages imageName="todolist" type="png" />
          </a>
        </Card>
        <Card>
          <H3>TodoList</H3>
          <H6>
            Desenvolvido utilizando ReactJS, Typescript, Next, NodeJS, Mongoose
            e MongoDB. Onde é possível criar, editar, favoritar, mudar cor de
            fundo e excluir uma lista de tarefa com titulo e descrição. No
            Header também é possível filtrar aa listas. Tudo é salvo no banco de
            dados MongoDB.
          </H6>
        </Card>
      </Container>
      <Container>
        <Card>
          <a
            href="https://climadev-luisgustavofaria.vercel.app/"
            target="_blank"
          >
            <IconImages imageName="climadev" type="png" />
          </a>
        </Card>
        <Card>
          <H3>ClimaDev</H3>
          <H6>
            WebSite de previsão do tempo. Desenvolvido utilizando ReactJS,
            NodeJS e Next JS, além de Styled Components. Foi consumido uma API
            do OpenWeather para o desenvolvimento, sendo possível obter
            informações do momento, daqui 3 horas e 6 horas.{' '}
          </H6>
        </Card>
      </Container>
      <Container>
        <Card>
          <a href="https://social-dev-black.vercel.app/login" target="_blank">
            <IconImages imageName="socialdev" type="png" />
          </a>
        </Card>
        <Card>
          <H3>SocialDev</H3>
          <H6>
            Este projeto é uma rede social para desenvolvedores. Aqui é possível
            cadastrar um usuário, acessar a sua HomePage, deixar uma espécie de
            TWEET e até mesmo editar esse TWEET ou apaga-lo.
          </H6>
        </Card>
      </Container>
      <Container>
        <Card>
          <a
            href="https://controle-financeiro-virid.vercel.app/"
            target="_blank"
          >
            <IconImages imageName="controle-financeiro" type="png" />
          </a>
        </Card>
        <Card>
          <H3>Controle Financeiro</H3>
          <H6>
            Um projeto para seu controle financeiro, podemos cadastrar entrada e
            saída e fazer buscas. Principal objetivo foi o consumo de APIs onde
            mostrei como fazer requisição entre frontend e backend utilizando
            React
          </H6>
        </Card>
      </Container>
      <Container>
        <Card>
          <a href="https://react-jogo-da-velha-ten.vercel.app/" target="_blank">
            <IconImages imageName="jogodavelha" type="png" />
          </a>
        </Card>
        <Card>
          <H3>Jogo da Velha</H3>
          <H6>
            Primeiro projeto com fundamentos do React como componentes,
            propriedades e estado
          </H6>
        </Card>
      </Container>
    </MainContainer>
  );
}

export default Projects;
