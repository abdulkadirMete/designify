import React, { useEffect, useState } from "react";
import { useInView } from "react-hook-inview";
import { FiMail } from "react-icons/fi";
import { Heading, Text } from "../../globalStyles";
import { Modal } from "../modal/Modal";
import {
  AnimationWrapper, CharacterContainer,
  HeroButton, HeroButtonWrapper, HeroImage,
  HeroInfoContainer,
  HeroSection,
  ImageCharacter
} from "./HeroStyles";



export const Hero = () => {
  // Modal
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  // Button Animation
  const [ref, isVisible] = useInView({
    rootMargin: "-200px",
  });

  useEffect(() => {}, [isVisible]);

  return (
    <HeroSection>
      <HeroImage
        className="pattern"
        src="/images/hero-pattern-bg-lg.png"
      ></HeroImage>
      <HeroImage className="guy" src="/images/hero-guy-1.png"></HeroImage>

      <CharacterContainer>
        <ImageCharacter className="one" src="./images/image 1.png" />
        <ImageCharacter className="two" src="./images/image 2.png" />
        <ImageCharacter className="three" src="./images/image 3.png" />
      </CharacterContainer>

      <HeroInfoContainer ref={ref}>
        <Heading>We Are Designify</Heading>
        <Text showcase={true}>
          A team of passionate designers and developers from Yogyakarta
        </Text>
        <HeroButtonWrapper>
          <AnimationWrapper>
            <HeroButton
              onClick={() => toggleModal()}
              className={isVisible ? null : "corner"}
            >
              {isVisible ? "let's talk" : <FiMail className="float-icon" />}
            </HeroButton>
          </AnimationWrapper>
        </HeroButtonWrapper>
      </HeroInfoContainer>
      {showModal && <Modal toggleModal={toggleModal} />}
    </HeroSection>
  );
};
