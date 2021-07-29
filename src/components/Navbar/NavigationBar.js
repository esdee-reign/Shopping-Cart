import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <div className="nav-container">
            <Navbar fixed="top" bg="light" variant="light">
                <Container styles={{width: "100%"}}>
                    <Navbar.Brand className="brand"><Link to='/'>GoSolid</Link></Navbar.Brand>
                    <Nav className="me-auto links">
                        <Nav.Link style={{fontWeight: 'bold'}}><Link to='/product-page'>Products</Link></Nav.Link>
                        <Nav.Link style={{fontWeight: 'bold'}}><Link to='/cart'>Cart</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavigationBar;