import styled from 'styled-components';
import { Section, Title } from '@/app/Global/style';

const ContainerHabilities = styled.div`
    box-shadow: 0px 4px 4px 0px #9468D2 inset, 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    width: 349px;
    height: 239px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
`

const Containers = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 40px;

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: 700px;
    padding-top: 0;
  }
`

const Text = styled.p`
    width: 90%;
    text-align: center;
`

const TertiaryTitle = styled.p`
    color: #9753E3;
    font-size: 25px;
    font-weight: 800;
    padding: 110px 110px 40px 200px;

    @media (max-width: 768px) {
    display: none;
}
`

const ContainerImage = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 100px;

    @media (max-width: 768px) {
    display: none;
  }
`


export default function Habilities() {
  return (
    <Section>
        <Title>
            Habilidades
        </Title>
        <Containers>
            <ContainerHabilities>
                <h3>Front end</h3>
                <Text>
                HTML, CSS, Javascript, Typescript, React, React Native, Styled Components, Bootstrap, Wordpress
                </Text>
            </ContainerHabilities>
            <ContainerHabilities>
                <h3>Back end</h3>
                <Text>
                SQL, MySQl Workbench, Express, Sequelize, PHPMyAdmin, PHP, Python
                </Text>
            </ContainerHabilities>
        </Containers>
            <TertiaryTitle>
                Nível de Domínio
            </TertiaryTitle>
            <ContainerImage>
            <img src="/habilities.png" />
            </ContainerImage>
    </Section>
  );
}
