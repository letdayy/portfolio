import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { ColorPurple } from "@/app/Global/style";
import { useDarkMode } from "@/services/DarkModeContext";

interface MyTheme extends DefaultTheme {
  isDarkMode: boolean;
}

const lightTheme: MyTheme = {
  isDarkMode: false,
};

// Defina o tema escuro
const darkTheme: MyTheme = {
  isDarkMode: true,
};

const FooterContainer = styled.footer`
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background-color: ${({ theme }) => (theme.isDarkMode ? "#000000" : "#ffffff")};
  box-shadow: 0px 4px 4px 0px ${({ theme }) =>
    theme.isDarkMode ? "#1E1E1E" : "#0000003f"} inset;
    padding: 1rem 0;

  p {
    color: ${({ theme }) => (theme.isDarkMode ? "#ffffff" : "#000000")};
  }
`;

export default function Footer() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <FooterContainer>
        <p>© Copyright</p>
        <p>
          Feito por <ColorPurple>Letícia Dayane</ColorPurple>
        </p>
      </FooterContainer>
    </ThemeProvider>
  );
}
