<template>
  <div class="select-wrapper">
    <select :id="id" class="select" :class="className">
      <option disabled value="" selected> {{ placeholder }}</option>
      <option v-for="(option, index) in options" :key="index" :value="option">{{
        option
      }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CoverSelect',
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
     * Values of the select options
     */
    options: {
      type: Array,
      required: true,
    },
    /**
     * Value of placeholder for selected option
     */
    placeholder: {
      type: String,
      required: false,
      default: 'Select an option',
    },
  },
};
</script>

<style>
.select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  color: #fff;
  caret-color: #fff;
  padding: 0.25rem 2rem;
  outline: none;
  font-size: 0.875rem;
  border: 1px solid #fff;
  border-radius: var(--border-rounded);
  background-color: transparent;
}
.select-wrapper {
  position: relative;
}
.select-wrapper::before {
  pointer-events: none;
  content: '';
  position: absolute;
  top: calc(50% - 4px);
  right: 16px;
  width: 8px;
  height: 8px;
  border-color: #fff;
  border-style: solid;
  border-width: 0.1em 0.1em 0 0;
  transform: rotate(135deg);
}
.select option {
  font-size: 0.875rem;
  background-color: #292032;
}
</style>
