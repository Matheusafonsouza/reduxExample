import { CartActions, IProduct } from "./types";

export function addProductToCartRequest(product: IProduct) {
  return {
    type: CartActions.addProductToCartRequest,
    payload: {
      product,
    }
  };
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: CartActions.addProductToCartSuccess,
    payload: {
      product,
    }
  };
}

export function addProductToCartFailure(productName: string) {
  return {
    type: CartActions.addProductToCartFailure,
    payload: {
      productName,
    }
  };
}