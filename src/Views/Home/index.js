import { mapGetters } from 'vuex';

// settings
import Settings from '@/config/Settings';

// components
import Header from '@/Views/_Components/Header/Default/index.vue';
import Article from '@/Views/_Components/Article/index.vue';
import Highlights from '@/Views/_Components/Highlights/index.vue';

// skeleton
import Skeleton from '@/Views/_Skeletons/Magazines/index.vue';

export default {
	name: 'Home',

	components: {
		'oston-header': Header,
		'oston-article': Article,
		'oston-highlights': Highlights,

		skeleton: Skeleton
	},

	mounted() {
		Settings.title('Home');
		_.controller('magazine').getAll();
		_.controller('magazine').getAllTheme();
		_.controller('category').getAll();
	},

	computed: mapGetters({
		magazines: 'MagazineModel/magazines',
		highlights: 'MagazineModel/highlights',
		loading: 'LoadingModel/loading'
	})
};
