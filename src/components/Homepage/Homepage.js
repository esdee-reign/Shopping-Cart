import React from 'react';
import tshirts from '../ProductList/tshirts.json';
import ProductCard from '../ProductCard/ProductCard'


const [products, setProducts] = useState(tshirts);

const productList = products.map(prouct => {return <ProductCard product = {product} key={product.id}/>})

function Homepage() {
    return (
        <div className="homepage-container">
            {productList}
        </div>
    )
}

export default Homepage;
