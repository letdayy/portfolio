import React, { useState, useEffect } from 'react';

const Title: React.FC = () => {
  const words = ["Front end", "Full Stack"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Altere o valor 2000 para ajustar a frequência da alternância (2 segundos neste exemplo)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Sou Desenvolvedora {words[currentWordIndex]}</h1>
    </div>
  );
};

export default Title;
