<template>
  <button class="btn" :class="`${size} ${className}`">
    <slot></slot>
  </button>
</template>

<script>
/**
 * The basic Cover Button with Icon
 * @displayName Cover Button
 */
export default {
  name: 'CoverButton',
  props: {
    /**
     * Value of the optionnal css class
     */
    className: {
      type: String,
      required: false,
      default: '',
    },
    /**
     * Size of the Cover Button
     * @values small, medium, large
     */
    size: {
      type: String,
      required: false,
      default: 'medium',
    },
  },
};
</script>

<style>
.btn {
  cursor: pointer;
  padding: 0.25rem 1rem;
  border-radius: 100px;
  color: #f4f4f6;
  border: 1px solid #f4f4f6bb;
  outline-color: #f4f4f6;
  background-color: var(--alpha-dark);
  box-shadow: 0 0 0 0 var(--primary-lighter);
}
.btn.small {
  font-size: 0.75rem;
}
.btn.medium {
  font-size: 0.875rem;
}
.btn.large {
  font-size: 1rem;
}
@media (hover: hover) {
  .btn:hover,
  .btn:focus {
    box-shadow: 0 0 0 1em transparent;
    transition: box-shadow 500ms linear;
  }
}
</style>
