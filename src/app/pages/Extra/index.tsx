import styled from "styled-components";
import { Section, Title, Description } from "@/app/Global/style";

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;

  p {
    width: 35%;
    padding: 60px;
    text-align: justify;
    color: #7A7A7A;
    font-size: 15px;
  }
`;


export default function Extra() {
  return (
    <Section>
      <Title>Saiba mais</Title>
      <Description>
        Aqui você vai encontrar um pouco mais sobre mim :) Eu gosto sempre de
        fazer meus projetos pessoais me baseando nos meus gostos pois isso me
        deixa animada e me dá um incentivo, você vai notar caso leia sobre eles
        e veja meu github.
      </Description>
      <ContainerImage>
        <img src="/harry-potter.png" alt="" />
        <p>
        Sou apaixonada por Harry Potter desde que me entendo por gente, não sei se já deu para notar hahah Gosto muito de assistir sagas. Além de ter assistido Harry Potter várias e várias vezes já maratonei todas as sagas famosas como Crepúsculo, os filmes da Marvel, Velozes e Furiosos, entre outros.
        </p>
      </ContainerImage>
      <ContainerImage>
        <p>
        Gosto muito de jogos, porém isso não quer dizer que eu seja boa jogando hahah.

Teve uma época que decidi fazer live na Twitch e eu jogava principalmente meu jogo favorito de tiro: Valorant.

Atualmente também jogo outros jogos como Overcooked, Dead By Daylight, Bloons TD 6, Super Auto Pets, The sims 4 (que eu amo desde que me entendo por gente também), e continuo aceitando jogos pois me divirto bastante.
        </p>
        <img src="/valorant.png" alt="" />
      </ContainerImage>
      <ContainerImage>
        <img src="/se-houver-amanha.png" alt="" />
        <p>
        Gosto muito de ler livros, eu cresci lendo livros e apesar de não ler tanto quanto antigamente eu ainda tenho meu livrinho embaixo da cama que gosto de ler todos os dias antes de dormir.
O livro Se Houver Amanhã tem uma história bem engraçada na minha vida: eu era uma criança quase adolescente e minha irmã uma criança na época e a filha da minha vizinha estava brincando com esse livro. Pra quem não conhece o Sidney Sheldon faz dois livros em um, então são dois livros que se você começar por um lado você lê Se Houver Amanhã e do outro Nada Dura Para Sempre.
O livro estava todo acabado e faltando algumas páginas porém quando a criança enjoou de brincar com ele eu pedi se poderia ficar e ela deixou. Desde que comecei a ler me apaixonei por ele, pois a história era totalmente diferente do que eu estava acostumada e além de que a personagem viajava muito e eu podia sentir que estava conhecendo lugares novos sem sair de casa.
        </p>
      </ContainerImage>
      <ContainerImage>
        <p>
        Gosto muito de animes desde a adolescência, sendo meu primeiro anime terminado e que me enviou pra esse mundo: Death Note. Porém passei uns anos sem assistir e decidi voltar recentemente onde consegui terminar alguns poucos animes dentre eles: Jujutsu Kaisen e SPY X Family. Atualmente estou vendo Kimetsu no Yaiba, que é um anime que comecei a muito tempo e não cheguei a terminar.
        </p>
        <img src="/jujutsu-kaisen.png" alt="" />
      </ContainerImage>
    </Section>
  );
}
