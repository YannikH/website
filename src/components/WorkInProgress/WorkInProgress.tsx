import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconProp, library } from '@fortawesome/fontawesome-svg-core'
import { PreviewDisplay } from '../Blog/Blog';
import { Box, Container } from '@mui/material';
import MarkDown from '../Util/MarkDown';

library.add(faPersonDigging, faLinkedin, faGithub)

const WipContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  color: #e74300;
`;

const WipCard = styled.div`
  text-align: center;
`;

const WipTitle = styled.h1`
  font-weight: 400;
  letter-spacing: 1.5px;
`;

const IconWrapper = styled.p`
  font-size: 5em;
  margin: 10px 0;
`;

const MediaList = styled.ul`
  list-style-type: none;
  color: #3737ab;
  text-align: left;
`;

const ItemName = styled.span`
  font-size: 2em;
  padding-left: 15px;
`;

const UnstyledLink = styled.a`
  text-decoration:none;
  color: #3737ab;
`;

const MediaItem = ({icon, name, link}: {icon: IconProp; name: string, link: string}) => {
  return (
  <li>
    <UnstyledLink href={link}>
      <FontAwesomeIcon icon={icon} size="2x" /> <ItemName>{name}</ItemName>
    </UnstyledLink>
  </li>
)}

const WorkInProgress = () => {
  document.title = "Work In Progress"
  return (
    <div style={{ height: '100%' }}>
      <WipContainer>
        <WipCard>
          <WipTitle>Work In Progress</WipTitle>
          Thank you for visiting my website, unfortunately I'm currently renovating it.
          <IconWrapper>
            <FontAwesomeIcon icon={faPersonDigging} />
          </IconWrapper>
        </WipCard>
          <MediaList>
            <MediaItem icon={faLinkedin} name={"Yannik Hegge"} link={"https://www.linkedin.com/in/yannik-hegge-85516b92/"}></MediaItem>
            <MediaItem icon={faGithub} name={"YannikH"} link={"https://github.com/YannikH"}></MediaItem>
          </MediaList>
      </WipContainer>
      
    </div>
  );
};

export default WorkInProgress;
