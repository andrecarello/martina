// core
import { mapGetters } from 'vuex';

// components
import Header from '@/Views/_Components/Header/Default/index.vue';

// helpers
import { slugify } from '@/Helpers/Misc';

export default {
	name: 'Categories',

	components: {
		'oston-header': Header
	},

	methods: {
		slugify,

		select: function(name, id) {
			_.controller('loading').set('loading', true);
			_.controller('category').reset();
			_.controller('category').get(name, id, 1, () => _.controller('loading').set('loading', false));
		}
	},

	computed: mapGetters({
		categories: 'CategoryModel/categories'
	})
};
