import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';

function AdminLayout({ children }) {
	const menus = [
		{
			title: 'Kullanıcılar',
			url: 'users',
		},
		{
			title: 'Yönetim Paneli',
			url: 'dashboard',
		},
	];

	return (
		<>
			<Header bg="dark" variant="dark" menus={menus} />
			<Container>
				<main>{children}</main>
			</Container>
			<Footer>
				<p>Created By NbuyDesign</p>
			</Footer>
		</>
	);
}

export default AdminLayout;