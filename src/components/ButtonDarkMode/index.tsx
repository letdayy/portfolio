
import styled from "styled-components";
import React from "react";
import { useDarkMode } from "@/services/DarkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

interface ButtonDarkModeProps {
  handleToggleImage: () => void;
}

const ToggleButton = styled.button`
  width: 130px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 20px;
  background: 
  ${({ theme }) => (theme.isDarkMode ? "#FF6DF0" : "#9753e3")};
  border: none;
  color: ${({ theme }) => (theme.isDarkMode ? "#000000" : "#ffffff")};
  font-size: 15px;
  cursor: pointer;
  margin-right: 4rem;
  font-weight: 600;

  @media (max-width: 768px) {
    margin: 1rem;
    width: 100px;
    font-size: 12px;
  }
`;

export default function ButtonDarkMode({ handleToggleImage }: ButtonDarkModeProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  

  const handleClick = () => {
    toggleDarkMode(); // Chama a função do contexto para alternar o modo escuro
    handleToggleImage(); // Chama a função para trocar a imagem
  };

  return (
    <ToggleButton onClick={handleClick}>
      {isDarkMode ? "Modo Claro " : "Modo Escuro "}
      {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
    </ToggleButton>
  );
}
