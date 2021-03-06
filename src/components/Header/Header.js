import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <div>
    <Container>
      <Div1>
        <Link href="/">
          <a style={{ display: "flex", alignitems: "center",color:'white', marginBottom: '20px' }}>
            <DiCssdeck size= "3rem" /> <Span>Portfolio</Span>
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
        <SocialIcons href="https://github.com/Billioma">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linkedin.com/mwlite/in/bilal-omari-978911124">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://ibeomari@gmail.com">
          <AiFillGoogleCircle size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </div>
);

export default Header;
