import React from 'react';
import {Card, Button , Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ProductCard.css';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

function ProductCard(props) {
    const dataLoaded = props.tshirt;

    return (
        <div>
            {dataLoaded && 
            <Card style={{ width: '18rem', height: '18rem', textAlign: 'center', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19'}}>
                <Card.Img variant="top" src={props.tshirt.imgUrl} style={{width: '100px !important', height: '100px !important'}} />
                <Card.Body style={{ marginTop: '16px'}}>
                    <Row style={{position: 'absolute', bottom: '0px', width: '100%'}}>
                        <Col>
                            <Card.Title>Solid {props.tshirt.title}</Card.Title>
                        </Col>
                        
                        <Col>
                            <Button variant="outline-dark" onClick={props.addToCart} style={{marginBottom: '10px'}}><FontAwesomeIcon icon={faCartPlus} /></Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>}
        </div> 
    )
}

export default ProductCard
