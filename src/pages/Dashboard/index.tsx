import React, { useState } from 'react';
import Catalog from '../../components/Catalog';
import Header from '../../components/Header';
import ItemModal from '../../components/ItemModal';

import { Container } from './styles';

function Dashboard() {
  const [addItemOpen, setAddItemOpen] = useState(false);

  return (
    <>
      <Container>
        <Header setAddItemOpen={setAddItemOpen} />
        <Catalog />
      </Container>
      <ItemModal open={addItemOpen} setAddItemOpen={setAddItemOpen} />
    </>
  );
}

export default Dashboard;
