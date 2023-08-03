import React, { useState } from "react";
import Link from "next/link";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { ColorPurple } from "@/app/Global/style";
import { useDarkMode } from "@/services/DarkModeContext";
import ButtonDarkMode from "../ButtonDarkMode";

interface MyTheme extends DefaultTheme {
  isDarkMode: boolean;
}

const lightTheme: MyTheme = {
  isDarkMode: false
};

const darkTheme: MyTheme = {
  isDarkMode: true
};

const Nav = styled.nav`
  box-shadow: 0px 4px 4px 0px ${({ theme }) => (theme.isDarkMode ? "#1E1E1E" : "#0000003f")} inset ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: ${({ theme }) => (theme.isDarkMode ? "#000000" : "#ffffff")};

  @media (max-width: 768px) {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
`;

const Logo = styled.a`
  width: 20%;
  padding-left: 1.5rem;
  font-family: "Lilita One", cursive;
  font-size: 30px;
  color: ${({ theme }) => (theme.isDarkMode ? "#ffffff" : "#000000")};

  @media (max-width: 768px) {
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    font-family: "Lilita One", cursive;
  }
`;

const MenuToggle = styled.div`
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding-right: 1rem;
  }
`;

const MenuList = styled.ul<{ isMenuOpen: boolean }>`
  display: flex;
  width: 90%;
  align-items: center;
  background-color: ${({ theme }) => (theme.isDarkMode ? "#000000" : "#ffffff")};
 

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    flex-direction: column;
    position: absolute;
    top: 50px;
    right: 0;
    width: 40%;
    border-radius: 0 0 0 10px;
  }
`;

const MenuItem = styled.li`
  padding: 0 90px;


  @media (max-width: 768px) {
    margin: 0 10px;
    margin: 5px 0;
    text-align: center;
    padding: 0;
  }
`;


const MenuLink = styled.a`
  color: 
  ${({ theme }) => (theme.isDarkMode ? "#BCBCBC" : "#9a9a9a")};
  

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 10px;
  }
`;

const Itens = styled.div`
    display: flex;
    width: 100%;

  @media (max-width: 768px) {
    display: block;
    justify-content: baseline;
    width: 100%;
  }
`;

const ToggleSvg = styled.svg`
  fill: ${({ theme }) => (theme.isDarkMode ? "#ffffff" : "#000000")};
`;

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ThemeProvider theme={theme}>
    <Nav>
      <Logo href="/">
        Letícia <ColorPurple>Dayane</ColorPurple>
      </Logo>
      <MenuToggle onClick={handleMenuToggle}>
        <ToggleSvg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path d="M0 0h24v24H0z" fill="none" />
          ) : (
            <path d="M0 0h24v24H0V0z" fill="none" />
          )}
          <path d="M3 18h18v-2H3v2zM3 6v2h18V6H3z" />
        </ToggleSvg>
      </MenuToggle>
      <MenuList isMenuOpen={isMenuOpen}>
        <Itens>
          <MenuItem>
            <Link href="#about-me">
              <MenuLink>Sobre mim</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="#habilities">
              <MenuLink>Habilidades</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="#projects">
              <MenuLink>Projetos</MenuLink>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="#extra">
              <MenuLink>Saiba mais</MenuLink>
            </Link>
          </MenuItem>
        </Itens>
        <ButtonDarkMode handleToggleImage={function (): void {
            throw new Error("Function not implemented.");
          } } />
      </MenuList>
    </Nav>
    </ThemeProvider>
  );
}
