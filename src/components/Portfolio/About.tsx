import { Box } from '@mui/system';
import React from 'react'
import styled from 'styled-components'
import { Content, Row, Subtitle } from './Common';
import { Container } from './Landing';

const ProfileImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

const About = () => (
  <Container>
    <Row>
      <ProfileImg src='profile.png'/>
      <Box p={2}>
        <Subtitle>About me</Subtitle>
        <Content>A driven game developer and software engineer, with broad experience ranging from functional programming in banking infrastructure to designing immersive user experiences in games.</Content>
        <Content>I've been developing game features since I've been a teenager, starting out with game modding, and doing professional development work since 2019. I am passionate about creating faithful and fun interpretations of real world equipment and systems in videogames.</Content>
        <Content>Above all, I am eager to learn and quick to adapt to new challenges and environments.</Content>
      </Box>
    </Row>
  </Container>
);

export default About;