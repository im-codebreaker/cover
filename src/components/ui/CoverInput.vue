<template>
  <input
    class="input"
    :class="className"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<script>
/**
 * Cover basic input
 * @displayName Cover Input
 */
export default {
  name: 'CoverInput',
  props: {
    /**
     * Value of additional css classes
     */
    className: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: 'placeholder',
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
  },
};
</script>

<style>
.input {
  color: #fff;
  caret-color: #fff;
  padding: 0.25rem 1rem;
  outline: none;
  border: 1px solid #fff;
  border-radius: var(--border-rounded);
  background-color: transparent;
}
.input::placeholder {
  color: rgba(255, 255, 255, 0.589);
  font-size: 0.875rem;
}
.input:focus,
.input:focus-within {
  outline: 1px solid rgb(195, 0, 255);
}
</style>
