import styled from "styled-components";
import { BaseButtonStyle, Button, Heading, Section } from "../../globalStyles";
import { motion } from "framer-motion";

export const HeroSection = styled(Section)`
  background-image: linear-gradient(to top right, #450b7c, #563cc9, #49e9fb);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;

  @media screen and (max-width: 968px) {
    padding: 0 70px;
  }

  @media screen and (max-width: 568px) {
    padding: 0 20px;
  }
`;

export const HeroImage = styled.img`
  object-fit: cover;
  position: absolute;
  background-attachment: fixed;
  width: 100%;
  height: 100%;

  &.pattern {
    top: 0;

    z-index: 1;
  }

  &.guy {
    height: 300px;
    bottom: 0;
    z-index: 2;
  }
`;

export const HeroInfoContainer = styled.div`
  padding-bottom: 90px;
  z-index: 3;

  @media screen and (max-width: 968px) {
    width: 80%;

  }

  @media screen and (max-width: 568px) {
    width: 100%;

  }
`;

export const CharacterContainer = styled.div`
  @media screen and (max-width: 568px) {
    display: none;
  }
`;

export const ImageCharacter = styled(motion.img)`
  position: absolute;
  width: 200px;

  &.one {
    top: 80px;
    right: 20%;
  }

  &.two {
    right: 20%;
    bottom: 80px;
  }

  &.three {
    top: 80px;
    left: 20%;
  }

  @media screen and (max-width: 968px) {
    width: 175px;

    &.one {
      right: 10%;
    }

    &.two {
      right: 10%;
    }

    &.three {
      top: 70px;
      left: 10%;
    }
  }
`;

// Button And Float Button

export const HeroButtonWrapper = styled.div`
  position: relative;
  display: flex;
  height: 50px;
`;

export const AnimationWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  left: 0;
  top: 0;
`;

export const HeroButton = styled(motion.button)`
  ${BaseButtonStyle}
  position: absolute;
  bottom: calc(100vh - 100px);
  right: 50%;
  transform: translateX(50%);
  margin-top: 2rem;
  transition: all 0.4s ease-in;

  &.corner {
    position: fixed;
    background-color: #e6172e;
    padding: 0.8rem;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    right: 3rem;
    bottom: 3rem;

    &:hover {
      box-shadow: 0 0 2rem #24d8ff;
    }
  }

  @media screen and (max-width: 700px) {
    width: 50%;
    padding: 0.75rem 1rem;
  }

  .float-icon {
    font-size: 3em;
    color: white;
  }
`;
