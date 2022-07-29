<template>
  <footer class="footer">
    <p>_Cover - Design by CodeBreaker</p>
  </footer>
</template>

<script>
export default {
  name: 'CoverFooter',
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
</style>
