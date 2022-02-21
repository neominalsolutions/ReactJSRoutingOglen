import jwt_decode from 'jwt-decode';

export const TokenService = {};

TokenService.decode = (accessToken) => {
	var decoded = jwt_decode(accessToken);
	localStorage.setItem('username', decoded.username);
	console.log('decoded-token', decoded);
};
