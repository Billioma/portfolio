import React from 'react';
import { AiFillGithub, AiFillGoogleCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="tel:111-111-111">+234-909-780-5302</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:ibeomari@gmail.com">ibeomari@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/Billioma">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://linked.com/mwlite/in/bilal-omari-978911124">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://ibeomari@gmail.com">
          <AiFillGoogleCircle size="3rem" />
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
