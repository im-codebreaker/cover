<template>
  <header class="header">
    <h1 class="logo">_Cover</h1>
    <div class="header_profile">
      <img class="avatar" src="../assets/avatar.png" />
      <p>{{ username }} <span class="handwaves">👋</span></p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CoverHeader',
  computed: {
    username() {
      return this.$store.getters.getUsername;
    },
  },
};
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 40px 40px 0;
}
.header_profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 100px;
  padding-right: 16px;
}
.logo {
  font-size: 24px;
  font-family: 'Play', sans-serif;
}
.avatar {
  width: 32px;
  height: 32px;
}
.handwaves {
  display: inline-block;
  transform: rotate(-15deg);
  -webkit-animation: smoothRotate 500ms ease-in 4 alternate;
  animation: smoothRotate 500ms ease-in 4 alternate;
}
@-webkit-keyframes smoothRotate {
  to {
    transform: rotate(15deg);
  }
}
@keyframes smoothRotate {
  to {
    transform: rotate(15deg);
  }
}
</style>
