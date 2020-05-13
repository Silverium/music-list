import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from './types';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    albums: [],
    errors: [],
    albumsSearch: '',
    albumSelected: undefined,
  },
  mutations: {
    setAlbums(state, payload) {
      state.albums = payload;
    },
    setAlbumsSearch(state, payload) {
      state.albumsSearch = payload;
    },
    setAlbumSelected(state, payload) {
      state.albumSelected = payload;
    },
    addError(state, payload) {
      state.errors = state.errors.concat(payload);
    },
  },
  actions: {
    async getAlbums({ commit }) {
      try {
        const { feed: { entry: albums } } = await (await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')).json();
        commit('setAlbums', albums);
      } catch (error) {
        commit('addError', error);
      }
    },
  },
  modules: {
  },
});
