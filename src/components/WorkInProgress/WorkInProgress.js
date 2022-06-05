import React from 'react';
import styles from './WorkInProgress.module.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'

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

const MediaItem = ({icon, name, link}) => {
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
    <div className={styles.WorkInProgress}>
      <WipContainer>
        <WipCard>
          <WipTitle>Work In Progress</WipTitle>
          Thank you for visiting my website, unfortunately I'm currently renovating it.
          <IconWrapper>
            <FontAwesomeIcon icon="fa-solid fa-person-digging" />
          </IconWrapper>
        </WipCard>
          <MediaList>
            <MediaItem icon={"fa-brands fa-linkedin"} name={"Yannik Hegge"} link={"https://www.linkedin.com/in/yannik-hegge-85516b92/"}></MediaItem>
            <MediaItem icon={"fa-brands fa-github"} name={"YannikH"} link={"https://github.com/YannikH"}></MediaItem>
          </MediaList>
      </WipContainer>
    </div>
  );
};

export default WorkInProgress;
