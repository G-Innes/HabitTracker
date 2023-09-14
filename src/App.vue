<template>
  <v-app id="main">
    <Navigation />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import Navigation from './components/navigation/Index.vue';
</script>
