import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import NavigationBar from '../Navbar/NavigationBar'
import ProductPage from '../ProductPage/ProductPage'

library.add(faCartPlus)


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavigationBar />
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/product-page" component={ProductPage} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
