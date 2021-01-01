import React from 'react';

import { Container, HeaderButtons, HeaderButton } from './styles';

import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  setAddItemOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setAddItemOpen }) => {
  return (
    <Container>
      <img src={logoImg} alt="logo" />

      <HeaderButtons>
        <HeaderButton>Carrinho</HeaderButton>
        <HeaderButton onClick={() => setAddItemOpen(true)}>Adicionar</HeaderButton>
        <HeaderButton>Configurações</HeaderButton>
      </HeaderButtons>
    </Container>
  );
}

export default Header;