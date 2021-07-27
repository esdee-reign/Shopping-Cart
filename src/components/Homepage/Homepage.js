import React from 'react';
import './Homepage.css';
import { Button } from 'react-bootstrap';

function Homepage() {
    return (
        <div className="homepage-container">
            <div className="tagline-container">
                <div className="tagline">GO SOLID<br/>or go home ;)</div>
                <Button variant="dark" className="browse-btn" href="product-page">Browse Products</Button>
            </div>
            <img src="https://unsplash.com/photos/eD1RNYzzUxc" />
        </div>
    )
}

export default Homepage;
