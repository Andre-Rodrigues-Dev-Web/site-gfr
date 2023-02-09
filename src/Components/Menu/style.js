import styled from "styled-components";

const ContainerMenu = styled.div`
  border: 1px solid #3333335c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  width: 100%;
  @media(min-width: 768px){
    flex-direction: row;
    padding: 5px 20px;
  }
`;
const Form = styled.form`
  display: flex;
  gap: 10px;
  width: 100%;
  .input-group{
    display: flex;
    flex-direction: column;
    input{
      padding: 10px;
      border: 1px solid #3333338c;
      border-radius: 5px;
      outline: none;
      width: 100%;
      @media(min-width: 768px){
        width: 200px;
      }
    }
  }
  button{
    background-color: #ff9800;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    padding: 7px 10px;
    transition: all 0.3s ease;
    &:hover{
      background-color: #ff5722;
    }
    @media(min-width: 768px){
      margin-top: 25px;
      padding: 10px 20px;
    }  
  }
`;
const Logo = styled.div`
  width: 200px;
  a{
    img{
      width: 100%;
      @media(min-width: 768px){
        width: 120px;
      }
    }
  }
`;
const StyledHamburger = styled.button`
  position: absolute;
  top: 45px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 25px;
    height: 2px;
    background-color: #333;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  z-index: 9;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    letter-spacing: 0.5rem;
    color: #333;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #333;
    }
  }
`;

export{
  ContainerMenu,
  Form,
  Logo,
  StyledHamburger,
  StyledMenu
}

