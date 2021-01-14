// core
import Settings from '@/config/Settings';

// components
import Layout from '@/Views/_Components/Layout/index.vue';
import Header from '@/Views/_Components/Header/Small/index.vue';
import HelpMenu from '@/Views/_Components/HelpMenu/index.vue';
import FormPin from '@/Views/_Components/Form/Pin/index.vue';

export default {
	name: 'AuthPin',
  mounted() {
		Settings.title('Login');
	},
	components: {
    'oston-layout': Layout,
    'oston-header': Header,
    'oston-help-menu': HelpMenu,
    'oston-form-pin': FormPin
	}
};
