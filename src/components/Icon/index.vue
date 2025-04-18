<template>
  <svg 
    :class="['Icon', { 'is-spin': spin }, className]" 
    v-bind="ariaProps"
    v-bind="$attrs"
  >
    <use :xlink:href="`#icon-${type}`" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Icon',
  props: {
    type: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    spin: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const ariaProps = computed(() => {
      return typeof props.name === 'string' && props.name !== '' 
        ? { 'aria-label': props.name } 
        : { 'aria-hidden': 'true' };
    });

    return {
      ariaProps,
    };
  },
});
</script>

<style lang="scss">
.Icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  font-size: 16px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;

  &.is-spin {
    animation: icon-spin 1s infinite linear;
  }
}

@keyframes icon-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
