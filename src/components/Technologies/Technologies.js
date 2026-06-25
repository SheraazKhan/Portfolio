import React from 'react';
import { DiReact, DiFirebase } from 'react-icons/di';
import { FaCode, FaLinux, FaNetworkWired, FaCertificate } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, IconWrapper } from './TechnologiesStyles';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../ScrollReveal/ScrollReveal';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <ScrollReveal>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the web development world.
        From Back-end to Design.
      </SectionText>
    </ScrollReveal>
    <StaggerContainer staggerDelay={0.1}>
      <List>
        <StaggerItem>
          <ListItem>
            <IconWrapper><DiReact size="24" /></IconWrapper>
            <ListContainer>
              <ListTitle>Front-End</ListTitle>
              <ListParagraph>
                Experience with<br />
                React.js
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </StaggerItem>
        <StaggerItem>
          <ListItem>
            <IconWrapper><DiFirebase size="24" /></IconWrapper>
            <ListContainer>
              <ListTitle>Back-End</ListTitle>
              <ListParagraph>
                Experience with<br />
                Node and databases
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </StaggerItem>
        <StaggerItem>
          <ListItem>
            <IconWrapper><SiFigma size="20" /></IconWrapper>
            <ListContainer>
              <ListTitle>UI/UX</ListTitle>
              <ListParagraph>
                Experience with<br />
                Figma<br />
                Adobe Photoshop
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </StaggerItem>
        <StaggerItem>
          <ListItem>
            <IconWrapper><FaNetworkWired size="20" /></IconWrapper>
            <ListContainer>
              <ListTitle>Networking</ListTitle>
              <ListParagraph>
                Experience with<br />
                Wireshark
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </StaggerItem>
        <StaggerItem>
          <ListItem>
            <IconWrapper><FaCode size="20" /></IconWrapper>
            <ListContainer>
              <ListTitle>Languages</ListTitle>
              <ListParagraph>
                Python, C#, JavaScript,<br />
                Java, SQL, Linux
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </StaggerItem>
        <StaggerItem>
          <ListItem>
            <IconWrapper><FaCertificate size="20" /></IconWrapper>
            <ListContainer>
              <ListTitle>Certifications</ListTitle>
              <ListParagraph>
                COMPTIA Security+<br />
                Google Cybersecurity Certificate<br />
                COMPTIA A+ (In Progress)
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </StaggerItem>
        <StaggerItem>
          <ListItem>
            <IconWrapper><FaLinux size="20" /></IconWrapper>
            <ListContainer>
              <ListTitle>Linux Projects</ListTitle>
              <ListParagraph>
                VPN (WireGuard), SSH Honeypot,<br />
                Firewall &amp; IDS, Log Analyzer,<br />
                File Encryption Tools
              </ListParagraph>
            </ListContainer>
          </ListItem>
        </StaggerItem>
      </List>
    </StaggerContainer>
  </Section>
);

export default Technologies;
