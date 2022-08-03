<template>
  <header class="list__header" :class="className">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'CoverListHeader',
  props: {
    /**
     * Value of additional css classes
     */
    className: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style>
.list__header {
  position: relative;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  border-radius: var(--border-radius);
}
.list__header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: var(--border-radius);
}
.list__header > * {
  isolation: isolate;
}
</style>
