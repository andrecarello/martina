import Controller from './Controller';

class LoadingController extends Controller {

  set(name, status) {
    this.dispatch('loading', name, status);
  }
}

export default LoadingController
