import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import styled from "styled-components";
import content from './content.json'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1.5em;
  margin-left: 20px;
`;

const NavbarLink = ({name, url}) => (
    <StyledLink to={url}>
      {name}
    </StyledLink>
);

const LinkContainer = styled.div`
margin-left: 50px;
`;

const Navbar = () => (
  <AppBar position="static">
    <CssBaseline />
    <Toolbar>
      <Typography variant="h4">
        Laser Guided Bullshit
      </Typography>
      <LinkContainer>
        <NavbarLink name={"Home"} url={"/"}></NavbarLink>
        <NavbarLink name={"Blog"} url={"/blog"}></NavbarLink>
      </LinkContainer>
    </Toolbar>
  </AppBar>
);

export default Navbar