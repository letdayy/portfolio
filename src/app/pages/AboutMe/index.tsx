import styled from 'styled-components';
import { ColorPurple, Section } from '@/app/Global/style';



const TextPrincipal = styled.div`
    width: 40%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    float: left;
    padding-left: 10%;
    /* padding: 0 60px; */
`
const Description = styled.p`
    width: 70%;
    text-align: justify;
    font-size: 14px;
`

const TitleSecondary = styled.h2`
    font-weight: 1000;
    font-size: 30px;
    font-family: 'Montserrat', sans-serif;
`

const ImageContainer = styled.div`
    width: 65%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
    gap: 40px;
`

const ProfilePrincipal = styled.div`
    height: 80vh;
    float: left;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ImageProfile = styled.img`
    border-radius: 389px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px #9753E3 inset;
`

export default function AboutMe() {
  return (
    <Section>
        <TextPrincipal>
      <h4>Olá, me chamo Letícia Dayane</h4>
      <TitleSecondary>
        Sou Desenvolvedora <ColorPurple>Front end</ColorPurple>
      </TitleSecondary>
      <Description>
        Sou uma estudante de programação e atualmente estou cursando o segundo
        período de Análise e Desenvolvimento de Sistemas EAD na Estácio.
        Recentemente, concluí o curso de Desenvolvedor Web Full Stack na
        Resilia, em parceria com o SENAC, por meio da iniciativa dos
        Programadores Cariocas. Durante minha jornada de aprendizado, adquiri
        habilidades em diversas tecnologias, incluindo HTML, CSS, JavaScript,
        ReactJS, NodeJS, SQL e metodologias ágeis. Tenho experiência
        profissional na EJCM Consultoria, empresa júnior de tecnologia da UFRJ,
        onde desenvolvi aplicativos utilizando Typescript, React Native, Styled
        Components, Figma, Git, Github e sites utilizando React e Wordpress.
        Além disso, atuo como monitora do curso que me formei, ajudando alunos a
        ingressarem no mercado de trabalho e busco constantemente estudar novas
        tecnologias relevantes para a área.
      </Description>
      <ImageContainer>
        <a href=""><img src="/linkedin.png" alt="linkedin" /></a>
        <a href=""><img src="/github.png" alt="github" /></a>
      </ImageContainer>
      </TextPrincipal>
      <ProfilePrincipal>
        <ImageProfile src="/profile.png" alt="profile" />
      </ProfilePrincipal>
    </Section>
  );
}
