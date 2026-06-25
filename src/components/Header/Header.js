import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href= "/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', gap: '8px'  }}>
          <Span>Sheraaz Khan</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/SheraazKhan" target="_blank" rel="noopener">
        <AiFillGithub size="2.4rem" />
      </SocialIcons>
      <SocialIcons href="https://linkedin.com" target="_blank" rel="noopener">
        <AiFillLinkedin size="2.4rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com" target="_blank" rel="noopener">
        <AiFillInstagram size="2.4rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
