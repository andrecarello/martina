export const defaultState = {
	results: [],
	lastPage: 0,
	page: 1
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		results: (state) => state.results,
		lastPage: (state) => state.lastPage,
		page: (state) => state.page
	},

	actions: {
		reset({ commit }, value) {
			commit('reset', value);
		},
		saveResults({ commit }, value) {
			commit('setResults', value);
		},
		saveLastPage({ commit }, value) {
			commit('setLastPage', value);
		},
		savePage({ commit }, value) {
			commit('setPage', value);
		}
	},

	mutations: {
		reset(state) {
      Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setResults(state, value) {
			state.results = value;
		},
		setLastPage(state, value) {
			state.lastPage = value;
		},
		setPage(state, value) {
			state.page = value;
		}
	}
};
