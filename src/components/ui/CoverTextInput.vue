<template>
  <input
    type="text"
    class="input"
    :class="className"
    :placeholder="placeholder"
  />
</template>

<script>
/**
 * Cover basic input
 * @displayName Cover Text Input
 */
export default {
  name: 'CoverTextInput',
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
      default: 'Placeholder',
    },
  },
};
</script>

<style>
.input {
  color: #fff;
  caret-color: #fff;
  padding: 0.25rem;
  outline: none;
  border: 1px solid #fff;
  border-radius: var(--border-rounded);
  background-color: transparent;
}
.input::placeholder {
  padding-left: 0.75rem;
  color: rgba(255, 255, 255, 0.589);
  font-size: 0.875rem;
}
.input:focus,
.input:focus-within {
  outline: 1px solid rgb(195, 0, 255);
}
</style>
