<template>
  <v-app-bar class="bg-blue-grey-darken-4 d-flex justify-center" app>
    <!-- toggle navigation drawer -->
    <v-app-bar-nav-icon
      class="ml-5"
      @click="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title class="title-text">
      <span class="text-grade">Habit</span>Tracker
    </v-toolbar-title>
    <v-btn class="mr-2" icon @click="goToSettingsPage">
      <v-icon>mdi-cog</v-icon>
    </v-btn>
    <v-btn class="mr-5" icon @click="goToProfilePage">
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-app-bar>

  <!-- Navigation sidebar -->
  <v-navigation-drawer
    v-model="drawer"
    class="bg-blue-grey-darken-4 w-25 d-flex"
    theme="dark"
    temporary
  >
    <v-list color="transparent" class="ma-5">
      <v-list-item
        class="nav-item"
        @click="router.push('/')"
        prepend-icon="mdi-home"
        ><span class="nav-text">Home</span></v-list-item
      >
      <v-list-item
        class="nav-item"
        @click="router.push('/AddHabit')"
        prepend-icon="mdi-plus"
        ><span class="nav-text">Add Habit</span></v-list-item
      >
      <v-list-item
        class="nav-item"
        @click="router.push('/Timer')"
        prepend-icon="mdi-clock"
        ><span class="nav-text">Timer</span></v-list-item
      >
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Manage the visibility of the navigation drawer
const drawer = ref(false);

// Navigate between routes
const router = useRouter();

// Navigate to the settings page
const goToSettingsPage = () => {
  router.push('/settings');
};

// Navigate to the profile page
const goToProfilePage = () => {
  router.push('/profile');
};
</script>

<style scoped>
.title-text {
  font-weight: 600;
  font-size: 1.2rem;
}
.nav-text {
  display: none;
}
.nav-item:hover {
  background-color: rgba(0, 255, 128, 0.115);
  border-radius: 15px;
}
.nav-item:hover .nav-text,
.nav-item:hover .v-icon {
  color: springgreen;
}
@media screen and (min-width: 680px) {
  .nav-text {
    display: inline;
  }
  .title-text {
    font-size: 1.8rem;
  }
}
</style>
