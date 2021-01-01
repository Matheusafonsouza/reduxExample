import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/stock/types';


import { Container, ItemButton } from './styles';
interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  //const dispatch = useDispatch();

  // const hasFailedStockCheck = useSelector<IState, boolean>(state => {
  //  return state.cart.failedStockCheck.includes(product.id);
  // })

  //const handleAddProductToCart = useCallback(() => {
  //  dispatch(addProductToCartRequest(product));
  //}, [dispatch, product]);

  return (
    <Container>
      <strong>{product.title}</strong>
      <span style={{ color: 'green' }}>Preço: {product.price}</span>
      <span>Quantidade: {product.quantity}</span>

      <ItemButton
        type="button"
        onClick={() => { }}
      >
        Comprar
      </ItemButton>
    </Container>
  );
}

export default CatalogItem;