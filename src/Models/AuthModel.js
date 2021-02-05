export const defaultState = {
	user: '',
	pin: '',
  token: '',
  pinToken: '',
	method: ''
};

export default {
	namespaced: true,

	state: defaultState,

	getters: {
		user: (state) => state.user,
    pin: (state) => state.pin,
    pinToken: (state) => state.pinToken,
		token: (state) => state.token,
		method: (state) => state.method
	},

	actions: {
		reset({ commit }) {
			commit('reset');
		},
		saveUser({ commit }, value) {
			commit('setUser', value);
		},
		savePin({ commit }, value) {
			commit('setPin', value);
    },
    savePinToken({ commit }, value) {
			commit('setPinToken', value);
		},
		saveToken({ commit }, value) {
			commit('setToken', value);
		},
		saveMethod({ commit }, value) {
			commit('setMethod', value);
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
    setPinToken(state, value) {
			state.pinToken = value;
		},
		setToken(state, value) {
			state.token = value;
		},
		setMethod(state, value) {
			state.method = value;
		}
	}
};
