import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      history: [],
      historyCounter: 0,
      modalShow: false,
    };
  },
  getters: {
    getHistory(state) {
      return state.history;
    },
    getHistoryCounter(state) {
      return state.historyCounter;
    },
    showModal(state) {
      return state.modalShow;
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
      state.historyCounter = 0;
      state.history = [];
    },
    increaseHistoryCounter(state) {
      return state.historyCounter++;
    },
    decreaseHistoryCounter(state) {
      return state.historyCounter--;
    },
    modalShowToggle(state) {
      state.modalShow = !state.modalShow;
    },
    modalShowToggleOff(state) {
      state.modalShow = false;
    },
  },
  actions: {
    addHistoryObj({ commit }, payload) {
      commit("addHistory", payload);
    },
    removeHistoryObj({ commit }, payload) {
      commit("removeHistory", payload);
      commit("modalShowToggleOff");
    },
    historyCounterIncrease({ commit }) {
      commit("increaseHistoryCounter");
    },
    historyCounterDecrease({ commit }) {
      commit("decreaseHistoryCounter");
    },
    historyReset({ commit }) {
      commit("resetHistory");
    },
    modalToggler({ commit }) {
      commit("modalShowToggle");
    },
  },
});

export default store;
