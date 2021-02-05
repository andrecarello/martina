export const defaultState = {
  categories: []
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		categories: (state) => state.categories,
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveCategories({ commit }, value) {
			commit('setCategories', value);
		},
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setCategories(state, value) {
			state.categories = value;
    }
	}
};
