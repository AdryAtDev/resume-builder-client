<script setup>
import Builder from './Builder.vue';
import Resume from './Resume.vue';
</script>

<template>
  <main id="layout1">
    <Builder/>
    <Resume/>
  </main>
</template>

<style lang="scss">
h3{
  color: var(--celestial-blue);
}

#layout1{
  display: grid;
  grid-template-columns: 100%;
  align-items: start;
}

@media only screen and (min-width: 1649px) {
  #layout1{
    grid-template-columns: 50% 50%;
    gap: 1rem;
  }
}
</style>
