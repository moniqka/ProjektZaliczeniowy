import React from 'react';
import { ImageContainer, Image } from './Picture.css'

export const Picture = ({pic}) => {
  return (
    <ImageContainer  backgImg={pic}>
      <Image alt={pic} src={pic}></Image>
    </ImageContainer>
  );
}