<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header id="header">
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
#header{
  height: 4rem;
}
</style>
