import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <div className="nav-container">
            <Navbar fixed="top" bg="light" variant="light">
                <Container styles={{width: "100%"}}>
                    <Navbar.Brand href="/" className="brand">GoSolid</Navbar.Brand>
                    <Nav className="me-auto links">
                        <Nav.Link href="product-page" style={{fontWeight: 'bold'}}>Products</Nav.Link>
                        <Nav.Link href="cart" style={{fontWeight: 'bold'}}>Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavigationBar;