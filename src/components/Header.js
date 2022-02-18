import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

// bgColor component içerine dışarıdan gönderilen değerlere props ismini veririz.
// props html elementin attribute karşılık gelir. <a href="wwww.a.com"></a>

// { bg, variant } props denk gelir. props da özel bir keyword. componente gönderilen geçirilen değerlere karşılık gelir.

function Header({ bg, variant }) {
	return (
		<>
			<Navbar bg={bg} variant={variant}>
				<Container>
					<Navbar.Brand href="#home">Nbuy Oglen</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Anasayfa</Nav.Link>
						<Nav.Link href="#features">Hakkımızda</Nav.Link>
						<Nav.Link href="#pricing">Ürünlerimiz</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}

// defaultProps ile varsayılan bu componente set edilen değerler

export default Header;

Header.defaultProps = {
	bg: 'light',
	variant: 'light',
};
