<template>
  <div class="MessageContainer" ref="messagesRef" tabindex="-1">
    <div class="MessageContainer-before">
      <slot name="before"></slot>
    </div>
    <div class="MessageList" ref="scrollerRef" @scroll="handleScroll">
      <slot></slot>
      <Message v-if="isTyping" type="typing" id="typing" />
    </div>
    <BackBottom 
      v-if="showBackBottom" 
      :count="newCount" 
      @click="handleBackBottomClick" 
      @didMount="onBackBottomShow"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted, nextTick } from 'vue';
import Message from '../Message/index.vue';
import BackBottom from '../BackBottom/index.vue';
import { MessageProps } from '../../composables/useMessages';

export interface ScrollToEndOptions {
  animated?: boolean;
  force?: boolean;
}

export default defineComponent({
  name: 'MessageContainer',
  components: {
    Message,
    BackBottom,
  },
  props: {
    messages: {
      type: Array as () => MessageProps[],
      default: () => [],
    },
    isTyping: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['scroll', 'backBottomShow', 'backBottomClick'],
  setup(props, { emit, expose }) {
    const messagesRef = ref<HTMLDivElement | null>(null);
    const scrollerRef = ref<HTMLDivElement | null>(null);
    const showBackBottom = ref(false);
    const newCount = ref(0);

    const clearBackBottom = () => {
      newCount.value = 0;
      showBackBottom.value = false;
    };

    const isNearBottom = (el: HTMLElement, n: number) => {
      const offsetHeight = Math.max(el.offsetHeight, 600);
      const toBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
      return toBottom < offsetHeight * n;
    };

    const scrollToEnd = (opts?: ScrollToEndOptions) => {
      const scroller = scrollerRef.value;
      if (scroller) {
        if (!showBackBottom.value || (opts && opts.force)) {
          const animated = opts?.animated !== false;
          if (animated) {
            scroller.scrollTo({
              top: scroller.scrollHeight,
              behavior: 'smooth',
            });
          } else {
            scroller.scrollTop = scroller.scrollHeight;
          }
          
          if (showBackBottom.value) {
            clearBackBottom();
          }
        }
      }
    };

    const handleBackBottomClick = () => {
      scrollToEnd({ animated: false, force: true });
      
      emit('backBottomClick');
    };

    const checkShowBottom = (el: HTMLElement) => {
      if (isNearBottom(el, 3)) {
        if (newCount.value) {
          // 如果有新消息，离底部0.5屏-隐藏提示
          if (isNearBottom(el, 0.5)) {
            clearBackBottom();
          }
        } else {
          showBackBottom.value = false;
        }
      } else {
        // 3屏+显示回到底部
        showBackBottom.value = true;
      }
    };

    let scrollTimer: number | null = null;
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      
      // 使用节流函数处理滚动
      if (scrollTimer) {
        clearTimeout(scrollTimer);
      }
      
      scrollTimer = window.setTimeout(() => {
        checkShowBottom(target);
      }, 200);

      emit('scroll', e);
    };

    // 监听消息变化
    watch(() => props.messages, (newMessages, oldMessages) => {
      if (!newMessages.length) return;
      
      const lastMessage = newMessages[newMessages.length - 1];
      const scroller = scrollerRef.value;
      
      if (!scroller || !lastMessage || lastMessage.position === 'pop') {
        return;
      }

      nextTick(() => {
        if (lastMessage.position === 'right') {
          // 自己发的消息，强制滚动到底部
          scrollToEnd({ force: true });
        } else if (scroller && isNearBottom(scroller, 2)) {
          const animated = !!scroller.scrollTop;
          scrollToEnd({ animated, force: true });
        } else {
          newCount.value += 1;
          showBackBottom.value = true;
        }
      });
    }, { deep: true });

    // 监听打字状态变化
    watch(() => props.isTyping, () => {
      nextTick(() => {
        scrollToEnd();
      });
    });

    // 初始化时滚动到底部
    onMounted(() => {
      nextTick(() => {
        scrollToEnd();
      });
    });

    // 暴露方法给父组件
    expose({
      scrollToEnd,
    });

    return {
      messagesRef,
      scrollerRef,
      showBackBottom,
      newCount,
      handleScroll,
      handleBackBottomClick,
      onBackBottomShow: () => emit('backBottomShow'),
    };
  },
});
</script>

<style lang="scss">
.MessageContainer {
  position: relative;
  flex: 1;
  overflow: hidden;
  background: var(--gray-7);
}

.MessageList {
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 12px;
}

.MessageContainer-before {
  position: relative;
  z-index: 10;
}
</style>
