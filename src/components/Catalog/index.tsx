import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { IProduct } from '../../store/modules/stock/types';
import CatalogItem from '../CatalogItem';

import { Container } from './styles';

const Catalog: React.FC = () => {

  const catalog = useSelector<IState, IProduct[]>(state => state.stock.products);

  return (
    <Container>
      {catalog.map((product: IProduct) => (
        <CatalogItem key={product.title} product={product} />
      ))}
    </Container>
  );
}

export default Catalog;