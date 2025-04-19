import { ref, computed, watch } from 'vue';
import getRandomInt from '../utils/getRandomInt';

export interface Options {
  interval?: number;
  step?: number | number[];
  initialIndex?: number;
}

export function useTypewriter(content: string, options: Options = {}) {
  const { interval = 80, step = 1, initialIndex = 5 } = options;
  const length = content.length;

  const index = ref(initialIndex);
  
  const typedContent = computed(() => content.slice(0, index.value));
  const isTyping = computed(() => index.value < length);

  let timer: ReturnType<typeof setTimeout> | null = null;

  const startTyping = () => {
    if (index.value < length) {
      timer = setTimeout(() => {
        const currentStep = Array.isArray(step) ? getRandomInt(step[0], step[1]) : step;
        index.value += currentStep;
        startTyping();
      }, interval);
    }
  };

  // 开始打字效果
  startTyping();

  // 清理定时器
  const cleanup = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  return {
    typedContent,
    isTyping,
    cleanup,
  };
}
