import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialIconsContainer } from './FooterStyles';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Footer = () => {
  return (
    <FooterWrapper>
      <ScrollReveal>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:647-210-3047">647-210-3047</LinkItem>
          </LinkColumn>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:sheraaz30@gmail.com">sheraaz30@gmail.com</LinkItem>
          </LinkColumn>
        </LinkList>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Innovating one project at a time</Slogan>
          </CompanyContainer>
          <SocialIcons href="https://github.com/SheraazKhan" target="_blank" rel="noopener">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com" target="_blank" rel="noopener">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://instagram.com" target="_blank" rel="noopener">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialIconsContainer>
      </ScrollReveal>
    </FooterWrapper>
  );
};

export default Footer;
