// core
import Settings from '@/config/Settings';

// helpers
import { Masks } from '@/Helpers/Mask';
import { Toast } from '@/Helpers/Toast';

// components
import Layout from '@/Views/_Components/Layout/index.vue';
import Header from '@/Views/_Components/Header/Small/index.vue';
import HelpMenu from '@/Views/_Components/HelpMenu/index.vue';

// icons
import { RotateCwIcon } from 'vue-feather-icons';

export default {
	name: 'AuthPin',
	mounted() {
		Settings.title('Login');
	},
	data() {
		return {
			// -> helpers
			Masks: Masks,

			sending: false,

			pin: {
				value: '',
				error: false,
				message: ''
			}
		};
	},

	components: {
		'oston-layout': Layout,
		'oston-header': Header,
		'oston-help-menu': HelpMenu,

		// icons
		'faether-reload-icon': RotateCwIcon
	},

	methods: {
    validate: function(value) {
      this.pin.error = false;
      this.pin.value = Masks.pin(value);

      console.log(this.pin.value);
    },
    submit: function() {},
    requestPin: function() {
      this.sending = true;
      setTimeout(() => {
        this.sending = false;
        Toast('success', 'Foi enviado um novo código para o<br />msisdn (51) 9999.9999');
      }, 4000);
    }
  }
};
