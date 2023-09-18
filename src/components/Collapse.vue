<script setup>
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  icon: {
    type: String,
    required: false,
  }
})

const isCollapsed = ref(true);

const limitString = (data, words) => {
  if (typeof data === 'undefined') {
  }else{
    return data.substring(0, words);
  }
}

</script>

<template>
  <section id="collapse">
    <!-- BEGIN HEAD -->
    <div class="head" @click="isCollapsed = !isCollapsed">
      <div class="col1">
        <Icon class="icon" :icon="icon" />
      </div>
      <div class="col2">
        <h3 v-text="limitString(title, 20)"></h3>
        <p v-html="limitString(description, 40)"></p>
      </div>
      <div class="col3">
        <Icon class="icon" :icon="isCollapsed == true ? 'ri:arrow-down-s-line' : 'ri:arrow-up-s-line'" />
      </div>
    </div>
    <!-- END HEAD -->

    <!-- BEGIN BODY -->
    <div class="body" v-show="isCollapsed == false">
      <slot name="body"></slot>
    </div>
    <!-- END BODY -->
  </section>
</template>

<style lang="scss" scoped>
#collapse{
  width: 100%;
  // margin: 1rem;
  border: 0.1rem solid var(--celestial-blue);

  &>.head{
    cursor: pointer;
    padding: 2rem 1rem;
    display: flex;
    align-items: start;

    .icon {
      width: 2rem;
      height: 2rem;
    }

    &>.col1{
      display: flex;
      justify-content: end;
    }
    &>.col2{
      width: 100%;
    }
  }

  &>.body{
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: center;
    gap: 2rem;
  }
}
</style>
