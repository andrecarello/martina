export const defaultState = {
	page: 0,
	totalPages: 0,
	content: ''
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		page: (state) => state.page,
		totalPages: (state) => state.totalPages,
		content: (state) => state.content
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		savePage({ commit }, value) {
			commit('setPage', value);
		},
		saveTotalPages({ commit }, value) {
			commit('setTotalPages', value);
		},
		saveContent({ commit }, value) {
			commit('setContent', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setPage(state, value) {
			state.page = value;
		},
		setTotalPages(state, value) {
			state.totalPages = value;
		},
		setContent(state, value) {
			state.content = value;
		}
	}
};
