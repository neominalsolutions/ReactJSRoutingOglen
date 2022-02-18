import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';

function Users() {
	const [users, setUsers] = useState([]);

	// ngOnit
	useEffect(async () => {
		// apiden veri çekme işlemleri yapılır

		let response = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		);
		let data = response.data;

		setUsers([...data]);
	}, []);

	return (
		<div>
			<table className="table table-bordered">
				<thead>
					<tr>
						<td>UserName</td>
						<td>Email</td>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => {
						return (
							<tr>
								<td>{user?.username}</td>
								<td>{user?.email}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Users;
