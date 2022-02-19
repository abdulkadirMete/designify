import React from "react";
import { Client } from "../components/client/Client";
import { Feature } from "../components/feature/Feature";
import { Hero } from "../components/hero/Hero";
import { Footer } from "../components/footer/Footer";
import { Content } from "../components/content/Content";
import { heroOne, heroTwo, heroThree, heroFour } from '../data/HeroData';
import { InnerHeading } from "../globalStyles";


export const Home = () => {
  return (
    <>
      <Hero />
      <Feature />
      <Client />
      <InnerHeading style={{letterSpacing:'1px'}}>Our Projects</InnerHeading>
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
      <Content {...heroFour} />
      <Footer />
    </>
  );
};
