import React from "react";
import Image from "next/image";

import Input from "@/components/Input/Input";
import SubscribeButton from "@/components/Button/Button";

import { images } from "@/assets/images/images";
import { theme } from "@/styles/theme";

import {
  FooterContainer,
  FooterContent,
  ContactSection,
  ContactLabel,
  ContactInfo,
  SubscribeSection,
  FooterBottom,
  FooterLinks,
  Separator,
  FooterHeader,
  Nav,
  NavLink,
  FooterSocials,
} from "./styles";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterHeader>
        <Image src={images.logoPositivusWhite} alt="Logo Positivus" />
        <Nav>
          <NavLink>About us</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Use Cases</NavLink>
          <NavLink>Pricing</NavLink>
          <NavLink>Blog</NavLink>
        </Nav>
        <FooterSocials>
          <Image src={images.iconLinkedinWhite} alt="Logo LinkedIn" />
          <Image src={images.iconFacebookWhite} alt="Logo Facebook" />
          <Image src={images.iconTwitterWhite} alt="Logo X(Antigo Twitter)" />
        </FooterSocials>
      </FooterHeader>
      <FooterContent>
        <ContactSection>
          <ContactLabel>Contact us:</ContactLabel>
          <ContactInfo>Email: info@positivus.com</ContactInfo>
          <ContactInfo>Phone: 555-567-8901</ContactInfo>
          <ContactInfo>
            Address: 1234 Main St
            <br />
            Moonstone City, Stardust State 12345
          </ContactInfo>
        </ContactSection>

        <SubscribeSection>
          <Input
            placeholder="Email"
            style={{
              backgroundColor: "transparent",
              borderColor: theme.colors.white,
              color: theme.colors.white,
            }}
          />
          <SubscribeButton
            style={{
              backgroundColor: theme.colors.primary,
              borderColor: theme.colors.primary,
              color: theme.colors.black,
            }}
          >
            Subscribe to news
          </SubscribeButton>
        </SubscribeSection>
      </FooterContent>

      <Separator />

      <FooterBottom>
        <span>© 2023 Positivus. All Rights Reserved.</span>
        <FooterLinks>Privacy Policy</FooterLinks>
      </FooterBottom>
    </FooterContainer>
  );
}
