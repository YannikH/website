import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Background, Body, Column, IconLink, ImageCarousel, Row, Subtitle, Title } from './Common';
import { theme } from './Landing';
import { GitHub, LinkedIn, Instagram, Email, Home } from '@mui/icons-material';

const ImageContainer = styled.div`
  max-width: 400px;
  padding-right: 20px;
  @media only screen and (min-width: 1000px) {
    border-right: solid 1px ${ props => props.theme.secondary };
  }
`;

const IconLinkMargin = styled(IconLink)`
  margin-bottom: 10px;
`;

const Card = () => {
  return (
    <ThemeProvider theme={theme}> 
      <Background>
        <Column style={{height: '100vh', justifyContent: 'center', alignItems: 'center'}}>
          <Row style={{alignItems: 'center ', justifyContent: 'center', padding: '30px'}}>
            <ImageContainer>
              <ImageCarousel images={['profile-rounded.png', 'qr-code.png']}/>
            </ImageContainer>
            <Column style={{ paddingLeft: '20px', height: '100%'}}>
              <Title style={{margin: '10px 0'}}>Yannik Hegge</Title>
              <Subtitle style={{marginBottom: '10px'}}>Senior Technical Designer @ Bohemia Interactive Simulations</Subtitle>
              <IconLinkMargin href="https://www.linkedin.com/in/yannik-hegge-85516b92/" target='_blank'><LinkedIn/> <span>Yannik Hegge</span></IconLinkMargin>
              <IconLinkMargin href="https://github.com/YannikH" target='_blank'><GitHub /> <span>YannikH</span></IconLinkMargin>
              <IconLinkMargin href="https://www.instagram.com/yahegge/" target='_blank'><Instagram/> <span>YAHegge</span></IconLinkMargin>
              <IconLinkMargin href="https://www.yahegge.nl" target='_blank'><Home/> <span>yahegge.nl</span></IconLinkMargin>
              <IconLinkMargin target='_blank'><Email /> <span>contact@yannikhegge.com</span></IconLinkMargin>
            </Column>
          </Row>
        </Column>
      </Background>
    </ThemeProvider>
  );
};

export default Card;