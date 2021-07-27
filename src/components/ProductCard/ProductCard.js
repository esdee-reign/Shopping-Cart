import React from 'react';
import {Card, Button} from 'react-bootstrap'

function ProductCard(props) {
    return (
        <div className="card-container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.tshirt.imgUrl} />
                <Card.Body>
                    <Card.Title>{props.tshirt.title} Crew Neck</Card.Title>
                    <Button variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard
