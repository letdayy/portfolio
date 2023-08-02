import { styled } from "styled-components";

export const ColorPurple = styled.span`
  color: #9468d2;
  font-weight: 800;
`;

export const Section = styled.section`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  min-height: 80vh;
  width: 100%;
`;

export const Title = styled.h2`
  padding: 90px 0 20px 90px;
  font-size: 30px;

  @media (max-width: 768px) {
    padding: 90px 0 0 40px;
  }
`;

export const Description = styled.p`
  padding: 0 0 30px 90px;
  width: 35%;
  text-align: justify;
  color: #7a7a7a;

  @media (max-width: 768px) {
    padding: 0 0 0 1rem;
    padding: 50px 0 50px 10px;
    width: 90%;
  }
`;
