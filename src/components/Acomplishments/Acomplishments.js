import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const data = [
  // { number: 20, text: 'Open Source Projects'},
  // { number: 1000, text: 'Students', },
  // { number: 1900, text: 'Github Followers', },
  // { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section>
    <ScrollReveal>
      <SectionTitle>Personal Accomplishments</SectionTitle>
    </ScrollReveal>
    <ScrollReveal delay={0.2}>
      <Boxes>
        {data.map((card, index) =>
          <Box key={index}>
            <BoxNum>{card.number}+</BoxNum>
          </Box>)}
        <Box>
          <BoxText>Info coming soon</BoxText>
        </Box>
      </Boxes>
    </ScrollReveal>
  </Section>
);

export default Acomplishments;
