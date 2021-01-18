// -> import default controller
import Controller from './Controller';

class HomeController extends Controller {
	// set constants
	_model = 'home';
	_loading = 'loading';
	_url = 'https://2cqsnzgnr1.execute-api.sa-east-1.amazonaws.com/v1';

	getMagazines() {
    	const url = this._url + '/magazines-highlights/10'
		this.dispatch(this._loading, 'loading', true);

		this.request('get', url).then(({ data }) =>
			this.dispatch(this._model, 'magazines', data.highlights.data)
		);
	}

	getHighlights() {
    const url = this._url + '/theme-highlights/10'
		this.request('get', url).then(({ data }) =>
			this.dispatch(this._model, 'highlights', data.highlights.data)
		);
	}
}

export default HomeController;
