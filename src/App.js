import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import Routes
import Head from './components/Head';
import Body from './components/Body';
import Productkart from './components/Productkart';
import Checkout from './components/Checkout';
import ProductPage from './components/ProductPage';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Head />
        <Routes> {/* Use Routes component */}
          <Route path="/" element={<ProductPage />} /> {/* Use element prop */}
          <Route path="/cart" element={<Productkart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
