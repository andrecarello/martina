// helpers
import { slugify } from '@/Helpers/Misc';

export default {
  name: 'OstonHighlights',

  props: {
    content: {
      type: Object | Array,
      required: true,
      default: () => console.log('OstonHighlights: The CONTENT is required')
    }
  },

	methods: {
    slugify,
    select: function(id) {
      _.controller('magazine').getById(id);
    }
	}
};
