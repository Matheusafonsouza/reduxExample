import React, { useState } from 'react';
import StockCatalog from '../../components/StockCatalog';
import Header from '../../components/Header';
import ItemModal from '../../components/ItemModal';

import { Container } from './styles';

function Dashboard() {
  const [addItemOpen, setAddItemOpen] = useState(false);
  const [search, setSeatch] = useState('');

  return (
    <>
      <Container>
        <Header setAddItemOpen={setAddItemOpen} setSeatch={setSeatch} />
        <StockCatalog search={search} />
      </Container>
      <ItemModal open={addItemOpen} setAddItemOpen={setAddItemOpen} />
    </>
  );
}

export default Dashboard;
