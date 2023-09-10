import React from 'react'
import { GitHub, LinkedIn, Instagram, Email } from '@mui/icons-material';
import styled from 'styled-components';
import { Column, IconLink, Row, Subtitle } from './Common'
import { Container } from './Landing';
import { Button, Input, TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactColumn = styled(Column)`
  width: 50%;
  :last-child {
    @media only screen and (max-width: 1000px) {
      padding-top: 20px;
    }
    @media only screen and (min-width: 999px) {
      border-left: solid 1px ${ props => props.theme.secondary };
      padding-left: 30px;
    }
  }
`;

const Contact = () => {
  const copyEmail = () => {
    navigator.permissions.query({ name: "clipboard-write" as PermissionName }).then((result) => {
      if (result.state == "granted" || result.state == "prompt") {
        navigator.clipboard.writeText('contact@yannikhegge.com')
        toast('contact@yannikhegge.com has been copied to your clipboard', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
  };
  return (
    <Container>
      <form action="https://formsubmit.co/contact@yannikhegge.com" method="POST">
        <Row>
          <ContactColumn>
            <Subtitle>You can reach out to me on these platforms</Subtitle>
            <br />
            <IconLink href="https://www.linkedin.com/in/yannik-hegge-85516b92/" target='_blank'><LinkedIn/> <span>Yannik Hegge</span></IconLink>
            <IconLink href="https://github.com/YannikH" target='_blank'><GitHub /> <span>YannikH</span></IconLink>
            <IconLink href="https://www.instagram.com/yahegge/" target='_blank'><Instagram/> <span>YAHegge</span></IconLink>
            <IconLink onClick={copyEmail} target='_blank'><Email /> <span>contact@yannikhegge.com</span></IconLink>
          </ContactColumn>
          <ContactColumn>
            <Subtitle>Or you can send me a message directly here</Subtitle>
            <br />
            <TextField type="text" name="name" label="Your name" variant="outlined" required />
            <br />
            <TextField type="email" name="email" label="Your email address" variant="outlined" required />
            <br />
            <TextField type="text" name="message" label="Content" multiline rows={4} required />
            <br />
            <Button type="submit" variant="contained">Send</Button>
            <input type="hidden" name="_autoresponse" value="Thank you for contacting me! I'll try to get back to you as soon as I can!"></input>
            <input type="text" name="_honey" style={{display:'none'}}></input>
            <input type="hidden" name="_subject" value="yahegge.nl contact"></input>
            <input type="hidden" name="_next" value="http://localhost:3000/#About"></input>
          </ContactColumn>
        </Row>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </Container>
  );
}

export default Contact;
