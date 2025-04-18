import { ref } from 'vue';
import getRandomInt from '../utils/getRandomInt';

interface StartOptions {
  delay?: number;
  timeout?: number;
}

export function useTitleTyping() {
  const isTyping = ref(false);
  // 间断变化
  let timerRef: ReturnType<typeof setTimeout> | undefined;
  // 超时
  let timeoutRef: ReturnType<typeof setTimeout> | undefined;

  const after = ([min, max]: number[], cb: () => void) => {
    const ms = getRandomInt(min, max);
    timerRef = setTimeout(cb, ms);
  };

  const stop = () => {
    clearTimeout(timerRef);
    clearTimeout(timeoutRef);
    isTyping.value = false;
  };

  const start = ({ delay = 0, timeout }: StartOptions = {}) => {
    clearTimeout(timerRef);

    timerRef = setTimeout(() => {
      // delay 后开始
      isTyping.value = true;

      after([2500, 3500], () => {
        // 2.5-3.5s 后暂停
        isTyping.value = false;

        after([1000, 1800], () => {
          // 1-1.8s 后重新开始
          start();
        });
      });
    }, delay);

    if (timeout) {
      timeoutRef = setTimeout(() => {
        stop();
      }, timeout);
    }
  };

  return {
    isTyping,
    start,
    stop,
  };
}
