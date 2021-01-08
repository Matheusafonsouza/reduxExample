import React from 'react';
import { useSelector } from 'react-redux';
import CatalogItem from '../CatalogItem';

import { Container } from './styles';
import { IState } from '../../store';
import { ICartProduct } from '../../store/modules/cart/types';

const CartCatalog: React.FC = () => {
  const catalog = useSelector<IState, ICartProduct[]>(state => state.cart.products);

  return (
    <Container>
      {catalog.map((product: ICartProduct) => (
        <CatalogItem
          key={product.item.title}
          product={product.item}
          productQuantity={product.quantity}
          isCart={true}
        />
      ))}
    </Container>
  );
}

export default CartCatalog;