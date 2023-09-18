<script setup>
import {Icon} from '@iconify/vue';

defineProps({
  icon: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div id="icon-btn">
    <Icon class="icon" :icon="icon" />
    <button type="button" name="button">
      <p>Add One More Experience</p>
    </button>
  </div>
</template>

<style lang="scss" scoped>
#icon-btn{
  display: flex;
  align-items: center;

  *{
    cursor: pointer;
  }

  &>.icon{
    width: 1.6rem;
    height: 1.6rem;
    color: var(--celestial-blue);
  }

  &>button{
    background: transparent;
    border: none;
    color: var(--celestial-blue);
  }
}
</style>
