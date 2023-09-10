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
  description?: string,
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
    images: ['assets/hatchet/1.jpg', 'assets/hatchet/3.png', 'assets/hatchet/4.jpg', 'assets/hatchet/2.png']
  },
  {
    title: 'Arma 3 SOG: Prairie Fire',
    description: 'I was part of the development team of the SOG: Prairie Fire third party DLC for Arma 3. On the team my focus was to configure weapons, sensors, displays and instruments for vehicles (mainly aircraft) to give them an authentic, realistic feeling while at the same time being accessible to casual players',
    skills: ['Game Design', 'Game Scripting', 'Asset configuration'],
    goals: [
      'Use existing arma functionality to implement realistic cockpit instrumentation',
      'Implement weapons systems that authentically represent the technology of the 1960s, that are at the same time simple to use for casual players',
      'Ensure all new custom features are in line with both Arma 3 and SOG:PF art and design standards'
    ],
    images: ['assets/sogpf/1.jpg', 'assets/sogpf/2.jpg', 'assets/sogpf/3.jpg']
  },
  {
    title: 'F/A-18E/F Super Hornet',
    skills: ['Game Design', 'Game Scripting', 'Asset configuration', 'Prototyping'],
    goals: [
      'Create the first fixed wing aircraft for Arma III with an interactive cockpit',
      'Build simulator-like weapons, sensors and avionics'
    ],
    images: ['assets/hornet/1.png', 'assets/hornet/2.jpg', 'assets/hornet/3.jpg']
  }
];

const CarouselContainer = styled.div`
  min-width: 50%;
  max-width: 50%;
  @media only screen and (max-width: 1000px) {
    max-width: 100%;
    height: auto;
  }
`;

const PortfolioContainer = styled.div`
  padding: 0 30px;
`;

const ProjectRow = styled(Row)`
  padding: 20px 0;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    flex-direction: column-reverse;
    border-bottom: solid 1px ${ props => props.theme.secondary };
  }
`;

const Project = ({title, skills, goals, images, description}: Project) => {
  return (
    <ProjectRow>
      <CarouselContainer>
        <ImageCarousel images={ images }/>
      </CarouselContainer>
      <Box p={2}>
        <ProjectTitle>{ title }</ProjectTitle>
        <Content>{ description }</Content>
        <ProjectHeader>Skills</ProjectHeader>
        <SkillContainer>
          { skills.map(skill => <Chip label={ skill } variant="outlined"></Chip>) }
        </SkillContainer>
        <ProjectHeader>Goals</ProjectHeader>
        <GoalList>
          { goals.map(goal => <li>{ goal }</li>) }
        </GoalList>
      </Box>
    </ProjectRow>
  );
};

const Portfolio = () => (
  <PortfolioContainer>
    <PortfolioDescription>
      <ProjectHeader>Here you can see some of my projects</ProjectHeader>
      <Content>If you'd only like to see my professional work, feel free to go have a look at my CV</Content>
      <hr />
    </PortfolioDescription>

    { projects.map(project => <Project {...project}/>)}

  </PortfolioContainer>
);

export default Portfolio;