import Vue from 'vue';
import VueRouter from 'vue-router';

// -> import views
import ViewController from '@/Controllers/ViewController';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: ViewController.load('Home'),
		meta: {
			KeepAlive: true, // Need to be cached?
			requiresAuth: true
		}
  },

  // {
  //   path: '/login',
  //   name: 'Auth',
  //   component: ViewController.load('Auth'),
  //   meta: {
  //     KeepAlive: true, // Need to be cached?
  //     requiresAuth: false
  //   }
  // },

  {
		path: '/login',
		name: 'Auth',
		component: ViewController.load('Auth'),
		meta: {
			KeepAlive: false, // Need to be cached?
			requiresAuth: false
    },
    redirect: '/login',
		children: [
			{
        name: 'AuthMsisdn',
        path: '',
				component: ViewController.load('Auth/Msisdn')
			},
			{
        name: 'AuthPin',
				path: 'pin/:msisdn',
				component: ViewController.load('Auth/Pin')
      }
		]
	},
];

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: "_is:active",
  linkExactActiveClass: "_is:exact-active",
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	const { token } = _.model('Auth');

	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (!token) {
			next({ name: 'Auth' });
		} else {
			next();
		}
	} else {
		next(); // make sure to always call next()!
  }
});

export default router;
