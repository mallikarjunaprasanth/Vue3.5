<script setup lang="ts">
import { useRoute } from 'vue-router'
import Navbar from './views/Navbar/Navbar.vue'

const route = useRoute()
</script>

<template>
  <div>
    <!-- Show Navbar only if not on Login page -->
    <Navbar v-if="route.name !== 'Login'" />
    <router-view />
  </div>
</template>
