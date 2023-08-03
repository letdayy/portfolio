// components/ButtonDarkMode.tsx

import React from "react";
import { useDarkMode } from "@/services/DarkModeContext";

interface ButtonDarkModeProps {
  handleToggleImage: () => void;
}

export default function ButtonDarkMode({ handleToggleImage }: ButtonDarkModeProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  

  const handleClick = () => {
    toggleDarkMode(); // Chama a função do contexto para alternar o modo escuro
    handleToggleImage(); // Chama a função para trocar a imagem
  };

  return (
    <button onClick={handleClick}>
      {isDarkMode ? "Modo Claro" : "Modo Escuro"}
    </button>
  );
}
