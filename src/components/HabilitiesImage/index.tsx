import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import React, { useState, useEffect } from "react";
import { useDarkMode } from "@/services/DarkModeContext";

interface MyTheme extends DefaultTheme {
  isDarkMode: boolean;
}

const lightTheme: MyTheme = {
  isDarkMode: false,
};

const darkTheme: MyTheme = {
  isDarkMode: true,
};

const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 100px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const habilitiesImages = [
  "/habilities-purple.png",
  "/habilities-pink.png",
];


export default function HabilitiesImage() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [currentImage, setCurrentImage] = useState(0);
  const [currentGithubImage, setCurrentGithubImage] = useState(0);

  // Efeito para atualizar a imagem correta quando o tema muda
  useEffect(() => {
    setCurrentImage(isDarkMode ? 1 : 0);
    setCurrentGithubImage(isDarkMode ? 1 : 0);
  }, [isDarkMode]);

  const handleImageToggle = () => {
    setCurrentImage((prevImage) => (prevImage === habilitiesImages.length - 1 ? 0 : prevImage + 1));
  };

  return (
    <ThemeProvider theme={theme}>
      <ContainerImage>
          <img src={habilitiesImages[currentImage] } />
        </ContainerImage>
    </ThemeProvider>
  );
}
