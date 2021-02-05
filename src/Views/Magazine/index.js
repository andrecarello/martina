// core
import { mapGetters } from 'vuex';

// components
import Header from '@/Views/_Components/Header/Small/index.vue';
import Reader from '@/Views/_Components/Reader/index.vue';

// helpers
import { getInArray } from '@/Helpers/Misc';

// skeleton
import Skeleton from '@/Views/_Skeletons/Magazine/index.vue';

export default {
	name: 'Magazine',

	components: {
		'oston-header': Header,
		'oston-reader': Reader,

		skeleton: Skeleton
	},

	data() {
		return {
			reading: false
		};
	},

	methods: {
		read: function(page = 0) {
			this.reading = true;
			// _.controller('loading').set('reading', false);

			_.controller('reader').set({
				page: page,
				totalPages: this.pages.length,
				content: getInArray(this.pages, page)
			});
		}
	},

	mounted() {
		if (this.$route.params.id !== this.magazine.id) {
			_.controller('magazine').getById(this.$route.params.id);
		}
	},

	computed: mapGetters({
		magazine: 'MagazineModel/magazine',
		pages: 'MagazineModel/magazinePdf',
		loading: 'LoadingModel/loading'
	})
};
