import { Reducer } from "redux";
import produce from 'immer';
import { CartActions, ICartState } from "./types";

const INITIAL_STATE: ICartState = {
  products: [],
  failedStockCheck: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case CartActions.addProductToCartSuccess: {
        const { product } = action.payload;

        const productInCartIndex = draft.products.findIndex(item => item.item.title === product.title);

        if (productInCartIndex >= 0) {
          draft.products[productInCartIndex].quantity++;
        } else {
          draft.products.push({
            item: product,
            quantity: 1,
          });
        }

        break;
      }
      case CartActions.addProductToCartFailure: {
        draft.failedStockCheck.push(action.payload.productName)

        break;
      }
      default: {
        return draft;
      }
    }
  });
}

export default cart;