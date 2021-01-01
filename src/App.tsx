import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from './pages/Dashboard';
import store from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
      <GlobalStyle />
    </Provider>
  );
}

export default App;
