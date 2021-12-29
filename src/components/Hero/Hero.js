import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to<br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Enthusiastic web dev with over 1 year of Front-End experience
      </SectionText>
      <Button onClick={() => window.location= "#"}>
        Learn More
      </Button>
    </LeftSection>
  </section>
);

export default Hero;
