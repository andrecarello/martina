// core
import Settings from '@/config/Settings';

// components
import Layout from '@/Views/_Components/Layout/index.vue';
import Header from '@/Views/_Components/Header/Default/index.vue';
import FormLogin from '@/Views/_Components/Form/Login/index.vue';
import ListMenu from '@/Views/_Components/ListMenu/index.vue'
import HelpMenu from '@/Views/_Components/HelpMenu/index.vue';

export default {
	name: 'AuthMsisdn',
	mounted() {
		Settings.title('Login');
	},
	data() {
		return {
      method: 'phone'
    };
	},
	components: {
    'oston-layout': Layout,
    'oston-header': Header,
    'oston-form-login': FormLogin,
    'oston-list-menu': ListMenu,
    'oston-help-menu': HelpMenu
  }
};
