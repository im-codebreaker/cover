<template>
  <CoverButton :size="size" :className="className">
    <i :class="`ri-${icon}-${type}`"></i>
    <slot></slot>
  </CoverButton>
</template>

<script>
import CoverButton from './CoverButton.vue';
/**
 * The basic Cover Button with Icon
 * @displayName Cover Button Icon
 */
export default {
  name: 'CoverButtonIcon',
  components: { CoverButton },
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
     * Size of the Cover Button
     * @values small, medium, large
     */
    size: {
      type: String,
      required: false,
      default: 'medium',
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

<style>
.btn i {
  margin-right: 8px;
}
</style>
