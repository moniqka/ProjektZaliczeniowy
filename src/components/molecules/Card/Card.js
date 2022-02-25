import React from 'react';
import { Title } from '../../atoms/Title';
import { Picture } from '../../atoms/Picture/Picture';
import { Description } from '../../atoms/Description';
import { Info, CardWrapper } from './Card.css';

export const Card = ({name, picture, description, onClick}) => {
  return (
    <CardWrapper onClick={onClick}>
      <Picture pic={picture}/>
      <Info>
        <Title title={name}/>
        <Description desc={description}/>
      </Info>
    </CardWrapper>
  )
};

