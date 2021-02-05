import Controller from './Controller';

class ExplorerController extends Controller {
	_model = 'explorer';
	_loading = '';
	_url = 'https://2cqsnzgnr1.execute-api.sa-east-1.amazonaws.com';

	get() {
		this.request('get', this._url + '/v2/news/10').then(({ data }) => {
      this.dispatch(this._model, 'news', data.magazines.data)
    });
	}

	getById(id = 5) {
		this.request('get', this._url + '/v1/magazines-category/10?category_id=' + id).then(({ data }) =>
      this.dispatch(this._model, 'unique', data.magazines.data)
		);
	}
}

export default ExplorerController;
