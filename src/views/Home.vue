<script>
import { mapState, mapActions } from 'vuex';
import { fuzzyFilter } from '@/utils/fuzzyFilter';

export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapState(['albums']),
    filteredAlbums() {
      const query = this.$store.state.albumsSearch;
      return this.albums.filter((album) => fuzzyFilter(query, album.title.label));
    },
  },
  methods: {
    ...mapActions(['getAlbums']),
    onAlbumSelected(album) {
      this.$store.commit('setAlbumSelected', album);
      this.$router.push(`album/${album.id.attributes['im:id']}`);
    },
  },
  beforeMount() {
    try {
      if (!this.$store.state.albums.length) throw new Error('Albums are not populated');
    } catch (error) {
      this.$store.commit('addError', error);
      this.getAlbums();
    }
  },
};
</script>

<template>
  <div class="home">
    <v-container v-if="albums">
      <v-list-item
        v-for="(album, albumIndex) in filteredAlbums"
        :key="album.id.label"
        @click="onAlbumSelected(album)"
      >
        <v-list-item-icon>
          <v-img
            v-if="album"
            :src="album['im:image'][0].label"
          ></v-img>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title> {{albumIndex + 1}} - {{album.title.label}}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-container>
    <v-skeleton-loader
      v-else
      v-for="time of 10"
      :key="time"
      type="list-item-avatar"
      tile
      class="mx-auto"
    ></v-skeleton-loader>
  </div>
</template>
