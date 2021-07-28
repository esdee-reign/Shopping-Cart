import React from 'react';
import './Homepage.css';
import { Button } from 'react-bootstrap';
import img01 from '../../assets/img01.png'

function Homepage() {
    return (
        <div className="homepage-container">
            <div className="tagline-container">
                <div className="tagline">Go SOLID<br/>REDEIFING STYLE</div>   
                <Button variant="dark" className="browse-btn" href="product-page">Browse Products</Button>
            </div>
            <div className="img-container">
                <img src={img01} />  
            </div>
        </div>
    )
}
    
export default Homepage;
