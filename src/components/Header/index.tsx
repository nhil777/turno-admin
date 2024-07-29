import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';
import { logout } from '../../services/Auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useState } from 'react';

export const Header = () => {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth();
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const userLogout = () => {
        logout().then(() => {
            setIsAuthenticated(false);
            navigate('/login');
        });
    };

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <Button variant="link" onClick={handleShow}>
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                    <span className="ms-2">Turno</span>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Button variant="link" onClick={userLogout}>
                        Logout
                    </Button>
                </Nav>
            </Navbar>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
