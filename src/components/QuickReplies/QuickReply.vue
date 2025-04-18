<template>
  <button
    :class="['QuickReply', { new: item.isNew, highlight: item.isHighlight }]"
    type="button"
    :data-code="item.code"
    :aria-label="`快捷短语: ${item.name}，双击发送`"
    @click="handleClick"
  >
    <div class="QuickReply-inner">
      <Icon v-if="item.icon" :type="item.icon" />
      <img v-if="item.img" class="QuickReply-img" :src="item.img" alt="" />
      <span>{{ item.name }}</span>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Icon from '../Icon/index.vue';
import { QuickReplyItemProps } from '../../composables/useQuickReplies';

export default defineComponent({
  name: 'QuickReply',
  components: {
    Icon,
  },
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
  padding: 0 12px;
  height: 32px;
  border: 1px solid var(--gray-5);
  border-radius: 16px;
  background: var(--white);
  font-size: 14px;
  line-height: 30px;
  color: var(--gray-1);
  text-align: center;
  white-space: nowrap;
  transition: all 0.3s;
  cursor: pointer;
  user-select: none;
  -webkit-appearance: none;

  &:hover,
  &:focus {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }

  &.highlight {
    border-color: var(--primary-color);
    color: var(--primary-color);
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
      background: var(--primary-color);
      border-radius: 4px;
    }
  }

  &-inner {
    display: flex;
    align-items: center;
  }

  .Icon {
    margin-right: 4px;
  }

  &-img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
    object-fit: contain;
  }
}
</style>
