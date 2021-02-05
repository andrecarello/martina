export const defaultState = {
	categories: [],
	part: [],
	title: '',
	id: 0,
	lastPage: 0
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		categories: (state) => state.categories,
		part: (state) => state.part,
		title: (state) => state.title,
		id: (state) => state.id,
		lastPage: (state) => state.lastPage
	},

	actions: {
		reset({ commit }, value) {
			commit('reset', value);
		},
		saveCategories({ commit }, value) {
			commit('setCategories', value);
		},
		savePart({ commit }, value) {
			commit('setPart', value);
		},
		saveTitle({ commit }, value) {
			commit('setTitle', value);
		},
		saveId({ commit }, value) {
			commit('setId', value);
		},
		saveLastPage({ commit }, value) {
			commit('setLastPage', value);
		}
	},

	mutations: {
		reset(state, keys) {
			Object.keys(keys).map((i) => {
				state[keys[i]] = defaultState[keys[i]];
			});
		},
		setCategories(state, value) {
			state.categories = value;
		},
		setPart(state, value) {
			state.part = value;
		},
		setTitle(state, value) {
			state.title = value;
		},
		setId(state, value) {
			state.id = value;
		},
		setLastPage(state, value) {
			state.lastPage = value;
		}
	}
};
