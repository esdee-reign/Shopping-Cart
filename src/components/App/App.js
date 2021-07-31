import './App.css';
import React, { useState } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import NavigationBar from '../Navbar/NavigationBar'
import ProductPage from '../ProductPage/ProductPage'
import Cart from '../Cart/Cart'
library.add(faCartPlus)


function App() {

  const [inCart, setInCart] = useState([ { id:'', title:'', imgUrl:'', price:'' } ]);

  const addToCart = (e) => {
    console.log('clicked')
    let product = [...inCart];
    product.push({id:'', title:'', imgUrl:'', price:''});
    setInCart(product);
  }; 

  return (
    <div className="App">
        <BrowserRouter>
            <NavigationBar />
            <Switch>

                <Route 
                  exact
                  path="/Shopping-Cart" 
                  component={Homepage} />

                <Route 
                  path="/product-page" 
                  render={(props) => (
                    <ProductPage {...props} addToCart={addToCart} />
                  )}
                   />

                <Route  
                  path="/cart" 
                  component={Cart} />

            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
