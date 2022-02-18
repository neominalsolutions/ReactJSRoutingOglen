import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';

// children layout componentler için özel isim niteliğindedir.

function Layout({ children }) {
	return (
		<>
			<Header bg={'light'} variant={'light'} />
			<Container fluid>
				<main>{children}</main>
			</Container>
			<Footer />
		</>
	);
}

export default Layout;
