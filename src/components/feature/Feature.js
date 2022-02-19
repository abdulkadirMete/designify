import React from "react";
import { Container, Text } from "../../globalStyles";
import {
  FeatureGrid,
  FeatureHeading,
  FeatureItem,
  FeatureSection,
  FeatureItemHeader,
  FeatureItemIcon,
  FeatureItemTextWrapper,
} from "./FeatureStyles";

import { featuresData } from "../../data/FeaturesData";

export const Feature = () => {
  return (
    <FeatureSection id='about'>
      <Container>
        <FeatureHeading>What We Do</FeatureHeading>
        <FeatureGrid>

            {featuresData.map((feature,index) => {
                return <FeatureItem key={index}>
                    <FeatureItemIcon className={feature.imgClass}>{feature.icon}</FeatureItemIcon>
                    <FeatureItemHeader>{feature.name}</FeatureItemHeader>
                    <FeatureItemTextWrapper><Text showcase={true} grey={true}>{feature.description}</Text></FeatureItemTextWrapper>
                </FeatureItem>
            })}

        </FeatureGrid>
      </Container>
    </FeatureSection>
  );
};
