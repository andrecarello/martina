export const defaultState = {
	news: [],
	unique: []
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		news: (state) => state.news,
		unique: (state) => state.unique
	},

	actions: {
		reset({ commit }, value) {
			commit('reset', value);
		},
		saveNews({ commit }, value) {
			commit('setNews', value);
		},
		saveUnique({ commit }, value) {
			commit('setUnique', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setNews(state, value) {
			state.news = value;
		},
		setUnique(state, value) {
			state.unique = value;
		}
	}
};
