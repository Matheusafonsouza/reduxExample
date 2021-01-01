import React from 'react';
import Catalog from '../../components/Catalog';
import Cart from '../../components/Cart';
import Header from '../../components/Header';

import { Container } from './styles';

function Dashboard() {
  return (
    <Container>
      <Header />
      <Catalog />
    </Container>
  );
}

export default Dashboard;
