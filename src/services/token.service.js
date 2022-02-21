import jwt_decode from 'jwt-decode';

export const TokenService = {};

TokenService.setToken = ({ accessToken, refreshToken }) => {
	console.log('accessToken', accessToken);

	var decoded = jwt_decode(accessToken);
	localStorage.setItem('username', decoded.username);
	localStorage.setItem('access_token', accessToken);
	localStorage.setItem('refresh_token', refreshToken);
};
