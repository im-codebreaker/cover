<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import getAccessToken from './authorization';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  mounted() {
    if (localStorage.getItem('accessToken') === null) {
      (async () => {
        const token = await getAccessToken();
        localStorage.setItem('accessToken', token.access_token);
      })();
    }
  },
};
</script>

<style>
#app {
  position: fixed;
  width: 100%;
}
</style>
