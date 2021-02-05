// -> import default controller
import Controller from './Controller';

class BaseController extends Controller {
	// set constants
	_model = 'base';
	_loading = 'loading';
	_url = 'https://2cqsnzgnr1.execute-api.sa-east-1.amazonaws.com/v1';

	getCategories() {
		this.dispatch(this._loading, 'loading', true);

		this.request('get', this._url + '/categories/10')
			.then(({ data }) => console.log(data))
			.finally(() => this.dispatch(this._loading, 'loading', false));
	}
}

export default BaseController;
