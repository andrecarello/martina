// -> import default controller
import Controller from './Controller';

class SearchController extends Controller {
	// set constants
	_model = 'search';
	_loading = 'loading';
  _url = 'https://2cqsnzgnr1.execute-api.sa-east-1.amazonaws.com/v1';

  reset() {
    this.dispatch(this._model, 'reset')
  }

	get(term, page = 1, callback = () => {}) {
		this.request('get', this._url + '/explorer/10?search=' + term + '&page=' + page).then(({ data }) => {
      let result = _.model('search').results;
      result = result.concat(data.data.data);

      this.dispatch(this._model, {
        results: result,
        lastPage: data.data.last_page
      })
		}).finally(() => callback());
	}
}

export default SearchController;
