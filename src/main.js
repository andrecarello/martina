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
// -> end: project exclusive imports

// -> begin: settings
import Settings, { ANONYMOUS, INTERACTIONS, ANALYTICS } from '@/config/Settings';
if (!localStorage.getItem(ANONYMOUS)) {
	Settings.anonymous();
}
if (INTERACTIONS) {
	Settings.interactions();
}
if(ANALYTICS) {
  Settings.analytics();
}
// -> end: settings

// mock
// import './mock';

// -> begin: uses
// Vue.use(VueFormulate, {
// 	plugins: [ pt ]
// });
// -> end: uses

new Vue({
	router: Router,
	store: Store,
	render: (h) => h(App)
}).$mount('#app');
