import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'

function CartElement() {
    return (
        <div className="cart-container">
            <Row style={{ width: '95%', borderBottom: '1px solid gray', paddingBottom: '10px', margin: '0 auto'}}>
                <Col style={{ width: '50%' }}>
                    <div className="product-img">Image</div>
                </Col>
                <Col style={{ width: '50%', display: 'flex', flexDirection: 'column' , alignItems: 'center' }}>
                    <Row>Product Name</Row>
                    <Row>
                        <Col><Button variant="dark" size="sm" className="count-btn">Del</Button></Col>
                        <Col><span>2</span></Col>
                        <Col><Button variant="dark" size="sm" className="count-btn">Add</Button></Col>
                    </Row>
                    <Row>
                        <Col><Button variant='outline-dark' size='sm' style={{fontSize: '12px', fontWeight: 'bold'}} >Checkout</Button></Col>
                        <Col><Button variant='outline-dark' size='sm' style={{fontSize: '12px', fontWeight: 'bold'}} >Go Back</Button></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default CartElement
