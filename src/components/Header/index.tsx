import React from 'react';

import { Container, HeaderButtons, HeaderButton, CartButton } from './styles';

import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  setAddItemOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSeatch: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = ({ setAddItemOpen, setSeatch }) => {

  return (
    <Container>
      <div>
        <img src={logoImg} alt="logo" />
        <input type="text" onChange={e => setSeatch(e.target.value)} />
      </div>

      <HeaderButtons>
        <CartButton to="/cart">Carrinho</CartButton>
        <HeaderButton onClick={() => setAddItemOpen(true)}>Adicionar</HeaderButton>
      </HeaderButtons>
    </Container>
  );
}

export default Header;