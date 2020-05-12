<template>
  <div class="home">
    <v-list>
      <v-list-item
        v-for="song in songs"
        :key="song.id.label"
      >
        {{song.title.label}}
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapState({
      songs: (state) => state.songs,
    }),
  },
  methods: {
    ...mapActions(['getSongs']),
  },
  beforeMount() {
    this.getSongs();
  },
};
</script>
