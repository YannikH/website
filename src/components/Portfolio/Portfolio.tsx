import { Box, Chip } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import { Content, ImageCarousel, Row, Subtitle, Title } from './Common';
import { Container } from './Landing';

const ProjectTitle = styled(Title)`
  font-weight: 400;
`;
const ProjectHeader = styled(Subtitle)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
`;

const SkillContainer = styled.div`
  padding: 15px 0;
  div {
    margin: 0 5px;
    :first-child {
      margin-left: 0;
    }
  }
`;

const GoalList = styled.ul`
  list-style: none;
  li {
    position: relative;
    padding: 5px 0;
    :before {
      position: absolute;
      left: -19px;
      top: 45%;
      width: 10px;
      height: 5px;
      background-color: ${props => props.theme.accentTertiary };
      content: "";
    }
  }
`;

const PortfolioDescription = styled.div`
  text-align: center;
  margin: 30px;
`;

type Project = {
  title: string,
  skills: string[],
  goals: string[],
  images: string[]
};
const projects : Project[] = [
  {
    title: 'Project Hatchet',
    skills: ['Game Design', 'Game Scripting', 'Software Architecture', 'Team Leading'],
    goals: [
      'Create a development framework to enable the easy building of detailed interactive vehicle cockpits',
      'Create a realistic representation of a UH-60M Blackhawk helicopter in Arma III',
      'Create a multi-crew helicopter, with all systems synchronized between pilot and co-pilot in a multiplayer environment'
    ],
    images: ['https://placehold.co/400', 'https://placehold.co/400']
  },
  {
    title: 'F/A-18E/F Super Hornet',
    skills: ['Game Design', 'Game Scripting', 'Prototyping'],
    goals: [
      'Create the first fixed wing aircraft for Arma III with an interactive cockpit',
      'Build simulator-like weapons, sensors and avionics'
    ],
    images: ['https://placehold.co/400', 'https://placehold.co/400']
  }
];

const CarouselContainer = styled.div`
  min-width: 400px;
  max-width: 400px;
`;

const Project = ({title, skills, goals, images}: Project) => {
  return (
    <Row style={{ padding: '20px 0' }}>
      <CarouselContainer>
        <ImageCarousel images={ images }/>
      </CarouselContainer>
      <Box p={2}>
        <ProjectTitle>{ title }</ProjectTitle>
        <ProjectHeader>Skills</ProjectHeader>
        <SkillContainer>
          { skills.map(skill => <Chip label={ skill } variant="outlined"></Chip>) }
        </SkillContainer>
        <ProjectHeader>Goals</ProjectHeader>
        <GoalList>
          { goals.map(goal => <li>{ goal }</li>) }
        </GoalList>
      </Box>
    </Row>
  );
};

const Portfolio = () => (
  <Container>
    <PortfolioDescription>
      <ProjectHeader>Here you can see some of my hobby projects</ProjectHeader>
      <Content>If you'd like to see my professional work, feel free to go have a look at my CV</Content>
      <hr />
    </PortfolioDescription>

    { projects.map(project => <Project {...project}/>)}

  </Container>
);

export default Portfolio;