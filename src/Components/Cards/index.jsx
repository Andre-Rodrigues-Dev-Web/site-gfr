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

const TravelCard = ({ title, description, price, imageUrl, duration, departure, rating, transport, id }) => {
  const href = id ? `/pacote/${id}` : '#';
  const as = id ? `/pacote/${id}` : '#';

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
        <Link href={href} as={as}>
          <LinkContainer>Ver detalhes</LinkContainer>
        </Link>
      </ContentContainer>
    </CardContainer>
  );
};

export default TravelCard;

  