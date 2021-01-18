export const defaultState = {
	magazines: [],
	highlights: []
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		magazines: (state) => state.magazines,
		highlights: (state) => state.highlights
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveMagazines({ commit }, value) {
			commit('setMagazines', value);
		},
		saveHighlights({ commit }, value) {
			commit('setHighlights', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setMagazines(state, value) {
			state.magazines = value;
    },
    setHighlights(state, value) {
      state.highlights = value
    }
	}
};
