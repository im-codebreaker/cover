import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      username: 'John Doe',
      currentSearch: 'The Weeknd',
    };
  },
  getters: {
    getUsername(state) {
      return state.username;
    },
    getCurrentSearch(state) {
      return state.currentSearch;
    },
  },
  mutations: {
    setCurrentSearch(state, payload) {
      state.currentSearch = payload;
    },
  },
  actions: {
    setCurrentSearch(context, name) {
      context.commit('setCurrentSearch', name);
    },
  },
});

export default store;
