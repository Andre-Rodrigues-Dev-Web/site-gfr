import React, { useState, useEffect  } from "react";

import {
    SliderContainer,
    ContainerButtons,
    Slider,
    Slide,
    SliderButton,
    Caption,
    Title,
    Description,
    PlayIcon,
    StopIcon
} from './style'
import Link from "next/link";

const destinations = [
  {
    id: 1,
    image: "https://www.lugarcertoimoveis.com.br/wp-content/uploads/2020/08/Atlantico-Bait-Copacabana-1.jpg",
    title: "Praia de Copacabana",
    description: "A praia mais famosa do Rio de Janeiro, no Brasil.",
  },
  {
    id: 2,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Eiffel_Tower_and_Pont_Alexandre_III_at_night_%28banner_esVoy%29.jpg",
    title: "Torre Eiffel",
    description: "Um dos pontos turísticos mais emblemáticos de Paris, na França.",
  },
  {
    id: 3,
    image: "https://westwaterarts.com/wp-content/uploads/2018/02/News_articleBanner_Grand-Canyon-Anniversary_2388x796.jpg",
    title: "Grand Canyon",
    description: "Um dos mais belos pontos turísticos dos Estados Unidos.",
  },
  {
    id: 4,
    image: "https://www.italia.it/sites/default/files/styles/italia_16_9_640/public/2019-10/colosseo.jpg?itok=8ZQ8Z8ZQ",
    title: "Coliseu de Roma",
    description: "Um dos pontos turísticos mais famosos de Roma, na Itália.",
  }
];

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            const timer = setTimeout(() => {
                setCurrentSlide((currentSlide + 1) % destinations.length);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [currentSlide, isPlaying]);

    const handlePrevClick = () => {
        setCurrentSlide((currentSlide - 1 + destinations.length) % destinations.length);
    };

    const handleNextClick = () => {
        setCurrentSlide((currentSlide + 1) % destinations.length);
    };
    
    const handlePlayPauseClick = () => {
        setIsPlaying(!isPlaying);
    };

  return (
    <SliderContainer>  
      <Slider>
        {destinations.map((destination, index) => (
          <Slide 
            key={destination.id} 
            image={destination.image} 
            title={destination.title}
            active={index === currentSlide} 
          />
        ))}
        <Caption>
          <Title>{destinations[currentSlide].title}</Title>
          <Description>{destinations[currentSlide].description}</Description>
          <Link href="/">Confira</Link>
        </Caption>
        <ContainerButtons>
            <SliderButton onClick={handlePrevClick}>&lt;</SliderButton>
            <SliderButton onClick={handleNextClick}>&gt;</SliderButton>
            <SliderButton onClick={handlePlayPauseClick}>
                {isPlaying ? <PlayIcon/> : <StopIcon/>}
            </SliderButton>
        </ContainerButtons>
      </Slider>
    </SliderContainer>
  );
};

export default Carousel;

