import { motion } from "framer-motion";
import styled from "styled-components";
import { BaseButtonStyle, Section } from "../../globalStyles";

export const ContentSection = styled(Section)`
  padding: 0 100px;

  @media screen and (max-width: 968px) {
    padding: 0 70px;
  }

  @media screen and (max-width: 568px) {
    padding: 0 30px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 2rem;
  padding: 100px 0;
  flex-flow: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  @media screen and (max-width: 968px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#fafeff"};
  width: 585px;
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
  position: relative;
  z-index: -2;
  box-shadow: 0 0 4px #ccc;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("./images/hero-pattern-bg.png");
    object-fit: cover;
    background-size: 100% auto;
    z-index: -1;
  }

  @media screen and (max-width: 968px) {
    width: 485px;
  }

  @media screen and (max-width: 568px) {
    width: 385px;
  }
`;
// Image
export const ContentImage = styled(motion.img)`
  object-fit: cover;
  height: 300px;

  @media screen and (max-width: 968px) {
    height: 250px;
  }

  @media screen and (max-width: 568px) {
    height: 200px;
  }
`;

// Info
export const ContentInfo = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  max-width: 500px;
  justify-content: center;

  @media screen and (max-width: 968px) {
    width: 100%;
    align-items: center;
    text-align: center;
    margin-top: 2rem;
    row-gap: 0.5rem;
  }
`;

export const ContentTopLine = styled(motion.span)`
  color: grey;
  letter-spacing: 1px;
  font-weight: 500;
`;

export const ContentHeadline = styled(motion.h3)`
  font-size: clamp(1.8rem, 2vw, 3rem);
  color: #222;
`;

export const ContentDescribtion = styled(motion.p)`
  color: #757575;
`;

export const ContentButton = styled(motion.button)`
  ${BaseButtonStyle}
  background: ${({ bg }) =>
    bg ? bg : "#fafeff"};
  color: white;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  font-size: 0.8rem;

  @media screen and (max-width: 968px) {
    margin: 0 auto;
  }
`;
