import React from 'react';
import CartCatalog from '../../components/CartCatalog';
import { Link } from 'react-router-dom';

import { Container, CartDetail, CartItems, CartDetailHeader, CartDetailInfo } from './styles';

const Cart: React.FC = () => {

  return (
    <Container>
      <CartDetail>
        <CartDetailHeader>
          <Link to="/">Voltar</Link>
          <strong>Carrinho</strong>
        </CartDetailHeader>

        <CartDetailInfo>
          <h1>Total: R$ 400,00</h1>
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
