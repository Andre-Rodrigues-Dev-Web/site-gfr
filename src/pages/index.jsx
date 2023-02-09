import React from 'react'
import Seo from '../Components/Seo'
import Menu from '../Components/Menu';
import { Content, Row } from '../Components/Containers/style';
import Button from '../Components/Buttons';
import TravelCard from '../Components/Cards';

//Mock
const travelPackages = [
  {
    title: 'Viagem para o Rio de Janeiro',
    description: 'Aproveite as belezas do Rio de Janeiro com essa incrível viagem.',
    price: 'R$ 2.000',
    imageUrl: 'https://4.bp.blogspot.com/-XCYK3NGAlf8/Tv-fPSQp9sI/AAAAAAAAMoY/3y3Ekj2UFLU/s1600/rio-de-janeiro_.jpg',
    duration: '7',
    departure: 'São Paulo',
    rating: '4.5',
    transport: 'Aéreo'
  },
  {
    title: 'Viagem para Nova York',
    description: 'Conheça a cidade que nunca dorme com essa viagem incrível.',
    price: 'R$ 4.500',
    imageUrl: 'http://viva-mundo.com/sites/default/files/images/posts/NewYork.jpg',
    duration: '10',
    departure: 'Rio de Janeiro',
    rating: '4.8',
    transport: 'Aéreo'
  },
  {
    title: 'Viagem para Cancún',
    description: 'Aproveite as belas praias de Cancún com essa viagem incrível.',
    price: 'R$ 3.500',
    imageUrl: 'https://1.bp.blogspot.com/-5phEIb8Z39A/VJKdRKm_keI/AAAAAAABDHo/M12HLluFZ2Y/s1600/Cancun-3.jpg',
    duration: '14',
    departure: 'São Paulo',
    rating: '4.2',
    transport: 'Aéreo + Terrestre'
  }
];

const Home = () => {
  return (
    <>
      <Seo
        titlepage="Agência de Viagens GFR: Explore o mundo com estilo e conforto"
        descriptionpage="Descubra o mundo com a Agência de Viagens GFR. Oferecemos pacotes de viagem personalizados com acomodações de luxo e experiências únicas. Reserve agora sua próxima aventura."
        keywordspage="Agência de Viagens, viagens, viagens personalizadas, pacotes de viagem, acomodações de luxo, experiências únicas, viagens ao redor do mundo, reservas de viagem"
        urlpage="https://gfrviagens.com.br/home"
      />
      <Menu/>
      <Content>
        {/* <Button
          size="8px 40px" 
          backgroundColor="red" 
          color="white" 
          onClick={() => alert('Hello!')}
        >
          Clique aqui
        </Button>  */}
        <Row>
          {travelPackages.map((travelPackage, index) => (
            <TravelCard key={index} {...travelPackage} />
          ))}
        </Row>
      </Content>
    </>
  )
}

export default Home;