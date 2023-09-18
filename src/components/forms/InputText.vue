<script setup>
import { ref } from 'vue';

defineProps({
  inputId: {
    type: String,
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  }
})

defineEmits(['input-text'])

const inputValue = ref('');
</script>

<template>
  <div id="InputText">
    <label :for="inputId">{{label}}</label>
    <input type="text" :id="inputId" v-model="inputValue" @input="$emit('input-text', inputValue)" :placeholder="placeholder">
  </div>
</template>

<style lang="scss" scoped>
#InputText{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  &>input[type='text'] {
      width: 100%;
      padding: 0.75em 1.25em;
      margin: 0.5em 0em;
      border-radius: 0.25em;
      color: var(--celestial-blue);
      background-color: var(--aqua-haze);
      border: none;
      border-bottom: 0.125em solid var(--celestial-blue);
  }

  &>input[type='text']:focus {
      outline: 0.125em solid var(--pastel-grey);
  }
}
</style>
