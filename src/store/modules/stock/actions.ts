import { ProductActions, IProduct } from "./types";

export function addProductToStock(product: IProduct) {
  return {
    type: ProductActions.addProductToStock,
    payload: {
      product,
    }
  };
}

export function removeOneFromStock(productName: string) {
  return {
    type: ProductActions.removeOneFromStock,
    payload: {
      productName,
    }
  };
}