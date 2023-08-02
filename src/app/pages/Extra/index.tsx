import styled, { DefaultTheme, ThemeProvider } from "styled-components";
import { Section, Title, Description, ColorPurple } from "@/app/Global/style";
import { useDarkMode } from "@/services/DarkModeContext";

interface MyTheme extends DefaultTheme {
  isDarkMode: boolean;
}

const lightTheme: MyTheme = {
  isDarkMode: false
};

// Defina o tema escuro
const darkTheme: MyTheme = {
  isDarkMode: true
};

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 0;
    padding-bottom: 50px;
    max-width: 100%;
    flex-wrap: wrap;

    img {
      width: 90%;
    }
  }

  p {
    width: 35%;
    padding: 60px;
    text-align: justify;
    color: #7a7a7a;
    font-size: 15px;

    @media (max-width: 768px) {
      width: 100%;
      padding: 20px;
    }
  }
`;

export default function Extra() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    
    <ThemeProvider theme={theme}>
    <Section id='extra'>
      <Title>Saiba mais</Title>
      <Description>
        Aqui você vai encontrar um pouco mais sobre mim :) Eu gosto sempre de
        <ColorPurple>
          fazer meus projetos pessoais me baseando nos meus gostos
        </ColorPurple>{" "}
        pois isso me deixa animada e me dá um incentivo, você vai notar caso
        leia sobre eles e veja meu github.
      </Description>
      <ContainerImage>
        <img src="/harry-potter.png" alt="" />
        <p>
          Sou apaixonada por <ColorPurple>Harry Potter</ColorPurple> desde que
          me entendo por gente, não sei se já deu para notar hahah Gosto muito
          de assistir <ColorPurple>sagas</ColorPurple>. Além de ter assistido
          Harry Potter várias e várias vezes já maratonei todas as sagas famosas
          como <ColorPurple>Crepúsculo</ColorPurple>, os filmes da{" "}
          <ColorPurple>Marvel, Velozes e Furiosos</ColorPurple>, entre outros.
        </p>
      </ContainerImage>
      <ContainerImage style={{ flexWrap: "wrap-reverse" }}>
        <p>
          Gosto muito de <ColorPurple>jogos</ColorPurple>, porém isso não quer
          dizer que eu seja boa jogando hahah. Teve uma época que decidi fazer
          live na <ColorPurple>Twitch</ColorPurple> e eu jogava principalmente
          meu jogo favorito de tiro: <ColorPurple>Valorant</ColorPurple>.
          Atualmente também jogo outros jogos como 
          <ColorPurple>{" "}
             Overcooked, Dead By Daylight, Bloons TD 6, Super Auto Pets, The sims
            4
          </ColorPurple>
          (que eu amo desde que me entendo por gente também), e continuo
          aceitando jogos pois me divirto bastante.
        </p>
        <img src="/valorant.png" alt="" />
      </ContainerImage>
      <ContainerImage>
        <img src="/se-houver-amanha.png" alt="" />
        <p>
          Gosto muito de ler <ColorPurple>livros</ColorPurple>, eu cresci lendo
          livros e apesar de não ler tanto quanto antigamente eu ainda tenho meu
          livrinho embaixo da cama que gosto de ler todos os dias antes de
          dormir. O livro <ColorPurple>Se Houver Amanhã</ColorPurple> fez parte
          da minha adolescência. Desde que comecei a ler me apaixonei por ele,
          pois a história era totalmente diferente do que eu estava acostumada e
          além de que a personagem viajava muito e eu podia sentir que estava
          conhecendo lugares novos sem sair de casa. Atualmente estou lendo
          sobre a saga <ColorPurple>Percy Jackson e os Olimpianos</ColorPurple> e também Harry Potter, é
          claro. Além de gostar de livros sobre
          <ColorPurple>finanças</ColorPurple>.
        </p>
      </ContainerImage>
      <ContainerImage style={{ flexWrap: "wrap-reverse" }}>
        <p>
          Gosto muito de <ColorPurple>animes</ColorPurple> desde a adolescência,
          sendo meu primeiro anime terminado e que me enviou pra esse mundo: 
          <ColorPurple>Death Note</ColorPurple>. Porém passei uns anos sem assistir e decidi voltar
          recentemente onde consegui terminar alguns poucos animes dentre eles:
          <ColorPurple>Jujutsu Kaisen e SPY X Family</ColorPurple>. Atualmente estou vendo <ColorPurple>Kimetsu no
          Yaiba</ColorPurple>, que é um anime que comecei a muito tempo e não cheguei a
          terminar.
        </p>
        <img src="/jujutsu-kaisen.png" alt="" />
      </ContainerImage>
    </Section>
    </ThemeProvider>
  );
}
