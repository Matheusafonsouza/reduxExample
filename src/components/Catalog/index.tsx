import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { IProduct } from '../../store/modules/stock/types';
import CatalogItem from '../CatalogItem';

import { Container } from './styles';

interface CatalogProps {
  isCart?: boolean;
}

const Catalog: React.FC<CatalogProps> = ({ isCart = false }) => {

  const catalog = useSelector<IState, IProduct[]>(state => state.stock.products);

  return (
    <Container isCart={isCart}>
      {catalog.map((product: IProduct) => (
        <CatalogItem key={product.title} product={product} isCart={isCart} />
      ))}
    </Container>
  );
}

export default Catalog;