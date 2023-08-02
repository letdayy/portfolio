import { DefaultTheme, styled } from "styled-components";

interface GlobalProps {
  isDarkMode: boolean;
}

interface MyTheme extends DefaultTheme {
  isDarkMode: boolean;
}

const lightTheme: MyTheme = {
  isDarkMode: false,
};

const darkTheme: MyTheme = {
  isDarkMode: true,
};

export const ColorPurple = styled.span`
  color: ${({ theme }) => (theme.isDarkMode ? "#FF6DF0" : "#9468d2")};
  font-weight: 800;
`;

export const Section = styled.section`
  box-shadow: 0px 4px 4px 0px ${({ theme }) =>
    theme.isDarkMode ? "#1E1E1E" : "#0000003f"} inset;
  min-height: 80vh;
  width: 100%;
  background-color: ${({ theme }) =>
    theme.isDarkMode ? "#000000" : "#ffffff"};
`;

export const Title = styled.h2`
  padding: 90px 0 20px 90px;
  font-size: 30px;
  color: ${({ theme }) => (theme.isDarkMode ? "#ffffff" : "#000000")};

  @media (max-width: 768px) {
    padding: 90px 0 0 40px;
  }
`;

export const Description = styled.p`
  padding: 0 0 30px 90px;
  width: 35%;
  text-align: justify;
  color: ${({ theme }) => (theme.isDarkMode ? "#BCBCBC" : "#7a7a7a")};

  @media (max-width: 768px) {
    padding: 0 0 0 1rem;
    padding: 50px 0 50px 10px;
    width: 90%;
  }
`;
