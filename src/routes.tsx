import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';


const Routes: React.FC = () => (
  <BrowserRouter>
    <Route exact path="/" component={Dashboard} />
    <Route path="/cart" component={Cart} />
  </BrowserRouter>
);

export default Routes;