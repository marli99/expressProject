import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Navbarbrand, container, NavbarBrand, Container } from 'reactstrap';

export const StudentHeading = () => {
    return (
        <Navbar color='dark' dark>
            <Container>
                <NavbarBrand hfref="/">Students</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to="/Students">Add a Student</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )

}