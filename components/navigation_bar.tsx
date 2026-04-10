import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import { Container, Navbar } from 'react-bootstrap';

export default function Navigation_Bar() {
    return (
        <Navbar>
            <Container fluid>
                <Navbar.Brand className='nav'>XochSews</Navbar.Brand>
                <Nav className='me-auto nav'>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href='/wishlist'>Wishlist</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    )
}