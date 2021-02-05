// core
import { mapGetters } from 'vuex';
import Settings from '@/config/Settings';

// helpers
import { Masks } from '@/Helpers/Mask';
import { Toast } from '@/Helpers/Toast';

// components
import Header from '@/Views/_Components/Header/Small/index.vue';
import HelpMenu from '@/Views/_Components/HelpMenu/index.vue';

// icons
import { RotateCwIcon } from 'vue-feather-icons';

export default {
	name: 'AuthPin',
	mounted() {
		Settings.title('Login');

    // prevent to access this route without hash param and hash token in model
		if (this.$route.params.hash !== this.hash) {
			this.$router.go(-1)
		}
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
		'oston-header': Header,

		// icons
		'faether-reload-icon': RotateCwIcon
	},

	methods: {
		validate: function(value) {
			this.pin.error = false;
      this.pin.value = Masks.pin(value);

      const clean = Masks.unset(this.pin.value)

      if (clean.length >= 4) {
        if (clean === '1808') {
          _.controller('auth').login('msisdn', Masks.unset(this.user));
          this.$router.push('/')
        } else {
          Toast('error', 'Ops o código informado é inválido')
        }
      }
		},
		submit: function() {},
		requestPin: function() {
			this.sending = true;
			setTimeout(() => {
				this.sending = false;
				Toast('success', 'Foi enviado um novo código para o<br />número ' + Masks.msisdn(this.user));
			}, 4000);
		}
	},

	computed: mapGetters({
    hash: 'AuthModel/pinToken',
    user: 'AuthModel/user'
	})
};
