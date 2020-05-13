<script lang="ts">
import Vue from 'vue';
import { mapActions, mapState } from 'vuex';

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
    ...mapState({
      album(state: any) {
        return state.albums[this.$route.params.id];
      },
    }),
  },
  methods: {
    ...mapActions(['getAlbums']),
  },
});
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-img
          v-if="album"
          :src="album['im:image'][2].label"
        ></v-img>
      </v-col>
      <v-col cols="10">List of songs of - {{album.title.label}}</v-col>
    </v-row>
    <pre>{{ album }}</pre>
  </v-container>
</template>
