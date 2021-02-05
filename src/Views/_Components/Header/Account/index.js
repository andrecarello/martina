import { mapGetters } from 'vuex';

import { Masks } from '@/Helpers/Mask';

export default {
	name: 'OstonHeader',

	props: {
		showTitle: {
			type: Boolean,
			required: false,
			default: true
		},
		showSubtitle: {
			type: Boolean,
			required: false,
			default: true
		}
	},

	data() {
		return {
			Masks
		};
	},

	methods: {
		logout: function() {
			_.controller('auth').logout();
		},
		format: function(value) {
      return this.method === 'cpf' || this.method === 'msisdn'
      ? Masks[this.method](value)
      : this.user;
		}
	},

	computed: mapGetters({
		user: 'AuthModel/user',
		method: 'AuthModel/method'
	})
};
