// core
import { mapGetters } from 'vuex';

// components
import Highlights from '@/Views/_Components/Highlights/index.vue';

// helpers
import { slugify } from '@/Helpers/Misc';

export default {
	name: 'Explorer',

	data() {
		return {
			form: {
				term: ''
      },

			loading: false
		};
  },

  mounted() {
    _.controller('search').reset();
    _.controller('explorer').get();
    _.controller('explorer').getById(5);
  },

  components: {
    'oston-highlights': Highlights
  },

	methods: {
		slugify,

		search: function() {
			const { term } = this.form;
			if (term.length > 0) {
				this.debounce(term);
			} else {
				_.controller('search').reset();
			}
		},

		debounce: _.debounce((term) => {
			_.controller('search').get(term);
		}, 1000),

		more: function() {
			const { term } = this.form;
			this.loading = true;
			_.controller('search').get(term, this.page + 1, () => (this.loading = false));
		},

		reset: function() {
			this.form.term = '';
			_.controller('search').reset();
		}
  },

  computed: mapGetters({
    results: 'SearchModel/results',
    lastPage: 'SearchModel/lastPage',
    page: 'SearchModel/page',

    news: 'ExplorerModel/news',
    unique: 'ExplorerModel/unique'
  })
};
