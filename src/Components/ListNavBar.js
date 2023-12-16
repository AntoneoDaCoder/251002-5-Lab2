import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../App.css"
export default function NavBar() {
    const {t, i18n } = useTranslation();
    return (<>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand>
                Lab2
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link className="navBarLink" to="/">{t('navbar.1')}</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    </>
    );
}