<template>
  <a
    v-if="external"
    class="btn"
    :class="`${size} ${className}`"
    :href="href"
    target="_blank"
    rel="noreferrer"
  >
    <i :class="`ri-${icon}-line`"></i>
    <slot></slot>
  </a>
  <router-link v-else class="btn" :class="`${size} ${className}`" :to="href">
    <i :class="`ri-${icon}-line`"></i>
    <slot></slot>
  </router-link>
</template>

<script>
/**
 * Basic Cover Hyperlinks
 * @displayName Cover Button Link
 */
export default {
  name: 'CoverButtonLink',
  props: {
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
     * Value of the link destination
     */
    href: {
      type: String,
      required: true,
    },
    /**
     * Value of additional css classes
     */
    className: {
      type: String,
      required: false,
      default: '',
    },
    size: {
      type: String,
      required: false,
      default: 'medium',
    },
    /**
     * Define the type of the hyperlink
     * @values true, false
     */
    external: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
