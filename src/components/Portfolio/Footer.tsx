import React from 'react'
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';
import styled from 'styled-components';
import { IconLink, Row, Subtitle } from './Common';

const FooterContainer = styled(Row)`
  justify-content: center;
  padding: 30px;
  color: white;
  align-items: flex-end;
`;

const Footer = () => (
  <FooterContainer>
    <IconLink href="https://www.linkedin.com/in/yannik-hegge-85516b92/" target='_blank'><LinkedIn/></IconLink>
    <IconLink href="https://github.com/YannikH" target='_blank'><GitHub /></IconLink>
    <IconLink href="https://www.instagram.com/yahegge/" target='_blank'><Instagram/></IconLink>
  </FooterContainer>
);

export default Footer;