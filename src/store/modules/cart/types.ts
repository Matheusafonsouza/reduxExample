export enum CartActions {
  addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
  addProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE',
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