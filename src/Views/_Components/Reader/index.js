// core
import { mapGetters } from 'vuex';
import pdf from 'vue-pdf';

// helpers
import Settings from '@/config/Settings';
import { getInArray } from '@/Helpers/Misc';

export default {
	name: 'MagazineReader',

	mounted() {
		let { magazine_name, theme_title } = this.magazine;
		let title = magazine_name ? magazine_name : '';
		let subtitle = theme_title ? ' - ' + theme_title : '';

		Settings.title(title + subtitle);
	},

	data() {
		return {
			loading: true,

			loadedRatio: 0
		};
	},

	components: {
		'pdf-reader': pdf
	},

	methods: {
		next: function() {
			this.loading = true;

			_.controller('reader').set({
				page: this.page + 1,
				content: getInArray(this.pages, this.page + 1)
			});
		},
		prev: function() {
			this.loading = true;

			_.controller('reader').set({
				page: this.page - 1,
				content: getInArray(this.pages, this.page - 1)
			});
    },

    favorite: function(method, id) {
      _.controller('magazine').favorite(method, id)
    }
	},

	computed: mapGetters({
		page: 'ReaderModel/page',
		totalPages: 'ReaderModel/totalPages',
		content: 'ReaderModel/content',
		magazine: 'MagazineModel/magazine',
		pages: 'MagazineModel/magazinePdf'
  })
};
