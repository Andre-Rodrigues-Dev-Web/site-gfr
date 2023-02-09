import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  overflow: hidden;
  margin: 20px;
  text-align: center;
  transition: all 0.3s ease;
  width: 300px;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
`;

const ContentContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  text-align: left;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #ff9800;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Info = styled.p`
  color: #333;
  font-size: 13px;
  font-weight: bold;
  margin-top: 10px;
  text-align: left;
  width: 50%;
`;

const LinkContainer = styled.div`
  background-color: #ff9800;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;
  text-align: center;
  width: fit-content;
  margin: 0 auto;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff5722;
  }
`;

export{
    CardContainer,
    ImageContainer,
    ContentContainer,
    Title,
    Description,
    Price,
    LinkContainer,
    InfoContainer,
    Info,
}