<template>
  <button class="btn">
    <i :class="`ri-${icon}-line`"></i>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'CoverButton',
  props: {
    text: String,
    icon: String,
  },
};
</script>

<style>
.btn {
  cursor: pointer;
  padding: 4px 16px;
  border-radius: 100px;
  color: #f4f4f6;
  border: 1px solid #f4f4f6bb;
  outline-color: #f4f4f6;
  background-color: #f4f4f681;
}
.btn:hover {
  background-color: #f4f4f6a8;
}
.btn i {
  margin-right: 8px;
}
</style>
