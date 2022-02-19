import styled from "styled-components";
import { Container, InnerHeading } from "../../globalStyles";

export const ClientSection = styled.div`
  padding: 140px 0;
`;

export const ClientContainer = styled(Container)``;

//Header

export const ClientHeader = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
  row-gap: 0.5rem;

  &::before {
    position: absolute;
    content: "";
    width: 3rem;
    height: 2px;
    background: #ed0c35;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ClientHeading = styled(InnerHeading)``;

//Brands
export const ClientBrands = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 100px auto;
  column-gap: 1rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
    padding: 0 70px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1rem;
`;

export const ClientItem = styled.div`
  padding: 10px 40px;
  box-shadow: 0 0 32px 8px #dfdfdf;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
`;

export const ClientImage = styled.img`
  width: 90px;

  @media screen and (max-width: 1100px) {
    width: clamp(40px, 20vw, 200px);
    height: 60%;
  }
`;
