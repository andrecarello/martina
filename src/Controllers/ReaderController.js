// -> import default controller
import Controller from './Controller';

class MagazineController extends Controller {
	// set constants
  _model = 'reader';

  reset() {
    this.dispatch(this._model, 'reset');
  }

  set(data) {
    this.dispatch(this._model, data);
  }
}

export default MagazineController;
