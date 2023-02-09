import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f2f2f2;
  color: #333;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20%;
  margin: 1rem;

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  a{
    color: #333;
    text-decoration: none;
    margin-bottom: 0.5rem;

    &:hover {
        color: #999;
    }
  }
`;
const ContainerCopy = styled.div`
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 100%;
    p{
        margin: 0;
        a{
            color: #fff;
            font-weight: bold;
            text-decoration: none;
            &:hover{
                color: #999;
            }
        }
    }
`;
export{
    FooterContainer,
    FooterSection,
    FooterLinks,
    ContainerCopy
}