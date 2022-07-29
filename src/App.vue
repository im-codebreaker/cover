<template>
  <CoverHeader />
  <router-view></router-view>
  <CoverFooter />
</template>

<script>
import CoverHeader from './components/CoverHeader.vue';
import CoverFooter from './components/CoverFooter.vue';
import getAccessToken from './authorization';

export default {
  name: 'App',
  components: {
    CoverHeader,
    CoverFooter,
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
