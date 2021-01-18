import { mapGetters } from 'vuex';

// settings
import Settings from '@/config/Settings';

// components
import Layout from '@/Views/_Components/Layout/index.vue';
import Header from '@/Views/_Components/Header/Default/index.vue';
import Article from '@/Views/_Components/Article/index.vue';
import Highlights from '@/Views/_Components/Highlights/index.vue';
import HelpMenu from '@/Views/_Components/HelpMenu/index.vue';

export default {
	name: 'Home',

	components: {
		'oston-layout': Layout,
		'oston-header': Header,
		'oston-article': Article,
    'oston-highlights': Highlights,
    'oston-help-menu': HelpMenu
	},

	mounted() {
		Settings.title('Home');
		_.controller('home').getMagazines();
		_.controller('home').getHighlights();

		console.log(this.magazines);
	},

	// computed: {
	// 	...mapGetters('HomeModel', [ 'magazines' ])
	// }
	computed: mapGetters({
		magazines: 'HomeModel/magazines',
		highlights: 'HomeModel/highlights'
	})
};
