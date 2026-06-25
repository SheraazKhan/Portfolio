import React from 'react';

import { AboutContainer, AboutText } from './TimeLineStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Timeline = () => {
  return (
    <Section id="about">
      <ScrollReveal>
        <SectionTitle>About Me</SectionTitle>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <AboutContainer>
          <AboutText>
            <p>
              Hey, I'm Sheraaz Khan — a software developer and IT support specialist based in Toronto. I recently completed an Advanced Diploma in Software Engineering and bring over 4 years of hands-on experience helping people solve tech problems, set up systems, and stay secure.
            </p>
            <p>
              I'm passionate about building clean, functional, and user-friendly web and mobile apps. I love learning new tools, writing code that solves real problems, and collaborating with others to create great digital experiences.
            </p>
            <p>
              From Python scripts to automate tasks, to building frontends in JavaScript, or even setting up basic cloud environments — I'm always looking to level up my skills.
            </p>
            <p>
              Outside of tech, I come from a healthcare background, which taught me the importance of empathy, clear communication, and staying calm under pressure — qualities I carry into every project.
            </p>
            <p>
              I'm currently looking to join a supportive team where I can grow as a developer and contribute to meaningful work.
            </p>
          </AboutText>
        </AboutContainer>
      </ScrollReveal>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
