import styled from "styled-components";

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  text-align: center;
  margin-top: 20px;
`;

 const ContainerButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ active }) => (active ? "1" : "0")};
  transition: opacity 1s ease;
`;

const Caption = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  min-height: 100px;
  width: 100%;
  color: white;
  z-index: 2;
  a{
    background: #ff9800;
    border-radius: 80px;
    color: white;
    display: inline-block;
    padding: 5px 20px;
    text-decoration: none;
    transition: all 0.3s ease;
    &:hover{
        transform: scale(1.1);
    }
  }
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 18px;
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 40px;
  color: white;
  z-index: 2;

  &:nth-child(1) {
    left: 20px;
  }

  &:nth-child(2) {
    right: 20px;
  }
  &:nth-child(3) {
    top: 65%;
  }
`;

const PlayIcon = styled.div`
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 25px;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1);
  }

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    border-left: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(45deg);
  }
`;

const StopIcon = styled.div`
  overflow: hidden;
  width: 40px;
  height: 40px;
  border-radius: 25px;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1);
  }

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: white;
  }
`;

export {
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
}