import { slugify } from '@/Helpers/Misc';

export default {
	name: 'OstonArticle',

	props: {
		content: {
			type: Object,
			required: true,
			default: () => console.log('Article: The CONTENT is required')
		}
	},

	methods: {
    slugify,

    select: function(id) {
      _.controller('magazine').getById(id)
    }
	}
};
