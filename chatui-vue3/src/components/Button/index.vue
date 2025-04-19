<template>
  <button
    :class="[
      'Btn',
      color && `Btn--${color}`,
      variant && `Btn--${variant}`,
      computedSize && `Btn--${computedSize}`,
      { 'Btn--block': block },
      className
    ]"
    type="button"
    :disabled="disabled"
    :data-loading="loading"
    @click="handleClick"
    v-bind="$attrs"
  >
    <span v-if="computedIcon" class="Btn-icon">
      <Icon :type="computedIcon" :spin="loading" />
    </span>
    <slot>{{ label }}</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import Icon from '../Icon/index.vue';

export default defineComponent({
  name: 'Button',
  components: {
    Icon,
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
      validator: (value: string) => ['primary', ''].includes(value),
    },
    variant: {
      type: String,
      default: '',
      validator: (value: string) => ['text', 'outline', ''].includes(value),
    },
    size: {
      type: String,
      default: '',
      validator: (value: string) => ['sm', 'md', 'lg', ''].includes(value),
    },
    block: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  setup(props, { emit }) {
    const computedIcon = computed(() => props.icon || (props.loading ? 'spinner' : ''));
    const computedSize = computed(() => props.size || (props.block ? 'lg' : ''));

    const handleClick = (e: MouseEvent) => {
      if (!props.disabled && !props.loading) {
        emit('click', e);
      }
    };

    return {
      computedIcon,
      computedSize,
      handleClick,
    };
  },
});
</script>

<style lang="scss">
.Btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  height: 32px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: var(--gray-6);
  color: var(--gray-1);
  font-size: 14px;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  user-select: none;
  touch-action: manipulation;
  -webkit-appearance: none;

  &:hover,
  &:focus {
    background-color: var(--gray-5);
  }

  &:active {
    background-color: var(--gray-7);
  }

  &[disabled],
  &[data-loading="true"] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &--primary {
    background-color: var(--primary-color);
    color: var(--white);

    &:hover,
    &:focus {
      background-color: var(--primary-color-hover);
    }

    &:active {
      background-color: var(--primary-color-active);
    }
  }

  &--outline {
    background-color: transparent;
    border-color: var(--gray-4);

    &:hover,
    &:focus {
      background-color: var(--gray-6);
    }

    &:active {
      background-color: var(--gray-5);
    }

    &.Btn--primary {
      border-color: var(--primary-color);
      color: var(--primary-color);

      &:hover,
      &:focus {
        background-color: var(--primary-color-bg);
      }

      &:active {
        background-color: var(--primary-color-bg-active);
      }
    }
  }

  &--text {
    background-color: transparent;
    border-color: transparent;

    &:hover,
    &:focus {
      background-color: var(--gray-6);
    }

    &:active {
      background-color: var(--gray-5);
    }

    &.Btn--primary {
      color: var(--primary-color);

      &:hover,
      &:focus {
        background-color: var(--primary-color-bg);
      }

      &:active {
        background-color: var(--primary-color-bg-active);
      }
    }
  }

  &--sm {
    height: 28px;
    padding: 0 10px;
    font-size: 12px;
  }

  &--lg {
    height: 40px;
    padding: 0 20px;
    font-size: 16px;
  }

  &--block {
    display: flex;
    width: 100%;
  }

  &-icon {
    margin-right: 5px;
  }
}
</style>
