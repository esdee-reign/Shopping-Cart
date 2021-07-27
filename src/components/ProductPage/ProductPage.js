import React, { useState } from 'react'
import tshirtsList from '../ProductList/tshirtsList.json';
import ProductCard from '../ProductCard/ProductCard';
import './ProductPage.css';

function ProductPage(props) {
    const [tshirts, setTshirts] = useState(tshirtsList);
    const displayTshirts = tshirts.map(tshirt => { return <ProductCard tshirt={tshirt} key={tshirt.id} /> })
    return (
        <div className="product-page-container">
            {displayTshirts}
        </div>
    )
}

export default ProductPage
