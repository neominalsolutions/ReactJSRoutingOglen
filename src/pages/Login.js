import React from 'react';
import { useNavigate } from 'react-router';
import { LoginService } from '../services/login.service';

function Login() {
	const navigate = useNavigate();

	const login = async () => {
		const param = {
			username: 'mert',
			password: '1234',
		};

		await LoginService.login(param, (response, error) => {
			console.log('error', error);

			if (error) {
				alert(error.message);
			} else {
				navigate(response.url);
			}
		});
	};

	return (
		<div>
			<button onClick={login}>oturum aç</button>
		</div>
	);
}

export default Login;
