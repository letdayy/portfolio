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

const ImageContainer = styled.div`
  width: 65%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 40px;
`;

const linkedinImages = [
  "/linkedin-black.png",
  "/linkedin-white.png",
];

const githubImages = [
  "/github-black.png",
  "/github-white.png",
];

export default function SocialIcons() {
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
    setCurrentImage((prevImage) => (prevImage === linkedinImages.length - 1 ? 0 : prevImage + 1));
    setCurrentGithubImage((prevImage) => (prevImage === githubImages.length - 1 ? 0 : prevImage + 1));
  };

  return (
    <ThemeProvider theme={theme}>
      <ImageContainer>
        <a href="https://www.linkedin.com/in/letdayy/">
          <img src={linkedinImages[currentImage]} alt="linkedin" />
        </a>
        <a href="https://github.com/letdayy">
          <img src={githubImages[currentGithubImage]} alt="github" />
        </a>
      </ImageContainer>
    </ThemeProvider>
  );
}

