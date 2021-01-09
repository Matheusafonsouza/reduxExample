import { all, select, takeLatest, put } from 'redux-saga/effects';
import { IState } from '../..';
import { addProductToStock, removeOneFromStock } from '../stock/actions';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess, removeProductFromCartRequest, removeProductFromCartSuccess } from './actions';
import { CartActions, ICartProduct } from './types';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;
type RemoveProductFromCartRequest = ReturnType<typeof removeProductFromCartRequest>;

function* checkProductStock({ payload }: CheckProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return state.stock.products.find(item => item.title === product.title)?.quantity ?? 0
  });

  if (currentQuantity > 0) {
    yield put(addProductToCartSuccess(product));
    yield put(removeOneFromStock(product.title));
  } else {
    yield put(addProductToCartFailure(product.title));
  }
}

function* removeFromCart({ payload }: RemoveProductFromCartRequest) {
  const { product, productQuantity } = payload;

  if (productQuantity > 0) {
    yield put(addProductToStock({
      ...product,
      quantity: productQuantity
    }));
    yield put(removeProductFromCartSuccess(product));
  }
}

export default all([
  takeLatest(CartActions.addProductToCartRequest, checkProductStock),
  takeLatest(CartActions.removeProductFromCartRequest, removeFromCart),
]);