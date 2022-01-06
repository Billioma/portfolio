import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      2 years of experience working on personal projects,developing UI/UX designs using Front-End
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front End Skills</ListTitle>
          <ListParagraph>
            Experience with: <br />
            React.js.<br />
            Next.js.<br />
            HTML <br />
            CSS <br />
            Bootstrap <br />
            Tailwind CSS<br />
            Experience with tools like Figma<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/*<ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UXEnd</ListTitle>
          <ListParagraph>
            
          </ListParagraph>
        </ListContainer>
      </ListItem>*/}
    </List>
  </Section>
);

export default Technologies;
