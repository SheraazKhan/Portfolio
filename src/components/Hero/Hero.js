import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome to <br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
      The purpose of this Portfolio is to show what I have done and capable of. Click the learn more for my github.
    </SectionText>
    <Button onClick={() => window.location = 'github.com/SheraazKhan'}>Learn More</Button>
  </LeftSection>
</Section>
);

export default Hero;