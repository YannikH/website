import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1.5em;
  margin-left: 20px;
`;

const NavbarLink = ({name, url}: {name: string; url: string;}) => (
    <StyledLink to={url}>
      {name}
    </StyledLink>
);

const LinkContainer = styled.div`
margin-left: 50px;
`;

const Navbar = ({title = "Laser Guided Bullshit", children = <></>}) => (
  <AppBar position="static">
    <CssBaseline />
    <Toolbar>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Box  sx={{ display: 'flex'}}>
          <Typography variant="h4">
            {title}
          </Typography>
          <LinkContainer>
            {children}
          </LinkContainer>
        </Box>
        <LinkContainer>
          <NavbarLink name={"Home"} url={"/"}></NavbarLink>
          <NavbarLink name={"Blog"} url={"/blog"}></NavbarLink>
          <NavbarLink name={"MD Editor"} url={"/blog/editor"}></NavbarLink>
        </LinkContainer>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar