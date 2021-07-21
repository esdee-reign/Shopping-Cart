import React from 'react'

function Card(props) {
    return (
        <div className="card-container">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.product.title}</Card.Title>
                    <Card.Text>
                        {props.product.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Card
