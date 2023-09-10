import { YouTube, Link } from '@mui/icons-material';
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

type ProjectLinkData = {
  link: string,
  label: string,
  description: string,
  type?: 'Youtube'
};

type Project = {
  title: string,
  descriptionLines: string[],
  skills: string[],
  goals: string[],
  images: string[],
  links: ProjectLinkData[]
};
const projects : Project[] = [
  {
    title: 'Reusable HTML-5 Game HUD',
    descriptionLines: ['This was a personal hobby project that directly came out of a desire to update the old Heads Up Display found in the product I work on.', 'The aim was to freshen up the UI and make it look more modern, and build a robust modular keybind hint system that would help features become more self-teaching.', ' An internal development effort to implement the hint system prototyped as part of this HUD is currently ongoing.'],
    skills: ['Competitive research', 'UI/UX Design', 'Figma mockups', 'Prototyping', 'Game Scripting', 'Web Development'],
    goals: [
      'Follow a clear UX process going from competitive research, to Figma mockups, to implementation',
      'Create a HUD that has a clear hint system showing new players what keybinds are available',
      'Make the HUD smoothly switch between keyboard+mouse and controller usage',
      'Make the HUD have an API to show hints from external plugins and features, instead of hard-coding them in the UI'
    ],
    images: ['assets/hud/hud-game.png', 'assets/hud/whiteboard.png', 'assets/hud/hud-figma.png', 'assets/hud/hud.png'],
    links: [
      {link: 'https://hud.yahegge.nl/', label: 'Demo', description: 'An example web page that shows the HUD and its data'},
      {link: 'https://www.figma.com/file/EsKI7mklusYsZA588Pc7wL/HUD?type=design&mode=design&t=MxohztF3tlYlVEOx-1', label: 'Figma design', description: ''}
    ]
  },
  {
    title: 'Project Hatchet',
    descriptionLines: ['Project hatchet is an Arma 3 modding project that aimed to create a more simulator-like experience for Arma 3 helicopters, while still remaining accessible to casual players.'],
    skills: ['Game Design', 'Game Scripting', 'Software Architecture', 'Team Leading'],
    goals: [
      'Create a development framework to enable the easy building of detailed interactive vehicle cockpits',
      'Create a realistic representation of a UH-60M Blackhawk helicopter in Arma III',
      'Create a multi-crew helicopter, with all systems synchronized between pilot and co-pilot in a multiplayer environment'
    ],
    images: ['assets/hatchet/1.jpg', 'assets/hatchet/3.png', 'assets/hatchet/4.jpg', 'assets/hatchet/2.png'],
    links: [
      {label: 'Test footage', description: '', link: 'https://www.youtube.com/watch?v=pmcj5hLapbo&ab_channel=Yax', type: 'Youtube'},
      {label: 'Team Interview', description: '', link: 'https://www.helisimmer.com/interview/interview-project-hatchet-arma-3-blackhawk'},
      {label: 'Example ref doc: engine instruments', description: '', link: 'https://docs.google.com/document/d/17zrnR8zU0gkxW_CgC7hJ4myaEql_y0AIpVN0JQstkUs/edit?usp=sharing'},
      {label: 'Example ref doc: MH-60M Exterior features', description: '', link: 'https://docs.google.com/presentation/d/1lf11zpj2yOJOVoQe16BEU9TifCzXm5FDYklQ-SOXQic/edit?usp=sharing'},
      {label: 'User manual', description: '', link: 'https://uh-60m.gitbook.io/workspace/'},
      {label: 'Github', description: '', link: 'https://github.com/Project-Hatchet/H-60'},
    ]
  },
  {
    title: 'Arma 3 SOG: Prairie Fire',
    descriptionLines: ['I was part of the development team of the SOG: Prairie Fire third party DLC for Arma 3.', ' On the team my focus was to configure weapons, sensors, displays and instruments for vehicles (mainly aircraft) to give them an authentic, realistic feeling while at the same time being accessible to casual players.'],
    skills: ['Game Design', 'Game Scripting', 'Asset configuration'],
    goals: [
      'Use existing arma functionality to implement realistic cockpit instrumentation',
      'Implement weapons systems that authentically represent the technology of the 1960s, that are at the same time simple to use for casual players',
      'Ensure all new custom features are in line with both Arma 3 and SOG:PF art and design standards'
    ],
    images: ['assets/sogpf/1.jpg', 'assets/sogpf/2.jpg', 'assets/sogpf/3.jpg'],
    links: [
      {label: 'Trailer', description: '', link: 'https://www.youtube.com/watch?v=ka2kXeRWgFs', type: 'Youtube'},
      {label: 'Steam Store', description: '', link: 'https://store.steampowered.com/app/1227700/Arma_3_Creator_DLC_SOG_Prairie_Fire/'},
    ]
  },
  {
    title: 'F/A-18E/F Super Hornet',
    descriptionLines: ['The F/A-18E/F Super Hornet was an established Arma 3 mod when I took it over in 2019 together with a 3d artist.', 'Together we rebuilt the internal and exernals, overhauled the flight model, added an interactive cockpit, and added simulator-like features which were not seen before in Arma 3 up to this point.'],
    skills: ['Game Design', 'Game Scripting', 'Asset configuration', 'Prototyping'],
    goals: [
      'Create the first fixed wing aircraft for Arma III with an interactive cockpit',
      'Build simulator-like weapons, sensors and avionics'
    ],
    images: ['assets/hornet/1.png', 'assets/hornet/2.jpg', 'assets/hornet/3.jpg'],
    links: [
      {label: 'Release video', description: '', link: 'https://www.youtube.com/watch?v=oZkHxipsj5w&ab_channel=Yax', type: 'Youtube'},
      {label: 'User manual', description: '', link: 'https://docs.google.com/document/d/1GkPktmwmrBR5OXrPUqc6rwRRMUCZC_n6_b6OHKI9Ogc/edit#heading=h.lpiepsfbap1g'}
    ]
  }
];

