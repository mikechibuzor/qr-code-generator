import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      history: [],
      historyCounter: 0,
    };
  },
  getters: {
    getHistory(state) {
      return state.history;
    },
    getHistoryCounter(state) {
      return state.historyCounter;
    },
  },
  mutations: {
    addHistory(state, payload) {
      return state.history.unshift(payload);
    },
    removeHistory(state, historyId) {
      const newHistory = state.history.filter(
        (history) => history.id !== historyId
      );
      return (state.history = [...newHistory]);
    },
    resetHistory(state) {
      return (state.history = []);
    },
    increaseHistoryCounter(state) {
      return state.historyCounter++;
    },
  },
  actions: {
    addHistoryObj({ commit }, payload) {
      commit("addHistory", payload);
    },
    removeHistoryObj({ commit }, payload) {
      commit("removeHistory", payload);
    },
    historyCounterIncrease({ commit }) {
      commit("increaseHistoryCounter");
    },
    historyReset({ commit }) {
      commit("resetHistory");
    },
  },
});

export default store;
