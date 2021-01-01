export enum ProductActions {
  addProductToStock = 'ADD_PRODUCT_TO_STOCK',
}

export interface IProduct {
  title: string;
  price: number;
  quantity: number;
}

export interface IStockState {
  products: IProduct[];
}