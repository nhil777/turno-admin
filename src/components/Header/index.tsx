import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { logout } from '../../services/Auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../contexts/Auth/useAuth';
import { Menu } from '../Menu';

export const Header = () => {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth();
    const [show, setShow] = useState<boolean>(false);

    const handleHide = () => setShow(false);
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
                <Nav className="ml-auto mr-2">
                    <Button variant="secondary" onClick={userLogout}>
                        Logout
                    </Button>
                </Nav>
            </Navbar>
            <Menu show={show} onHide={handleHide} />
        </>
    );
}
