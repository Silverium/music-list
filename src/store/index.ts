import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    albums: [],
    errors: [],
  },
  mutations: {
    setalbums(state, payload) {
      state.albums = payload;
    },
    addError(state, payload) {
      state.errors = state.errors.concat(payload);
    },
  },
  actions: {
    async getAlbums({ commit }) {
      try {
        const { feed: { entry: albums } } = await (await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')).json();
        console.info('%cvariable: albums', 'background-color: lime;', albums);

        commit('setalbums', albums);
      } catch (error) {
        commit('addError', error);
      }
    },
  },
  modules: {
  },
});
