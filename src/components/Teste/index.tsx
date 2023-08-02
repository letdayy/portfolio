import styled from 'styled-components';
import { ColorPurple } from '@/app/Global/style';

const HeaderComponent = styled.header`
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
`;

const Title = styled.h1`
    width: 40%;
    padding-left: 1.5rem;
    font-family: 'Lilita One', cursive;
`

const Lista = styled.ul`
    display: flex;
    width: 25%;
    justify-content: space-between;

    a {
        color: #9A9A9A;
    }
`

const ButtonComponent = styled.div`
    width: 20%;
    display: flex;
    justify-content: end;
    padding-right: 10rem;
`

const Button = styled.button`
    width: 119px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #9753E3;
    border: none;
    color: white;
    font-size: 15px;
    cursor: pointer;
`


export default function Header() {
    return (
      <HeaderComponent>
        <Title>
            Letícia <ColorPurple>Dayane</ColorPurple>
        </Title>
        <Lista>
            <li><a href="">Sobre mim</a></li>
            <li><a href="">Habilidades</a></li>
            <li><a href="">Projetos</a></li>
        </Lista>
        <ButtonComponent><Button>Saiba mais</Button></ButtonComponent>
      </HeaderComponent>
    )
  }
  