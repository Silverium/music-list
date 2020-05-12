import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songs: [],
    errors: [],
  },
  mutations: {
    setSongs(state, payload) {
      state.songs = payload;
    },
    addError(state, payload) {
      state.errors = state.errors.concat(payload);
    },
  },
  actions: {
    async getSongs({ commit }) {
      try {
        const { feed: { entry: songs } } = await (await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')).json();
        console.info('%cvariable: songs', 'background-color: lime;', songs);

        commit('setSongs', songs);
      } catch (error) {
        commit('addError', error);
      }
    },
  },
  modules: {
  },
});
