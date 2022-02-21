import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// bgColor component içerine dışarıdan gönderilen değerlere props ismini veririz.
// props html elementin attribute karşılık gelir. <a href="wwww.a.com"></a>

// { bg, variant } props denk gelir. props da özel bir keyword. componente gönderilen geçirilen değerlere karşılık gelir.

function Header({ bg, variant, menus, homePageUrl }) {
	const userName = localStorage.getItem('username');

	console.log('userName', userName);

	return (
		<>
			<Navbar bg={bg} variant={variant}>
				<Container>
					<Navbar.Brand>
						<Link className="nav-item nav-link" to={homePageUrl}>
							{' '}
							Nbuy Oglen
						</Link>
					</Navbar.Brand>
					<Nav className="me-auto">
						{menus.map((item) => {
							return (
								<Link
									key={item.url}
									className="nav-item nav-link"
									to={item.url}
								>
									{item?.title}{' '}
								</Link>
							);
						})}
					</Nav>
					<Nav className="ms-auto">{userName}</Nav>
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
	menus: [
		{ title: 'Anasayfa', url: 'home' },
		{ title: 'Hakkımızda', url: 'about' },
	],
	homePageUrl: '/home',
};
