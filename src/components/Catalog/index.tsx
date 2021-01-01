import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { IProduct } from '../../store/modules/cart/types';
import CatalogItem from '../CatalogItem';

import { Container } from './styles';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => setCatalog(response.data));
  }, []);

  return (
    <Container>
      {catalog.map(product => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </Container>
  );
}

export default Catalog;