import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { Container } from "../../globalStyles";
import { useInView } from "react-hook-inview";

import {
  ContentButton,
  ContentContainer,
  ContentDescribtion,
  ContentHeadline,
  ContentImage,
  ContentInfo,
  ContentSection,
  ContentTopLine,
  ImageWrapper,
} from "./ContentStyles";

export const Content = ({
  topLine,
  headline,
  description,
  buttonLabel,
  linkTo,
  reverse,
  alt,
  img,
  backgroundColor,
  start,
}) => {

  // Animation
  const initial = { opacity: 0, y: 30 };
  const animation = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      console.log("inview");
      animation.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [animation, inView]);

  return (
    <ContentSection ref={ref}>
      <Container>
        <ContentContainer reverse={reverse}>
          <Tilt className="Tilt" options={{ max: 20, scale: 1.01, speed: 200 }}>
            <ImageWrapper backgroundColor={backgroundColor}>
              <ContentImage
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                src={img}
                alt={alt}
              ></ContentImage>
            </ImageWrapper>
          </Tilt>

          <ContentInfo>
            <ContentTopLine
              animate={animation}
              initial={initial}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {topLine.text}
            </ContentTopLine>
            <ContentHeadline
              animate={animation}
              initial={initial}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {headline}
            </ContentHeadline>
            <ContentDescribtion
              animate={animation}
              initial={initial}
              transition={{ delay: 1, duration: 0.6 }}
            >
              {description}
            </ContentDescribtion>
            <ContentButton
              bg={backgroundColor}
              animate={animation}
              initial={initial}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              {buttonLabel}
            </ContentButton>
          </ContentInfo>
        </ContentContainer>
      </Container>
    </ContentSection>
  );
};
