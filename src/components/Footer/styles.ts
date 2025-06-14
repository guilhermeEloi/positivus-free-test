import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 75vw;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 60px 40px 30px;
  color: #fff;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  margin-top: 10vh;
`;

export const FooterHeader = styled.div`
  width: 100%;
  margin-bottom: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  width: 60%;
  height: 100%;
  align-items: center;
  height: 100%;
  gap: 4rem;
`;

export const NavLink = styled.a`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weights.regular};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: underline;
  cursor: pointer;
`;

export const FooterSocials = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;
  gap: 22px;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;
`;

export const ContactSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

export const ContactLabel = styled.span`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 7px 7px;
  border-radius: 7px;
  font-weight: ${({ theme }) => theme.font.weights.medium};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
  cursor: default;
`;

export const ContactInfo = styled.p`
  margin: 16px 0 0;
  font-family: ${({ theme }) => theme.font.base};
  font-weight: ${({ theme }) => theme.font.weights.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  cursor: default;
`;

export const SubscribeSection = styled.div`
  background-color: #292a32;
  padding: 24px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  min-width: 300px;
`;

export const Separator = styled.hr`
  margin: 40px 0 24px;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
`;

export const FooterBottom = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  cursor: default;
`;

export const FooterLinks = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: underline;
  cursor: pointer;
`;
