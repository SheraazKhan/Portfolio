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
      I've worked with a range a technologies in the web development world.
      From Back-end to Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Figma <br />
            Adobe Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
        <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Networking</ListTitle>
          <ListParagraph>
            Experience with <br />
            Wireshark
            
          </ListParagraph>
        </ListContainer>
      </ListItem>
        <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            Python <br />
            C# <br />
            JavaScript <br />
            Java <br />
            SQL <br />
            Linux
          </ListParagraph>
        </ListContainer>
      </ListItem>
        <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Certification</ListTitle>
          <ListParagraph>
            Completed <br />
            COMPTIA Security +  <br />
            Google Cybersecurity Professional Certificate <br />
            COMPTIA A+ (In Progres) 
          </ListParagraph>
        </ListContainer>
      </ListItem>
       <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Linux Project Completed</ListTitle>
          <ListParagraph>
            
            Self-hosted VPN (Wire Guard)  <br />
            SSH honeypot with alerting <br />
            File encryption, malware & ransomware detection tools <br />
            Firewall setup and intrusion detection (DoS, SQLi, phishing) <br />
            Log Analyzer (Python) <br />
            Intrusion Detection Simulation (Bash) <br />
            Personal Portfolio Website<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
