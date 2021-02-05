// core
import { mapGetters } from 'vuex';

// helpers
import { slugify } from '@/Helpers/Misc';

// components
import Header from '@/Views/_Components/Header/Small/index.vue';

// skeleton
import Skeleton from '@/Views/_Skeletons/Categories/index.vue';

export default {
	name: 'Categories',

	components: {
    'oston-header': Header,

    'skeleton': Skeleton
	},

	data() {
		return {
			page: 1,
			loadingMore: false
		};
	},

	methods: {
		slugify,

		load: function() {
			this.page++;
			this.loadingMore = true;
			_.controller('category').get(this.title, this.id, this.page, () => (this.loadingMore = false));
		}
	},

	computed: mapGetters({
		title: 'CategoryModel/title',
		magazines: 'CategoryModel/part',
		id: 'CategoryModel/id',
		lastPage: 'CategoryModel/lastPage',
		loading: 'LoadingModel/loading'
	})
};
