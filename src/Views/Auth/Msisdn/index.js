// core
import Settings from '@/config/Settings';

// helpers
import { Masks } from '@/Helpers/Mask';
import { validaCPF } from '@/Helpers/Misc';
import { validateMsisdn } from '@/Helpers/Msisdn';

// components
import Layout from '@/Views/_Components/Layout/index.vue';
import Header from '@/Views/_Components/Header/Default/index.vue';
import ListMenu from '@/Views/_Components/ListMenu/index.vue';
import HelpMenu from '@/Views/_Components/HelpMenu/index.vue';

export default {
	name: 'AuthMsisdn',
	mounted() {
		Settings.title('Login');
	},
	data() {
		return {
      // -> helpers
      Masks: Masks,

      method: 'phone',
			cpf: {
				value: '',
				error: false,
				message: 'Preencha o campo com seu CPF.'
			},

			msisdn: {
				value: '',
				error: false,
				message: 'Preencha o campo com o seu número Oi'
      }
		};
	},
	components: {
		'oston-layout': Layout,
		'oston-header': Header,
		'oston-list-menu': ListMenu,
		'oston-help-menu': HelpMenu
	},

	methods: {
		validate: function(type, value) {
			this.cpf.error = false;

			if (type === 'cpf') {
				const status = validaCPF(value);
				const len = Masks.unset(value).length;

				if (!status && len > 10) this.cpf.error = true;
        else this.cpf.error = false;

        this.cpf.value = Masks.cpf(value);
			} else if (type === 'msisdn') {
			}
		},

		submit: function() {
			if (this.method === 'cpf') {
				this.submitCPF(this.cpf.value);
			} else if (this.method === 'phone') {
				this.submitMsisdn(this.msisdn.value);
			}
		},
		submitCPF: function(value) {
			const status = validaCPF(value);

			if (!status) {
				this.cpf.error = true;
			} else {
        _.controller('auth').login('cpf', this.cpf.value);
        this.$router.push('/')
			}
		},
		submitMsisdn: function(value) {
			const result = validateMsisdn(value);

			if (result.status) {
				this.$router.push('/login/pin/' + Masks.unset(this.msisdn.value));
			}
		}
	}
};
