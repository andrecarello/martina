// icons
import { ChevronLeftIcon } from 'vue-feather-icons'

export default {
  name: 'OstonHeaderSmall',

  props: {
    to: {
      type: String,
      required: false,
      default: '/'
    }
  },

  components: {
    'faether-left-icon': ChevronLeftIcon
  }
}
