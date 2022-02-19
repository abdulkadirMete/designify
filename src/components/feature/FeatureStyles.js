import styled from "styled-components";
import { Container, Heading, InnerHeading, Section } from "../../globalStyles";

export const FeatureSection = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const FeatureContainer = styled(Container)``;

export const FeatureHeading = styled(InnerHeading)`
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

//FeatureItems

export const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 100px;
  row-gap: 4rem;
  column-gap: 3rem;

  @media screen and (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 568px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 1rem;
`;

export const FeatureItemIcon = styled.div`
  padding: 2rem;
  border-radius: 50%;
  margin: 0 auto;

  &.one {
    background: linear-gradient(130deg, #9cb3ff 0%, #b0ffe9 100%);
  }
  &.two {
    background: linear-gradient(220deg, #e7d1ff 0%, #8383ef 100%);
  }
  &.three {
    background: linear-gradient(130deg, #ff8989 0%, #ffddc5 100%);
  }
  &.four {
    background: linear-gradient(130deg, #ffa8e8 0%, #ffe6e6 100%);
  }
  &.five {
    background: linear-gradient(130deg, #ffaf73 0%, #fffecc 100%);
  }
  &.six {
    background: linear-gradient(130deg, #59dbb0 0%, #feffb5 100%);
  }
`;

export const FeatureItemHeader = styled.span`
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 1.2em;

  @media screen and (max-width:768px) {
  font-weight: normal;
  font-size: 1em;
  }
`;

export const FeatureItemTextWrapper = styled.div`
  p {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
