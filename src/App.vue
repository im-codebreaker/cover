<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import getAccessToken from './authorization';

export default {
  name: 'App',
  components: {
    AppHeader,
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

<style></style>
