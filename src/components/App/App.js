import Homepage from '../Homepage/Homepage';
import NavigationBar from '../Navbar/NavigationBar';
import ProductPage from '../ProductPage/ProductPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      {/* <Homepage /> */}
      <ProductPage />
    </div>
  );
}

export default App;
