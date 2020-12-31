export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICardItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: ICardItem[];
  failedStockCheck: number[];
}