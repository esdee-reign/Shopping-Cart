import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App/App';
import NavigationBar from './components/Navbar/NavigationBar';
import ProductPage from './components/ProductPage/ProductPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/product-page" component={ProductPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;