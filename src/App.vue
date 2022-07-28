<template>
  <AppHeader />
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  },
};
</script>

<style>
#app {
  position: fixed;
  width: 100%;
}
</style>
