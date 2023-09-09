import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import About from './About';
import { Background, Body } from './Common';
import Navbar from './Navbar';
import { useLocation } from 'react-router-dom';
import Portfolio from './Portfolio';
import Footer from './Footer';


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
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Navbar />
        <Body>
          { useLocation().hash === '#About' ? <About /> : <></> }
          { useLocation().hash === '#Portfolio' ? <Portfolio /> : <></> }
        </Body>
        <Footer />
      </Background>
    </ThemeProvider>
  );
};

export default Landing;