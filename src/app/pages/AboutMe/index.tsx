import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { ColorPurple, Section } from "@/app/Global/style";
import React, { useState, useEffect } from "react";
import { useDarkMode } from "@/services/DarkModeContext";
import SocialIcons from "@/components/SocialIcons";

interface MyTheme extends DefaultTheme {
  isDarkMode: boolean;
}

const lightTheme: MyTheme = {
  isDarkMode: false
};

const darkTheme: MyTheme = {
  isDarkMode: true
};

const words = ["Front end", "Full Stack", "iOS"];

const TextPrincipal = styled.div`
  width: 40%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  float: left;
  padding-left: 10%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Description = styled.p`
  width: 70%;
  text-align: justify;
  font-size: 14px;
  color: ${({ theme }) => (theme.isDarkMode ? "#ffffff" : "#000000")};

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const TitleSecondary = styled.h2`
  font-weight: 1000;
  font-size: 30px;
  font-family: "Montserrat", sans-serif;
  color: ${({ theme }) => (theme.isDarkMode ? "#ffffff" : "#000000")};

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ProfilePrincipal = styled.div`
  height: 80vh;
  float: left;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ImageProfile = styled.img`
  border-radius: 389px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px ${({ theme }) => (theme.isDarkMode ? "#e87cea" : "#9753e3")} inset;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function AboutMe() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <Section id="about-me">
      <TextPrincipal>
        <h4>Olá, me chamo Letícia Dayane</h4>
        <TitleSecondary>
          Sou Desenvolvedora{" "}
          <ColorPurple>{words[currentWordIndex]}</ColorPurple>
        </TitleSecondary>
        <Description>
          
Sou uma estudante de programação e estagiária iOS na Globo, atualmente estou cursando Análise e Desenvolvimento de Sistemas EAD na Estácio. Concluí com sucesso o curso de Desenvolvedor Web Full Stack na Resilia, em parceria com o SENAC, através da iniciativa dos Programadores Cariocas.

Durante minha jornada de aprendizado, adquiri habilidades abrangentes em diversas tecnologias, incluindo HTML, CSS, JavaScript, ReactJS, NodeJS, SQL e metodologias ágeis. Atualmente, meu foco principal está no desenvolvimento de aplicativos utilizando Swift.

Trago também experiência profissional da minha atuação na EJCM Consultoria, empresa júnior de tecnologia da UFRJ. Lá, tive a oportunidade de desenvolver aplicativos utilizando Typescript, React Native, Styled Components, além de trabalhar com ferramentas como Figma, Git e Github. Também desenvolvi sites utilizando React e Wordpress.

Além das minhas atividades profissionais, contribuí como monitora no curso em que me formei, auxiliando alunos a se prepararem para ingressar no mercado de trabalho. Estou constantemente buscando aprimorar meus conhecimentos e acompanhar as últimas tendências e tecnologias relevantes para a área de desenvolvimento.
        </Description>
        <SocialIcons />
      </TextPrincipal>
      <ProfilePrincipal>
        <ImageProfile src="/profile.png" alt="profile" />
      </ProfilePrincipal>
    </Section>
    </ThemeProvider>
  );
}
