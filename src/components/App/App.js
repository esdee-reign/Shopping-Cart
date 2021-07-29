import './App.css';
import React, { useState } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import NavigationBar from '../Navbar/NavigationBar'
import ProductPage from '../ProductPage/ProductPage'
import Cart from '../Cart/Cart'
import ProductCard from '../ProductCard/ProductCard';

library.add(faCartPlus)

function App() {

  const [cartCount, setCartCount] = useState(0);

  const productAdd = () => {
    setCartCount(cartCount + 1);
  }; 
  
  const productDel = () => {
    setCartCount(cartCount - 1);
  }; 
  console.log(cartCount)
  return (
    <div className="App">
        <BrowserRouter>
            <NavigationBar />
            <Switch>

                <Route 
                  exact 
                  path="/" 
                  component={Homepage} />

                <Route 
                  exact 
                  path="/product-page" 
                  component={ProductPage} />

                <Route 
                  exact 
                  path="/cart" 
                  render={(props) => (
                    <Cart {...props} cartCount ={cartCount} productAdd={productAdd} productDel={productDel} />
                  )} />

            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
