import { ProductActions, IProduct } from "./types";

export function addProductToStock(product: IProduct) {
  return {
    type: ProductActions.addProductToStock,
    payload: {
      product,
    }
  };
}