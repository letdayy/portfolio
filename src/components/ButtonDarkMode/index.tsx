import { useDarkMode } from "@/services/DarkModeContext";



export default function ButtonDarkMode() {
    
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
    return (
        <button onClick={toggleDarkMode}>
        {isDarkMode ? "Modo Claro" : "Modo Escuro"}
      </button>
    )
  }