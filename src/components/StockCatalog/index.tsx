import React from 'react';
import { useSelector } from 'react-redux';
import { IProduct } from '../../store/modules/stock/types';
import CatalogItem from '../CatalogItem';

import { Container } from './styles';
import { IState } from '../../store';

const StockCatalog: React.FC = () => {
  const catalog = useSelector<IState, IProduct[]>(state => state.stock.products);

  return (
    <Container>
      {catalog.map((product: IProduct) => (
        <CatalogItem
          key={product.title}
          product={product}
          isCart={false}
        />
      ))}
    </Container>
  );
}

export default StockCatalog;