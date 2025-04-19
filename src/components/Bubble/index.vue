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
  padding: 10px 16px;
  border-radius: 18px;
  background-color: var(--white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  
  p {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    color: var(--gray-1);
  }
  
  // 代码块样式
  code {
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    background-color: var(--gray-7);
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 14px;
  }
  
  pre {
    background-color: var(--gray-7);
    padding: 12px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 8px 0;
    
    code {
      background-color: transparent;
      padding: 0;
      border-radius: 0;
      display: block;
    }
  }
}

// 右侧消息气泡样式
.Message.right .Bubble {
  background: linear-gradient(135deg, var(--brand-3), var(--brand-4));
  color: var(--gray-1);
}

// 暗色模式适配
html[data-color-scheme="dark"] {
  .Bubble {
    background-color: var(--gray-6);
    
    p {
      color: var(--gray-2);
    }
    
    code {
      background-color: rgba(0, 0, 0, 0.2);
    }
    
    pre {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
  
  .Message.right .Bubble {
    background: linear-gradient(135deg, var(--brand-3), rgba(51, 43, 38, 0.8));
  }
}
</style>
