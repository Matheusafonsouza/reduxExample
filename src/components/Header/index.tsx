import React from 'react';

import { Container, HeaderButtons, HeaderButton } from './styles';

import logoImg from '../../assets/logo.svg';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="logo" />

      <HeaderButtons>
        <HeaderButton>Adicionar</HeaderButton>
        <HeaderButton>Configurações</HeaderButton>
      </HeaderButtons>
    </Container>
  );
}

export default Header;