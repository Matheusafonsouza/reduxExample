export enum CartActions {
  addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
  removeProductFromCartRequest = 'REMOVE_PRODUCT_FROM_CART_REQUEST',
  removeProductFromCartSuccess = 'REMOVE_PRODUCT_FROM_CART_SUCCESS',
}
export interface IProduct {
  title: string;
  price: number;
  quantity: number;
}

export interface ICartProduct {
  item: IProduct;
  quantity: number;
}

export interface ICartState {
  products: ICartProduct[];
  failedStockCheck: string[];
}