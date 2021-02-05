window._ = require('lodash');

import Vue from 'vue';
import App from '@/App.vue';
import Router from '@/Router';
import Store from '@/Store';

// -> begin: vue config
Vue.config.productionTip = false;
// -> end: vue config

// -> begin: set controllers
import { _CONTROLLER } from '@/bootstrap';
_.controller = _CONTROLLER;
_.controllers = [];

const files = require.context('@/Controllers/', true, /\.js$/i);
files.keys().map((key) => {
	const name = key.split('/').pop().split('.')[0];
	_.controllers.push(name);
});
// -> end: set controllers

// -> begin: project exclusive imports
// import VueFormulate from '@braid/vue-formulate';
// import { pt } from '@braid/vue-formulate-i18n';
import Icon from '@/Views/_Components/Icon/index.vue';
import Layout from '@/Views/_Layout/index.vue';
import InterseptedImage from '@/Views/_Components/Helpers/InterseptedImage/index.vue';
import Image from '@/Views/_Components/Helpers/Image/index.vue';
// -> end: project exclusive imports

// -> begin: settings
import Settings, { ANONYMOUS, INTERACTIONS, ANALYTICS } from '@/config/Settings';
if (!localStorage.getItem(ANONYMOUS)) {
	Settings.anonymous();
}
if (INTERACTIONS) {
	Settings.interactions();
}
if (ANALYTICS) {
	Settings.analytics();
}
// -> end: settings

// mock
// import './mock';

// -> begin: uses
// Vue.use(VueFormulate, {
// 	plugins: [ pt ]
// });
Vue.component('feather', Icon);
Vue.component('oston-layout', Layout)
Vue.component('oston-image', Image);
Vue.component('oston-intersepted-image', InterseptedImage);
// -> end: uses

new Vue({
	router: Router,
	store: Store,
	render: (h) => h(App)
}).$mount('#app');
