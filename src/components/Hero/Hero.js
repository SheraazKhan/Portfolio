import React from 'react';
import {
  HeroSection,
  HeroContent,
  HeroBadge,
  HeroTitle,
  HeroSubtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
} from './HeroStyles';

const Hero = () => (
  <HeroSection>
    <HeroContent>
      <HeroBadge>Software Developer &amp; IT Specialist</HeroBadge>
      <HeroTitle>
        Building the Future,<br />
        One Line at a Time
      </HeroTitle>
      <HeroSubtitle>
        I create modern, performant digital experiences. Explore my projects and see what I can bring to your team.
      </HeroSubtitle>
      <ButtonGroup>
        <PrimaryButton href="#projects">View Projects</PrimaryButton>
        <SecondaryButton href="#about">Get In Touch</SecondaryButton>
      </ButtonGroup>
    </HeroContent>
  </HeroSection>
);

export default Hero;
