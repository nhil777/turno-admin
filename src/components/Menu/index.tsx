import { Nav, Offcanvas } from "react-bootstrap";
import { MenuProps } from "./types";

export const Menu = ({ show, onHide }: MenuProps) => {
    return (
        <Offcanvas show={show} onHide={onHide}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="flex-column">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
