import Controller from './Controller';

class CategoryController extends Controller {
	_model = 'category';
	_url = 'https://2cqsnzgnr1.execute-api.sa-east-1.amazonaws.com/v1';
	_loading = 'loading';

	reset() {
		this.dispatch(this._model, 'reset', [ 'part', 'title', 'id', 'lastPage' ]);
	}

	getAll() {
		this.request('get', this._url + '/categories/10').then(({ data }) =>
			this.dispatch(this._model, 'categories', data.categories)
		);
	}

	get(name, id, page = 1, callback = () => {}) {
		this.request(
			'get',
			this._url + '/magazines-category/10?category_id=' + id + '&page=' + page
		).then(({ data }) => {
			let result = _.model('category').part;
      result = result.concat(data.magazines.data);

			this.dispatch(this._model, {
				title: name,
				part: result,
        id: id,
        lastPage: data.magazines.last_page
			});
		}).finally(() => callback());
	}
}

export default CategoryController;
