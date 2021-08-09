import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      history: [
        {
          id: 1,
          userEnteredUrl: "",
        },
        {
          id: 2,
          userEnteredUrl: "",
        },
        {
          id: 2,
          userEnteredUrl: "",
        },
      ],
    };
  },
  getters: {
    getHistory(state) {
      return state.history;
    },
  },
  mutations: {
    addHistory(state, historyObject) {
      return state.history.push(historyObject);
    },
    removeHistory(state, historyId) {
      const newHistory = state.history.filter(
        (history) => historyId !== history
      );
      state.history = [...newHistory];
    },
  },
  actions: {
    addHistory({ commit }, payload) {
      commit("addHistory", payload);
    },
    removeHistory({ commit }, payload) {
      commit("removeHistory", payload);
    },
  },
});

export default store;
