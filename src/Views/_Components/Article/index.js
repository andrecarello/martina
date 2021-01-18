import InterseptedImage from '@/Views/_Components/Helpers/InterseptedImage/index.vue'

export default {
  name: "OstonArticle",

  props: {
    content: {
      type: Object,
      required: true,
      default: () => console.log('Article: The CONTENT is required')
    }
  },

  components: {
    'oston-intersepted-image': InterseptedImage
  }
}
