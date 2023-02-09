import React from 'react';
import Link from 'next/link';

import{
    CardContainer,
    ImageContainer,
    ContentContainer,
    Title,
    Description,
    Price,
    LinkContainer,
    InfoContainer,
    Info
} from './style'

const TravelCard = ({ title, description, price, imageUrl, duration, departure, rating, transport }) => {
    return (
      <CardContainer>
        <ImageContainer src={imageUrl} />
        <ContentContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Price>Preço: {price}</Price>
          <InfoContainer>
            <Info>Duração: {duration} dias</Info>
            <Info>Partida: {departure}</Info>
            <Info>Traslado: {transport}</Info>
          </InfoContainer>
          <InfoContainer>
          <Info>Classificação: {rating}/5</Info>
          </InfoContainer>
          <Link href="/travel/[id]" as={`/travel/${title.toLowerCase().replace(/\s/g, '-')}`}>
            <LinkContainer>Ver detalhes</LinkContainer>
          </Link>
        </ContentContainer>
      </CardContainer>
    );
  };
  
  export default TravelCard;
  