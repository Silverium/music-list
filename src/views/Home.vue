<template>
  <div class="home">
    <v-container>
      <v-list-item
        v-for="(album, albumIndex) in albums"
        :key="album.id.label"
        @click="$router.push(`album/${albumIndex}`)"
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
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapState({
      albums: (state) => state.albums,
    }),
  },
  methods: {
    ...mapActions(['getAlbums']),
  },
  beforeMount() {
    try {
      if (!this.$store.state.albums.length) throw new Error('Albums are not populated');
    } catch (error) {
      this.getAlbums();
    }
  },
};
</script>
