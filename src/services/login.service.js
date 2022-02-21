import { BaseHttpService } from './base.httpservice';
import { TokenService } from './token.service';

export const LoginService = {};

// callback login işleminin sonucunda geriye bir fonkisyon çalıştıracağımızı söylüyoruz.
// js de callback kullanmak için bir function'a function parametre olarak geçeriz.
LoginService.login = async ({ username, password }, callback) => {
	const param = {
		username,
		password,
		grantType: 'password',
	};

	try {
		let response = await BaseHttpService.post(
			'https://localhost:5001/api/tokens',
			param
		);

		console.log('response324234', response);

		if (response.status == 200) {
			localStorage.setItem('access_token', response.data['accessToken']);
			localStorage.setItem('refresh_token', response.data['refreshToken']);

			TokenService.decode(response.data['accessToken']);

			callback({ url: '/' }, null);
		} else if (response.status == 401) {
			callback(null, { message: 'Kullanıcı adı veya parola hatalı' });
		}
	} catch (error) {
		callback(null, { message: 'Sunucuda bir hata oluştu' });
		console.log('login Error', error);
	}
};
