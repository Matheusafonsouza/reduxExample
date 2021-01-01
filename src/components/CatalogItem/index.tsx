import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';


import { Container, ItemButton } from './styles';
interface ICatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <Container>
      <strong>{product.title}</strong>
      <span>{product.price}</span>

      <ItemButton
        type="button"
        onClick={handleAddProductToCart}
      >
        Comprar
      </ItemButton>

      { hasFailedStockCheck && <span style={{ color: 'red' }}>Falta de estoque</span>}
    </Container>
  );
}

export default CatalogItem;