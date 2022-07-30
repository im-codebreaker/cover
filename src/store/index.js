import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      username: 'John Doe',
      favoriteArtist: 'The Weeknd',
      accessToken: sessionStorage.getItem('accessToken'),
    };
  },
});

export default store;
