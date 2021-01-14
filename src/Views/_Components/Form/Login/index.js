// helpers
import { validaCPF } from '@/Helpers/Misc';
import { Masks } from '@/Helpers/Mask';
import { validateMsisdn } from '@/Helpers/Msisdn';

export default {
	name: 'OstonFormLogin',

	data() {
		return {
			// -> helpers
      Masks: Masks,
      form: {
        step: 1,
      },

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

	props: {
		method: {
			type: String,
			required: true,
			default: () => console.log('Form Login: The METHOD is required')
		}
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
        this.submitMsisdn(this.msisdn.value)
      }
		},
		submitCPF: function(value) {
			const status = validaCPF(value);

			if (!status) {
				this.cpf.error = true;
			} else {
			}
    },
    submitMsisdn: function(value) {
      const result = validateMsisdn(value)

      if (result.status) {
        this.$router.push('/login/pin/' + Masks.unset(this.msisdn.value))
      }
    }
	}
};
