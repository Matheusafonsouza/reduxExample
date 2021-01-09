import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { addProductToCartRequest, removeProductFromCartRequest } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/stock/types';


import { Container, ItemButton, RemoveButton } from './styles';
interface ICatalogItemProps {
  productQuantity?: number;
  product: IProduct;
  isCart: boolean;
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product, isCart, productQuantity }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.title);
  })

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  const handleRemoveProductFromCart = useCallback(() => {
    if (productQuantity) {
      dispatch(removeProductFromCartRequest(product, productQuantity));
    }
  }, [dispatch, product, productQuantity]);

  return (
    <Container isCart={isCart}>
      <strong>{product.title}</strong>
      <span style={{ color: 'green' }}>Preço: {product.price}</span>
      <span>Quantidade: {isCart ? productQuantity : product.quantity}</span>

      {isCart &&
        <RemoveButton
          type="button"
          onClick={handleRemoveProductFromCart}
        >
          Remover
        </RemoveButton>
      }

      {!isCart &&
        <ItemButton
          type="button"
          onClick={handleAddProductToCart}
        >
          Comprar
        </ItemButton>
      }

      {
        hasFailedStockCheck && !isCart ?
          <span style={{ color: 'red' }}>Falta de estoque</span>
          : null
      }

    </Container>
  );
}

export default CatalogItem;