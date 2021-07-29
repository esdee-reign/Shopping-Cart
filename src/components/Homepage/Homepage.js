import React from 'react';
import './Homepage.css';
import { Button } from 'react-bootstrap';
import img02 from '../../assets/img02.png'

function Homepage() {
    return (
        <div className="homepage-container">
            <div className="tagline-container">
                <div className="tagline"><i>GO SOLID<br/>Redefining Style</i></div>   
                <Button variant="dark" className="browse-btn" href="product-page">Browse Products</Button>
            </div>
            <div className="img-container">
                <img src={img02} />  
            </div>
        </div>
    )
}
    
export default Homepage;
