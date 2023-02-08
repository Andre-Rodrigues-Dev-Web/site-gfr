import React from 'react'
import Seo from '../Components/Seo'
import Lancamento from '../Components/Lancamento'
const Home = () => {
  return (
    <>
      <Seo
        titlepage="Agência de Viagens GFR: Explore o mundo com estilo e conforto"
        descriptionpage="Descubra o mundo com a Agência de Viagens GFR. Oferecemos pacotes de viagem personalizados com acomodações de luxo e experiências únicas. Reserve agora sua próxima aventura."
        keywordspage="Agência de Viagens, viagens, viagens personalizadas, pacotes de viagem, acomodações de luxo, experiências únicas, viagens ao redor do mundo, reservas de viagem"
        urlpage="https://gfrviagens.com.br/home"
      />
      <Lancamento/>
    </>
  )
}

export default Home;