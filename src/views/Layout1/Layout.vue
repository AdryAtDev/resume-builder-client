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

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  // transition: all 0.3s ease-out;
  transition: all 2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
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
