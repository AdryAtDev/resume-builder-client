<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAppStore } from './stores/app';
import { Icon } from '@iconify/vue';

const appStore = useAppStore();
</script>

<template>
  <header id="header">
    <div class="languages">
      <button class="btn btn-language" @click="appStore.changeLocale('en')">
        <Icon icon="twemoji:flag-us-outlying-islands" />
        <p>English</p>
      </button>
      <button class="btn btn-language" @click="appStore.changeLocale('es')" >
        <Icon icon="twemoji:flag-spain" />
        <p>Español</p>
      </button>
    </div>
    <nav class="navigation">
      <RouterLink to="/">{{ appStore.i8n.dashboard[appStore.locale] }}</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
#header{
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn{
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      border: none;
      background-color: transparent;
      color: var(--celestial-blue);
    }

    /* BEGIN LANGUAGES */
  .languages{
    display: flex;
    align-items: center;
    gap: 2rem;
    
  }
  /* END LANGUAGES */

  /* BEGIN NAVIGATION */
  .navigation{
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  /* END NAVIGATION */
}
</style>
