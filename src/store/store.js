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
        (history) => history.id !== historyId
      );
      console.log(state.history);
      return (state.history = [...newHistory]);
    },
    resetHistory(state) {
      return (state.history = []);
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
