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
		else if (type === 'msisdn') this.loginMsisdn(data);
  }

  set(data) {
    this.dispatch(this._model, data)
  }

	loginCpf(data) {
		this.dispatch(this._model, {
			token: hash(180),
			user: data,
			method: 'cpf'
		});
	}

	loginMsisdn(data) {
    this.dispatch(this._model, {
			token: hash(180),
      user: data,
			method: 'msisdn',
      pinToken: '',
      pin: ''
		});
  }

  loginPinToken(value) {
    this.dispatch(this._model, 'pinToken', value)
  }

	logout() {
		this._logout(this._model);
		window.location.reload();
	}
}

export default AuthController;
