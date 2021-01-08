import React, { useMemo } from 'react';
import CartCatalog from '../../components/CartCatalog';
import { Link } from 'react-router-dom';

import { Container, CartDetail, CartItems, CartDetailHeader, CartDetailInfo } from './styles';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { ICartProduct } from '../../store/modules/cart/types';

const Cart: React.FC = () => {
  const catalog = useSelector<IState, ICartProduct[]>(state => state.cart.products);

  const cartValue = useMemo(() => {
    const value = catalog.reduce((accumulator: number, currentValue: ICartProduct) => {
      return accumulator + currentValue.quantity * currentValue.item.price;
    }, 0);

    return value
  }, [catalog]);

  return (
    <Container>
      <CartDetail>
        <CartDetailHeader>
          <Link to="/">Voltar</Link>
          <strong>Carrinho</strong>
        </CartDetailHeader>

        <CartDetailInfo>
          <h1>Total: R$ {cartValue.toFixed(2)}</h1>
          <button>Comprar</button>
        </CartDetailInfo>
      </CartDetail>
      <CartItems>
        <CartCatalog />
      </CartItems>
    </Container>
  );
}

export default Cart;
