<template>
  <div :class="['Bubble', type]" :data-type="type" v-bind="$attrs">
    <p v-if="content">{{ content }}</p>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Bubble',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    content: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss">
.Bubble {
  display: inline-block;
  max-width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: var(--white);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  
  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: pre-wrap;
  }
}
</style>
