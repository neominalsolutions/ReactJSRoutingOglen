import React from 'react';
import { useNavigate } from 'react-router';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthService } from '../services/auth.service';

// bgColor component içerine dışarıdan gönderilen değerlere props ismini veririz.
// props html elementin attribute karşılık gelir. <a href="wwww.a.com"></a>

// { bg, variant } props denk gelir. props da özel bir keyword. componente gönderilen geçirilen değerlere karşılık gelir.

function Header({ bg, variant, menus, homePageUrl }) {
	const userName = AuthService.UserName();
	const isAuthenticated = AuthService.isAuthenticated();
	const navigate = useNavigate();

	const logout = async () => {
		AuthService.logout((response) => {
			navigate(response.url);
		});
	};

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
					{isAuthenticated && (
						<div className="ms-auto">
							<Nav style={{ color: 'indianred', justifyContent: 'center' }}>
								{userName}
							</Nav>
							<Nav style={{ color: 'indianred' }}>
								<Button variant="link" onClick={logout}>
									Oturumu Kapat
								</Button>
							</Nav>
						</div>
					)}
					{!isAuthenticated && (
						<Nav style={{ color: 'indianred' }} className="ms-auto">
							<Link to="/login">Oturum Aç</Link>
						</Nav>
					)}
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
