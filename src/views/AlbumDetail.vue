<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'AlbumDetail',
  created() {
    try {
      if (!this.$store.state.albums[this.$route.params.id]) throw new Error('Album does not exist');
    } catch (error) {
      this.getAlbums();
    }
  },
  computed: {
    album() {
      try {
        return this.$store.state.albums[this.$route.params.id];
      } catch (error) {
        return null;
      }
    },

  },
  methods: {
    ...mapActions(['getAlbums']),
  },
});
</script>
<template>
  <v-container>
    <v-row v-if="album">
      <v-col cols="2">
        <v-img :src="album['im:image'][2].label"></v-img>
      </v-col>
      <v-col cols="10">List of songs of - {{album.title.label}}</v-col>
    </v-row>
    <v-skeleton-loader
      v-else
      type="list-item-avatar-three-line"
      tile
      class="mx-auto"
    ></v-skeleton-loader>
    <pre>{{ album }}</pre>
  </v-container>
</template>
