<script setup>
import {Icon} from '@iconify/vue';

defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="section">
    <!-- BEGIN HEAD -->
    <div class="head">
      <Icon class="icon" :icon="icon" />
      <h3>{{title}}</h3>
    </div>
    <!-- END HEAD -->

    <!-- BEGIN BODY -->
    <div class="body">
      <slot name="body"></slot>
    </div>
    <!-- END BODY -->
  </section>
</template>

<style lang="scss" scoped>
.section{
  margin: 0 1rem;

  .head{
    display: flex;
    align-items: center;
    gap: 1rem;

    .icon {
      width: 2rem;
      height: 2rem;
    }

    h3{
      padding-top: 0.2rem;
      text-transform: uppercase;
    }
  }

  .body{
    padding-top: 1.4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
