import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { Section, Title } from "@/app/Global/style";
import { useDarkMode } from "@/services/DarkModeContext";
import HabilitiesImage from "@/components/HabilitiesImage";

interface MyTheme extends DefaultTheme {
    isDarkMode: boolean;
  }
  
  const lightTheme: MyTheme = {
    isDarkMode: false
  };
  
  const darkTheme: MyTheme = {
    isDarkMode: true
  };

const ContainerHabilities = styled.div`
  box-shadow: 0px 4px 4px 0px
  ${({ theme }) => (theme.isDarkMode ? "#e87cea" : "#9468D2")} inset,
    0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    
  width: 349px;
  height: 239px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;

  h3 {
    color: 
    ${({ theme }) => (theme.isDarkMode ? "#e87cea" : "#9468D2")};
  }
`;

const Containers = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: 700px;
    padding-top: 0;
  }
`;

const Text = styled.p`
  width: 90%;
  text-align: center;
  color: ${({ theme }) => (theme.isDarkMode ? "#ffffff" : "#000000")};
  
  
`;

const TertiaryTitle = styled.p`
  color: 
  ${({ theme }) => (theme.isDarkMode ? "#e87cea" : "#9753E3")};
  font-size: 25px;
  font-weight: 800;
  padding: 110px 110px 40px 200px;

  @media (max-width: 768px) {
    display: none;
  }
`;



export default function Habilities() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Section id="habilities">
        <Title>Habilidades</Title>
        <Containers>
          <ContainerHabilities>
            <h3>Front end</h3>
            <Text>
              HTML, CSS, Javascript, Typescript, React, React Native, Styled
              Components, Bootstrap, Wordpress
            </Text>
          </ContainerHabilities>
          <ContainerHabilities>
            <h3>Back end</h3>
            <Text>
              SQL, MySQl Workbench, Express, Sequelize, PHPMyAdmin, PHP, Python
            </Text>
          </ContainerHabilities>
        </Containers>
      </Section>
    </ThemeProvider>
  );
}
