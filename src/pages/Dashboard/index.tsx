import React, { useState } from 'react';
import StockCatalog from '../../components/StockCatalog';
import Header from '../../components/Header';
import ItemModal from '../../components/ItemModal';

import { Container } from './styles';

function Dashboard() {
  const [addItemOpen, setAddItemOpen] = useState(false);

  return (
    <>
      <Container>
        <Header setAddItemOpen={setAddItemOpen} />
        <StockCatalog />
      </Container>
      <ItemModal open={addItemOpen} setAddItemOpen={setAddItemOpen} />
    </>
  );
}

export default Dashboard;
