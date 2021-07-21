import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <div>
            <Navbar fixed="top" bg="light" variant="light">
                <Container styles={{width: "100%"}}>
                    <Navbar.Brand href="#home" className="brand">GoSolid</Navbar.Brand>
                    <Nav className="me-auto links">
                        <Nav.Link href="#products" style={{float: "right"}}>Products</Nav.Link>
                        <Nav.Link href="#cart">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavigationBar;