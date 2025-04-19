<template>
  <button
    :class="['QuickReply', { new: item.isNew, highlight: item.isHighlight }]"
    type="button"
    :data-code="item.code"
    :aria-label="`快捷短语: ${item.name}，点击发送`"
    @click="handleClick"
  >
    <div class="QuickReply-inner">
      <i v-if="item.icon" :class="['fas', `fa-${item.icon}`]"></i>
      <img v-if="item.img" class="QuickReply-img" :src="item.img" alt="" />
      <span>{{ item.name }}</span>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { QuickReplyItemProps } from '../../composables/useQuickReplies';

export default defineComponent({
  name: 'QuickReply',
  props: {
    item: {
      type: Object as PropType<QuickReplyItemProps>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = () => {
      emit('click', props.item, props.index);
    };

    return {
      handleClick,
    };
  },
});
</script>

<style lang="scss">
.QuickReply {
  display: inline-block;
  margin-right: 10px;
  padding: 0 16px;
  height: 36px;
  border: 1px solid var(--gray-5);
  border-radius: 18px;
  background: var(--white);
  font-size: 14px;
  line-height: 34px;
  color: var(--gray-1);
  text-align: center;
  white-space: nowrap;
  transition: all 0.3s ease;
  cursor: pointer;
  user-select: none;
  -webkit-appearance: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);

  &:hover {
    border-color: var(--brand-1);
    color: var(--brand-1);
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
  }

  &.highlight {
    border-color: var(--brand-1);
    color: var(--brand-1);
    background-color: var(--brand-4);
  }

  &.new {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: -4px;
      right: -4px;
      width: 8px;
      height: 8px;
      background: var(--brand-1);
      border-radius: 4px;
      box-shadow: 0 1px 3px rgba(var(--brand-1-rgb), 0.3);
    }
  }

  &-inner {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  i {
    margin-right: 6px;
    font-size: 14px;
  }

  &-img {
    width: 16px;
    height: 16px;
    margin-right: 6px;
    object-fit: contain;
  }
}

// 暗色模式适配
html[data-color-scheme="dark"] {
  .QuickReply {
    background: var(--gray-6);
    border-color: var(--gray-5);
    color: var(--gray-2);
    
    &:hover {
      border-color: var(--brand-1);
      color: var(--brand-1);
    }
    
    &.highlight {
      background-color: rgba(var(--brand-1-rgb), 0.1);
    }
  }
}
</style>
