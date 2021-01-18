// core
import { mapGetters } from 'vuex';

// helpers
import InterseptedImage from '@/Views/_Components/Helpers/InterseptedImage/index.vue';

export default {
  name: 'OstonHighlights',

  components: {
    'oston-intersepted-image': InterseptedImage
  },

  mounted() {
    this.highlights
  },
  computed: mapGetters({
    highlights: 'HomeModel/highlights'
  })
}
