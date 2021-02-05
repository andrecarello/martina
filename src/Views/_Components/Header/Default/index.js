import { PROJECT_NAME } from '@/config/Settings';

export default {
	name: 'OstonHeader',

	props: {
		showTitle: {
			type: Boolean,
			required: false,
			default: true
		},
		showSubtitle: {
			type: Boolean,
			required: false,
			default: true
		}
	},

	data() {
		return {
			PROJECT_NAME
		};
	}
};
