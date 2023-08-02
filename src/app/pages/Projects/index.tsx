import styled, { ThemeProvider, DefaultTheme } from "styled-components";
import { Section, Title, Description } from "@/app/Global/style";
import { useDarkMode } from "@/services/DarkModeContext";


interface MyTheme extends DefaultTheme {
  isDarkMode: boolean;
}

const lightTheme: MyTheme = {
  isDarkMode: false
};

const darkTheme: MyTheme = {
  isDarkMode: true
};

const ContainerImage = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 60px 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 0;
  }
`;

const ProjectImage = styled.a`
  text-align: center;

  p {
    color: ${({ theme }) => (theme.isDarkMode ? "#BCBCBC" : "#565656")};
    font-size: 18px;
    font-weight: 800;
    padding-top: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0 0 2rem 0;
  }
`;

export default function Projects() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
    <Section id="projects">
      <Title>Projetos</Title>
      <Description>
        Logo abaixo você pode visualizar alguns dos projetos e clicando no link
        abaixo deles será redirecionado para o repositório no github onde também
        contém o link para visualizar o código funcionando na web.
      </Description>
      <ContainerImage>
        <ProjectImage href="">
          <img src="/gerador-senha.png" alt="" />
          <p>Gerador de Senha</p>
        </ProjectImage>
        <ProjectImage href="">
          <img src="/crypto-potter.png" alt="" />
          <p>Crypto Potter</p>
        </ProjectImage>
        <ProjectImage href="">
          <img src="habit-tracker.png" alt="" />
          <p>Habit Tracker</p>
        </ProjectImage>
      </ContainerImage>

      <ContainerImage>
        <ProjectImage href="">
          <img src="/outfit-e-commerce.png" alt="" />
          <p>OutFit E-commerce</p>
        </ProjectImage>
        <ProjectImage href="">
          <img src="/banco-digital.png" alt="" />
          <p>Banco Digital</p>
        </ProjectImage>
        <ProjectImage href="">
          <img src="/pokedex.png" alt="" />
          <p>Pokedex</p>
        </ProjectImage>
      </ContainerImage>
    </Section>
    </ThemeProvider>
  );
}
