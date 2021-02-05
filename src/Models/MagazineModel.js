export const defaultState = {
	magazines: [],
	magazine: {},
	magazinePdf: [],
	highlights: []
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		magazines: (state) => state.magazines,
		magazine: (state) => state.magazine,
		magazinePdf: (state) => state.magazinePdf,
		highlights: (state) => state.highlights
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveMagazines({ commit }, value) {
			commit('setMagazines', value);
		},
		saveMagazine({ commit }, value) {
			commit('setMagazine', value);
		},
		saveMagazinePdf({ commit }, value) {
			commit('setMagazinePdf', value);
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
		setMagazine(state, value) {
			state.magazine = value;
		},
		setMagazinePdf(state, value) {
			state.magazinePdf = value;
		},
		setHighlights(state, value) {
			state.highlights = value;
		}
	}
};
