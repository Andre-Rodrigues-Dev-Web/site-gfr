import React from 'react';
import styled from 'styled-components';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px;
`;

const DetailTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 32px;
`;

const DetailImage = styled.img`
  width: 500px;
  height: 300px;
  margin-bottom: 32px;
`;

const DetailInfo = styled.p`
  font-size: 18px;
  color: #333;
  text-align: center;
  margin-bottom: 32px;
`;

const Pacote = ({ package: { title, price, duration, departure, transport, rating, description, imageUrl }}) => {
    return (
      <DetailContainer>
        <DetailTitle>{title}</DetailTitle>
        <DetailImage src={imageUrl} />
        <DetailInfo>Preço: {price}</DetailInfo>
        <DetailInfo>Duração: {duration} dias</DetailInfo>
        <DetailInfo>Partida: {departure}</DetailInfo>
        <DetailInfo>Traslado: {transport}</DetailInfo>
        <DetailInfo>Classificação: {rating}/5</DetailInfo>
        <DetailInfo>{description}</DetailInfo>
      </DetailContainer>
    );
  };
  
export default Pacote;
  
  
