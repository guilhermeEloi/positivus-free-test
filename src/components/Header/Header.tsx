"use client";

import Image from "next/image";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import { images } from "@/assets/images/images";

import {
  HeaderContainer,
  Logo,
  Nav,
  NavLink,
  ButtonRequest,
  ContainerContentHeaderMobileLogo,
  LogoMobile,
} from "./styles";
import { useState } from "react";
import { theme } from "@/styles/theme";

export function Header() {
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);

  const open = Boolean(openMenu);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenu(null);
  };

  return (
    <HeaderContainer>
      <ContainerContentHeaderMobileLogo>
        <IconButton onClick={handleOpenMenu}>
          <MenuIcon style={{ fontSize: 40, color: theme.colors.black }} />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={openMenu}
          open={open}
          onClose={handleCloseMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>
            <NavLink>About us</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink>Services</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink>Use Cases</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink>Pricing</NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink>Blog</NavLink>
          </MenuItem>
          <MenuItem>
            <ButtonRequest>Request a quote</ButtonRequest>
          </MenuItem>
        </Menu>

        <LogoMobile>
          <Image
            src={images.logoPositivus}
            alt="Logo Positivus"
            style={{ marginLeft: 10 }}
          />
        </LogoMobile>
      </ContainerContentHeaderMobileLogo>

      <Logo>
        <Image
          src={images.logoPositivus}
          alt="Logo Positivus"
          style={{ marginLeft: 26 }}
        />
      </Logo>
      <Nav>
        <NavLink>About us</NavLink>
        <NavLink>Services</NavLink>
        <NavLink>Use Cases</NavLink>
        <NavLink>Pricing</NavLink>
        <NavLink>Blog</NavLink>
        <ButtonRequest>Request a quote</ButtonRequest>
      </Nav>
    </HeaderContainer>
  );
}
