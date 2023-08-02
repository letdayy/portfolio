import styled from 'styled-components';
import { ColorPurple } from '@/app/Global/style';

const FooterContainer = styled.footer`
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
`;

export default function Footer() {
    return (
      <FooterContainer>
      <p>
      © Copyright 
      </p> 
      <p>
      Feito por <ColorPurple>Letícia Dayane</ColorPurple>
      </p>
      </FooterContainer>
    )
  }
  