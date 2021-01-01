import { createStore, applyMiddleware } from 'redux';
import { ICartState } from './modules/cart/types';
import rootReducer from './modules/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';
import { IStockState } from './modules/stock/types';

export interface IState {
  cart: ICartState;
  stock: IStockState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middlewares)
));

sagaMiddleware.run(rootSaga);

export default store;