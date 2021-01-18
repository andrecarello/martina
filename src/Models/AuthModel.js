export const defaultState = {
	user: '',
	pin: '',
	token: ''
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		user: (state) => state.user,
		pin: (state) => state.pin,
		token: (state) => state.token
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveUser({ commit }, value) {
			commit('setUser', value);
		},
		savepin({ commit }, value) {
			commit('setPin', value);
		},
		saveToken({ commit }, value) {
			commit('setToken', value);
		}
	},

	mutations: {
		reset(state) {
			Object.keys(defaultState).map((key) => {
				state[key] = defaultState[key];
			});
		},
		setUser(state, value) {
			state.user = value;
		},
		setPin(state, value) {
			state.pin = value;
		},
		setToken(state, value) {
			state.token = value;
		}
	}
};
