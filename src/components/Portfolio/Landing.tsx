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

const theme = {
  primary: '#eaeaea',
  secondary: '#292929',
  accent: '#393fb2',
  accentSecondary: '#b2a239',
  accentTertiary: '#b23939',
};

const Landing = () => {
  const tabName = useLocation();
  const activeTab = (): string => {
    if (!['#About', '#Portfolio', '#Contact'].includes(tabName.hash)) return '#About';
    return tabName.hash;
  };
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Navbar />
        <Body>
          { activeTab() === '#About' ? <About /> : <></> }
          { activeTab() === '#Portfolio' ? <Portfolio /> : <></> }
          { activeTab() === '#Contact' ? <Contact /> : <></> }
        </Body>
        <Footer />
      </Background>
    </ThemeProvider>
  );
};

export default Landing;