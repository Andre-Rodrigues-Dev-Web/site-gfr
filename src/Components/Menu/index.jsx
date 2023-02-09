import React, { useState} from 'react';
import Link from 'next/link';
import {
  ContainerMenu,
  Form,
  Logo,
  StyledMenu,
  StyledHamburger
} from './style';

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <ContainerMenu>
      <Logo>
        <Link href="/">
          <img src="/imgs/logo.jpg" alt="Logo"/>
        </Link>
      </Logo>
      <Form>
        <div className="input-group">
          <label>Destino</label>
          <input type="text" placeholder="Onde você quer ir?"/>
        </div>
        <div className="input-group">
          <label>Check-in</label>
          <input type="date"/>
        </div>
        <div className="input-group">
          <label>Check-out</label>
          <input type="date"/>
        </div>
        <div className="input-group">
          <label>Adultos</label>
          <input type="number" min="1" max="10" placeholder='0'/>
        </div>
        <div className="input-group">
          <label>Crianças</label>
          <input type="number" min="0" max="10" placeholder='0'/>
        </div>
        <div className="input-group">
          <button type="submit">Buscar</button>
        </div>
      </Form>
      <StyledHamburger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledHamburger>
      <StyledMenu open={open}>
        <Link href="/">Home</Link>
        <Link href="/about">Passagens</Link>
        <Link href="/about">Pacotes de viagem</Link>
        <Link href="/contact">Contato</Link>
      </StyledMenu>
    </ContainerMenu>
  );
}

export default Menu;