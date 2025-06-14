import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10vh;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerContentHeaderMobileLogo = styled.div`
  display: none;
  width: 50%;
  height: 100%;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const LogoMobile = styled.div`
  display: none;
  width: 40%;
  height: 100%;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Logo = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  width: 60%;
  height: 100%;
  align-items: center;
  height: 100%;
  gap: 4rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-family: ${({ theme }) => theme.font.base};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weights.regular};
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
  cursor: pointer;
`;

export const ButtonRequest = styled.button`
  width: 230px;
  height: 68px;
  padding: 20px 35px 20px 35px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 14px;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.font.weights.regular};
  cursor: pointer;
`;
