import store from '../Store';
import axios from 'axios';

/**
 * In all cases prefer use camelcase
 *
 * PRIVATE FUNCTIONS USE _{NAME}
 * PRIVATE CONST/LET USE _{NAME}
 *
 * GLOBAL FUNCTIONS OR VARS USE {NAME}
 *
 */
class Controller {
	constructor() {
		self.store = this.store = store;
		self.state = this.state = store.state;
	}

	baseUrl = 'https://api.tim.oston.io/cupomedia/services/1';

	_logout(model) {
		this.store.dispatch(_.upperFirst(model) + 'Model/reset');
	}

	request(method, url, data) {
		if (method === 'get') return axios.get(url);
		else if (method === 'post') return axios.post(url, data);
		else if (method === 'delete') return axios.delete(url, data);
	}

	dispatch(model, key, value = null) {
    if (typeof key === 'object' && value === null) {
      const data = key;
			Object.keys(data).map((i) => {
        this.store.dispatch(_.upperFirst(model) + 'Model/save' + _.upperFirst(i), data[i]);
			});
		} else {
      if (key === 'reset') {
        this.store.dispatch(_.upperFirst(model) + 'Model/' + key, value);
			} else {
				this.store.dispatch(_.upperFirst(model) + 'Model/save' + _.upperFirst(key), value);
			}
		}
	}
}

export default Controller;
