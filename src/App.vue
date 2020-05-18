<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data() {
    return {
      transitionName: 'scroll-x-transition',
    };
  },
  methods: {
    goHome() {
      if (this.$route.path !== '/') this.$router.push('/');
    },
    updateAlbumsSearch(payload: string) {
      this.$store.commit('setAlbumsSearch', payload);
    },
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'scroll-x-transition' : 'scroll-x-reverse-transition';
    },
  },
});
</script>

<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-btn
        color="primary"
        class="d-flex align-center mr-2"
        @click="goHome"
      >
        <v-icon>mdi-music-box-multiple</v-icon>

        Albums list
      </v-btn>

      <v-spacer></v-spacer>

      <v-text-field
        :value="$store.state.albumsSearch"
        outlined
        label="Search"
        dense
        clearable
        single-line
        hide-details
        append-icon="mdi-magnify"
        @input="updateAlbumsSearch"
      ></v-text-field>
    </v-app-bar>

    <v-content>
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>
