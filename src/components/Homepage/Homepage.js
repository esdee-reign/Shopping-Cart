import React from 'react';
import './Homepage.css';
import { Button } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';

function Homepage() {
    return (
        <div className="homepage-container">
            <div className="tagline-container">
                <div className="tagline">GO SOLID<br/>or go home</div>
                <Button variant="dark" className="browse-btn">Browse Products</Button>
            </div>
            <ProductCard />
        </div>
    )
}

export default Homepage;
