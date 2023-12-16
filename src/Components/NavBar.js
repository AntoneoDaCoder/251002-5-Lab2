import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../App.css"
export default function NavBar() {
    const scrollToDaySerial = () => {
        window.scrollTo({
            top: document.getElementById('daySerial').offsetTop,
            behavior: 'smooth',
        });
    };
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
                    <Nav.Link><Link className="navBarLink" to="/series">{t('navbar.2')}</Link></Nav.Link>
                    <Nav.Link onClick={scrollToDaySerial}>{t('navbar.3')}</Nav.Link>
                    <NavDropdown title={t('navbar.4')}>
                        <NavDropdown.Item eventKey="en" onClick={() => i18n.changeLanguage("en")}>en</NavDropdown.Item>
                        <NavDropdown.Item eventKey="ru" onClick={() => i18n.changeLanguage("ru")}>ru</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    </>
    );
}