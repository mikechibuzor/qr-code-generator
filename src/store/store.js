import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      history: [],
    };
  },
  getters: {
    getHistory(state) {
      return state.history;
    },
  },
  mutations: {
    addHistory(state, payload) {
      return state.history.push(payload);
    },
    removeHistory(state, historyId) {
      const newHistory = state.history.filter(
        (history) => historyId !== history
      );
      state.history = [...newHistory];
    },
  },
  actions: {
    addHistoryObj({ commit }, payload) {
      commit("addHistory", payload);
    },
    removeHistoryObj({ commit }, payload) {
      commit("removeHistory", payload);
    },
  },
});

export default store;
