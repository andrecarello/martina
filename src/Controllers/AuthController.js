import axios from 'axios';

// -> import default controller
import Controller from './Controller';

import { hash } from '@/Helpers/Misc';

class AuthController extends Controller {
	// set constants
	_model = 'auth';
	_loading = 'loading';

	login(type, data) {
		if (type === 'cpf') this.loginCpf(data);
	}

	loginCpf(data) {
		console.log('login CPF');

		this.dispatch(this._model, {
			token: hash(180),
			user: data
		});
	}

	// getAll() {
	// 	this.dispatch(this._loading, 'loading', true);

	// 	this.request('get', this.baseUrl + '/collections?phone=' + this._msisdn)
	// 		.then(({ data }) => {
	// 			this.dispatch(this._model, 'collections', data);
	// 		})
	// 		.catch((response) => console.error(response))
	// 		.finally(() => this.dispatch(this._loading, 'loading', false));
	// }

	logout() {
		this._logout(this.model);
	}
}

export default AuthController;
