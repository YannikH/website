import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import About from './About';
import { Background, Body } from './Common';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import Portfolio from './Portfolio';
import Footer from './Footer';
import Contact from './Contact';


export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
`;

export const theme = {
  primary: '#fff',
  primaryDark: '#f5f5f5',
  secondary: '#292929',
  accent: '#395cb2',
  accentSecondary: '#b2a239',
  accentTertiary: '#b23939',
};

const Tab = styled.div`
  transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
`;

const BackgroundLeft = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: url('steps-left.svg');
  background-repeat: repeat-y;
  background-size: contain;
`;
const BackgroundRight = styled(BackgroundLeft)`
  left: 50%;
  background: url('steps-right.svg');
  background-position: right;
  background-size: contain;
`;

const Landing = () => {
  const tabName = useLocation();
  const activeTab = (): string => {
    if (!['#About', '#Portfolio', '#Contact'].includes(tabName.hash)) return '#About';
    return tabName.hash;
  };
  const activeStyle = (tabName: string) => {
    const hiddenStyle = {
      maxHeight: 0,
      overflow: 'hidden',
      opacity: 0,
      visibleStyle: 'hidden'
    };

    const visibleStyle = {
      maxHeight: 'none',
      opacity: 1,
      visibleStyle: 'visible'
    };
    return (activeTab() === tabName) ? visibleStyle: hiddenStyle;
  }
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <BackgroundLeft />
        {/* <BackgroundRight /> */}
        <Navbar />
        <Body>
          <Tab style={activeStyle('#About')}><About /></Tab>
          <Tab style={activeStyle('#Portfolio')}><Portfolio /></Tab>
          <Tab style={activeStyle('#Contact')}><Contact /></Tab>
        </Body>
        <Footer />
      </Background>
    </ThemeProvider>
  );
};

export default Landing;