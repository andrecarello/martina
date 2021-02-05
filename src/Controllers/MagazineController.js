import Controller from './Controller';

class MagazineController extends Controller {
	_model = 'magazine';
	_url = 'https://2cqsnzgnr1.execute-api.sa-east-1.amazonaws.com/v1';
	_loading = 'loading';

	getAll() {
		this.dispatch(this._loading, 'loading', true);

		this.request('get', this._url + '/magazines-highlights/10')
			.then(({ data }) => this.dispatch(this._model, 'magazines', data.highlights.data))
			.finally(() => this.dispatch(this._loading, 'loading', false));
	}

	getAllTheme() {
		this.request('get', this._url + '/theme-highlights/10').then(({ data }) =>
			this.dispatch(this._model, 'highlights', data.highlights.data)
		);
	}

	getById(id) {
		this.dispatch(this._loading, 'loading', true);

		this.request('get', this._url + '/magazine-detail?id=' + id)
			.then(({ data }) => {
				this.dispatch(this._model, {
					magazine: data.data,
					magazinePdf: data.pdfs
				});
			})
			.finally(() => this.dispatch(this._loading, 'loading', false));
	}

	favorite(method, id) {
		// https://2cqsnzgnr1.execute-api.sa-east-1.amazonaws.com/v1/save-favorite
		console.log(method, id);
	}
}

export default MagazineController;
