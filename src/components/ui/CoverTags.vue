<template>
  <span class="tags" :class="className">
    <i :class="`ri-${icon}-${type}`"></i>
    <slot></slot>
  </span>
</template>

<script>
/**
 * Cover basic tags
 * @displayName Cover Tags
 */
export default {
  name: 'CoverTags',
  props: {
    /**
     * Value of additional css classes
     */
    className: {
      type: String,
      required: false,
      default: '',
    },
    /**
     * Value of the icon based on the remix-icon library
     * @link https://remixicon.com/
     */
    icon: {
      type: String,
      required: false,
      default: 'spotify',
    },
    /**
     * The value of the icon's type
     * @values fill, line
     */
    type: {
      type: String,
      required: false,
      default: 'line',
    },
  },
};
</script>

<style scoped>
.tags {
  padding: 4px 12px;
  font-size: 12px;
  background-color: rgba(230, 6, 181, 0.25);
  border-radius: var(--border-rounded);
}
.tags i {
  margin-right: 0.5rem;
}
</style>
