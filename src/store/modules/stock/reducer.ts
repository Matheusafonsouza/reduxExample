import { Reducer } from "redux";
import produce from 'immer';
import { ProductActions, IStockState } from "./types";

const INITIAL_STATE: IStockState = {
  products: [],
};

const stock: Reducer<IStockState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ProductActions.addProductToStock: {
        const { product } = action.payload;

        const productInStockIndex = draft.products.findIndex(item => item.title === product.title);

        if (productInStockIndex >= 0) {
          draft.products[productInStockIndex].quantity += product.quantity;
          draft.products[productInStockIndex].price = product.price;
        } else {
          draft.products.push(product);
        }

        break;
      }
      default: {
        return draft;
      }
    }
  });
}

export default stock;