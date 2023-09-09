import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Background = styled.div`
  background-color: ${props => props.theme.primary};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Body = styled.div`
  flex-grow: 1;
`;

export const Title = styled.h1`
  margin: 0;
  color: ${props => props.theme.secondary};
  font-family: 'Montserrat', sans-serif;
  font-weight: 200;
  font-size: 2.5em;
  letter-spacing: 1px;
`;


export const Subtitle = styled.h2`
  margin: 0;
  color: ${props => props.theme.secondary};
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  font-size: 1.5em;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.p`
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.secondary};
  font-size: 1.1em;
`;

export const ImageCarousel = ({images}: {images: string[]}) => {
  return (
    <Carousel showThumbs={false}>
      { images.map(image => (
        <div>
          <img src={ image } />
        </div>
      ))}
    </Carousel>
  )
};