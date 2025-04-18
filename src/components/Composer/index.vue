<template>
  <div 
    class="Composer" 
    :data-has-value="hasValue" 
    :data-has-text-once="!!textOnce"
  >
    <div class="Composer-inputWrap">
      <textarea
        ref="inputRef"
        class="Composer-input"
        :value="text"
        :placeholder="placeholder"
        @focus="handleInputFocus"
        @blur="handleInputBlur"
        @keydown="handleInputKeyDown"
        @input="handleTextChange"
      ></textarea>
    </div>
    <button 
      v-if="hasValue" 
      class="Composer-sendBtn" 
      @click="handleSendBtnClick"
      :disabled="!hasValue"
    >
      发送
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, onMounted, nextTick } from 'vue';

export type InputType = 'voice' | 'text';

export default defineComponent({
  name: 'Composer',
  props: {
    initialText: {
      type: String,
      default: '',
    },
    textOnce: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '请输入...',
    },
    inputType: {
      type: String as () => InputType,
      default: 'text',
    },
  },
  emits: ['send', 'focus', 'blur', 'change', 'inputTypeChange'],
  setup(props, { emit, expose }) {
    const text = ref(props.initialText);
    const hasValue = ref(!!props.initialText);
    const currentPlaceholder = ref(props.textOnce || props.placeholder);
    const currentInputType = ref(props.inputType);
    const inputRef = ref<HTMLTextAreaElement | null>(null);
    const focused = ref(false);
    let blurTimer: number | null = null;
    let valueTimer: number | null = null;

    watch(text, (newValue) => {
      if (newValue) {
        if (valueTimer) clearTimeout(valueTimer);
        hasValue.value = true;
      } else {
        // 中文上屏时有一瞬间会无值，所以做延迟处理
        valueTimer = window.setTimeout(() => {
          hasValue.value = false;
        });
      }
    });

    const handleInputFocus = (e: FocusEvent) => {
      if (blurTimer) clearTimeout(blurTimer);
      document.documentElement.classList.add('S--focusing');
      focused.value = true;

      emit('focus', e);
    };

    const handleInputBlur = (e: FocusEvent) => {
      blurTimer = window.setTimeout(() => {
        document.documentElement.classList.remove('S--focusing');
        focused.value = false;
      }, 0);

      emit('blur', e);
    };

    const send = () => {
      if (text.value) {
        emit('send', 'text', text.value);
        text.value = '';
      } else if (props.textOnce) {
        emit('send', 'text', props.textOnce);
      }

      if (props.textOnce) {
        currentPlaceholder.value = props.placeholder;
      }

      if (focused.value && inputRef.value) {
        nextTick(() => {
          inputRef.value?.focus();
        });
      }
    };

    const handleInputKeyDown = (e: KeyboardEvent) => {
      if (!e.shiftKey && e.key === 'Enter') {
        send();
        e.preventDefault();
      }
    };

    const handleTextChange = (e: Event) => {
      const target = e.target as HTMLTextAreaElement;
      text.value = target.value;
      emit('change', target.value, e);
    };

    const handleSendBtnClick = (e: MouseEvent) => {
      send();
      e.preventDefault();
    };

    // 暴露方法给父组件
    const setText = (newText: string) => {
      text.value = newText;
    };

    expose({
      setText,
    });

    return {
      text,
      hasValue,
      textOnce: computed(() => props.textOnce),
      placeholder: currentPlaceholder,
      inputRef,
      handleInputFocus,
      handleInputBlur,
      handleInputKeyDown,
      handleTextChange,
      handleSendBtnClick,
    };
  },
});
</script>

<style lang="scss">
.Composer {
  display: flex;
  padding: 8px 12px;
  background: var(--white);
  border-top: 1px solid var(--gray-6);

  &-inputWrap {
    flex: 1;
    min-width: 0;
    margin-right: 8px;
  }

  &-input {
    display: block;
    width: 100%;
    height: 36px;
    padding: 8px 12px;
    border: 1px solid var(--gray-5);
    border-radius: 18px;
    background: var(--gray-7);
    resize: none;
    line-height: 20px;
    font-size: 14px;
    overflow-y: auto;
    -webkit-appearance: none;

    &:focus {
      background: var(--white);
      border-color: var(--primary-color);
    }
  }

  &-sendBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    height: 36px;
    border: none;
    border-radius: 18px;
    background-color: var(--primary-color);
    color: var(--white);
    font-size: 14px;
    line-height: 1;
    cursor: pointer;
    transition: all 0.2s;
    user-select: none;
    -webkit-appearance: none;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}

.S--focusing {
  .Composer {
    position: sticky;
    bottom: 0;
    z-index: 10;
  }
}
</style>
