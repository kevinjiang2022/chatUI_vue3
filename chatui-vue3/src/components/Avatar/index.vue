<template>
  <component
    :is="url ? 'a' : 'span'"
    :class="['Avatar', `Avatar--${size}`, `Avatar--${shape}`, className]"
    :href="url"
  >
    <img v-if="src" :src="src" :alt="alt" />
    <slot v-else></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export type AvatarSize = 'sm' | 'md' | 'lg';
export type AvatarShape = 'circle' | 'square';

export default defineComponent({
  name: 'Avatar',
  props: {
    className: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    size: {
      type: String as () => AvatarSize,
      default: 'md',
    },
    shape: {
      type: String as () => AvatarShape,
      default: 'circle',
    },
  },
});
</script>

<style lang="scss">
.Avatar {
  display: inline-block;
  position: relative;
  overflow: hidden;
  background-color: var(--gray-6);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &--circle {
    border-radius: 50%;
  }

  &--square {
    border-radius: 4px;
  }

  &--sm {
    width: 24px;
    height: 24px;
    line-height: 24px;
  }

  &--md {
    width: 32px;
    height: 32px;
    line-height: 32px;
  }

  &--lg {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
}
</style>
