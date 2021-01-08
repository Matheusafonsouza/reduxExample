import { all, select, takeLatest, put } from 'redux-saga/effects';
import { IState } from '../..';
import { removeOneFromStock } from '../stock/actions';
import { addProductToCartFailure, addProductToCartRequest, addProductToCartSuccess } from './actions';
import { CartActions } from './types';

type CheckProductStockRequest = ReturnType<typeof addProductToCartRequest>;

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

export default all([
  takeLatest(CartActions.addProductToCartRequest, checkProductStock),
]);