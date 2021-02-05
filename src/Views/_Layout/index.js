// components
import HelpMenu from '@/Views/_Components/HelpMenu/index.vue';

export default {
  name: 'OstonLayout',

  props: {
    layout: {
      type: String,
      required: false,
      default: 'default'
    },

    menu: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  components: {
    'oston-help-menu': HelpMenu
  }
}
