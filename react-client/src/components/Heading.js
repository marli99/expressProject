import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Navbarbrand, container, NavbarBrand, Container } from 'reactstrap';

export const Heading = () => {
    return (
        <Navbar color='dark' dark>
            <Container>
                <NavbarBrand hfref="/">Classes</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to="/classes/add">Add Class</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )

}