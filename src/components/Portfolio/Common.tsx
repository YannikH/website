import React from 'react'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Background = styled.div`
  background-color: ${props => props.theme.primary};
  width: 100%;
  min-height: 100vh;
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
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
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
    <Carousel
      showThumbs={false}
      dynamicHeight={true}
    >
      { images.map(image => (
        <div>
          <img src={ image } />
        </div>
      ))}
    </Carousel>
  )
};

export const IconLink = styled.a`
  margin: 0 5px;
  text-decoration: none;
  color: ${ props => props.theme.secondary };
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  span {
    padding-left: 10px;
  }
  :visited {color: ${ props => props.theme.secondary };};
  svg {
    font-size:40px;
    transition: font-size 0.25s ease;
    color: ${ props => props.theme.secondary }
  }
  :hover {
    svg {font-size: 50px; }
  }
`;