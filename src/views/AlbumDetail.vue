<script lang="ts">
import Vue from 'vue';
import { mapActions, mapState } from 'vuex';
import { Album } from '../store/types';

export default Vue.extend({
  name: 'AlbumDetail',
  async created() {
    try {
      if (!this.$store.state.albumSelected) await this.getAlbums();
      const selectedAlbum = this.$store.state.albums.find((album: Album) => album.id.attributes['im:id'] === this.$route.params.id);
      if (selectedAlbum === -1) throw new Error('Album does not exist');
      this.$store.commit('setAlbumSelected', selectedAlbum);
    } catch (error) {
      this.$store.commit('addError', error);
      this.$router.push('/');
    }
  },
  computed: {
    ...mapState({
      album: 'albumSelected',
    }),

  },
  methods: {
    ...mapActions(['getAlbums']),
  },
});
</script>
<template>
  <v-container>
    <v-row v-if="album">
      <v-col
        cols="12"
        sm="2"
      >
        <v-img :src="album['im:image'][2].label"></v-img>
      </v-col>
      <v-col
        cols="12"
        sm="10"
      >
        <v-list>
          <h2>{{album.title.label}}</h2>
          <v-list-item>
            {{album['im:price'].label}}
          </v-list-item>
          <v-list-item
            :href="album.link.attributes.href"
            target="_blank"
          >
            {{album['im:itemCount'].label}} songs in Album
            <v-icon
              color="grey lighten-1"
              class="ml-2"
            >mdi-apple</v-icon> Music
            <v-icon
              color="grey lighten-1"
              class="ml-2"
            >mdi-open-in-new</v-icon>
          </v-list-item>
          <v-list-item
            v-if="album['im:artist'].attributes"
            :href="album['im:artist'].attributes.href"
            target="_blank"
          >
            About {{album['im:artist'].label}}
            <v-icon
              color="grey lighten-1"
              class="ml-2"
            >mdi-apple</v-icon> Music
            <v-icon
              color="grey lighten-1"
              class="ml-2"
            >mdi-open-in-new</v-icon>
          </v-list-item>
          <v-list-item>
            Released on {{album['im:releaseDate'].attributes.label}}
          </v-list-item>
          <v-list-item>
            {{album.rights.label}}
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-skeleton-loader
      v-else
      type="list-item-avatar-three-line"
      tile
      class="mx-auto"
    ></v-skeleton-loader>
  </v-container>
</template>