const CarouselContainer = styled.div`
  min-width: 50%;
  max-width: 50%;
  @media only screen and (max-width: 1200px) {
    max-width: 100%;
    height: auto;
  }
`;

const PortfolioContainer = styled.div``;

const ProjectRow = styled(Row)`
  padding: 20px 30px;
  align-items: center;
  @media only screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }
  :nth-child(odd) {
    background-color: ${ props => props.theme.primaryDark };
  }
`;

const ProjectLinkAnchor = styled.a`
  div {
    cursor: pointer;
    margin-top: 10px;
  }
  padding-right: 10px;
`;

const LinkChip = styled(Chip)`
  background-color: ${ props => props.theme.accent } !important;
  color: ${ props => props.theme.primary } !important;
`;

const YoutubeChip = styled(Chip)`
  background-color: ${ props => props.theme.accentTertiary } !important;
  color: ${ props => props.theme.primary } !important;
  span, path {
    color: ${ props => props.theme.primary } !important;
  }
`;

const ProjectLink = ({link, label, description, type}: ProjectLinkData) => {
  if (type && type == 'Youtube') {
    return (
      <ProjectLinkAnchor href={link} target="_blank">
        <YoutubeChip icon={<YouTube />} label={label}/>
      </ProjectLinkAnchor>
    )
  }
  return (
    <ProjectLinkAnchor href={link} target="_blank">
      <LinkChip label={label}/>
    </ProjectLinkAnchor>
  );
};

const Project = ({title, skills, goals, images, descriptionLines, links}: Project) => {
  return (
    <ProjectRow>
      <CarouselContainer>
        <ImageCarousel images={ images }/>
      </CarouselContainer>
      <Box p={2}>
        <ProjectTitle>{ title }</ProjectTitle>
        { descriptionLines.map(line => <Content> {line} </Content>) }
        <ProjectHeader>Skills</ProjectHeader>
        <SkillContainer>
          { skills.map(skill => <Chip label={ skill } variant="outlined"></Chip>) }
        </SkillContainer>
        <ProjectHeader>Goals</ProjectHeader>
        <GoalList>
          { goals.map(goal => <li>{ goal }</li>) }
        </GoalList>
        { links.length > 0 ? <>
          <ProjectHeader>Links</ProjectHeader>
          { links.map(link => <ProjectLink {...link} />) }
        </> : <></>}
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