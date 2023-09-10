import React, { useState } from 'react'
import { Title, Subtitle } from './Common'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';

const NavbarContainer = styled.div`
  padding-top: 20px;
  width: 100%;
  margin-bottom: 30px;
`;

const LinkRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 10px;
`;

const SubtitleLink = styled(Subtitle)<{ active?: boolean }>`
  margin: 0 30px;
  position: relative;
  cursor: pointer;
  &:after {
    left: 0;
    bottom: 0;
    position: absolute;
    content: "";
    width: 100%;
    width: ${props => props.active ? '100%' : '0'};
    height: 1px;
    border-bottom: solid 1px ${props => props.theme.secondary};
    transition: width 0.25s ease-out;
  };
`;

const Navbar = () => {
  const tabName = useLocation();
  const [active, setActive] = useState(tabName.hash);

  const setActiveTab = (tab: string) => {
    setActive(tab);
    window.location.hash = tab;
  };

  return (
    <NavbarContainer>
      <Title style={{textAlign: 'center'}}>Yannik Hegge</Title>
      <LinkRow>
        <SubtitleLink active={active == '#About'} onClick={() => setActiveTab('#About')}>About</SubtitleLink>
        <SubtitleLink active={active == '#Portfolio'} onClick={() => setActiveTab('#Portfolio')}>Portfolio</SubtitleLink>
        <SubtitleLink active={active == '#Contact'} onClick={() => setActiveTab('#Contact')}>Contact</SubtitleLink>
      </LinkRow>
    </NavbarContainer>
  );
};

export default Navbar;