import { ref, watch } from 'vue';

export interface QuickReplyItemProps {
  name: string;
  icon?: string;
  isNew?: boolean;
  isHighlight?: boolean;
  [key: string]: any;
}

type QuickReplies = QuickReplyItemProps[];

export function useQuickReplies(initialState: QuickReplies = []) {
  const quickReplies = ref<QuickReplies>(initialState);
  const visible = ref(true);
  const savedRef = ref<QuickReplies>();
  const stashRef = ref<QuickReplies>();

  watch(quickReplies, (newVal) => {
    savedRef.value = newVal;
  });

  const prepend = (list: QuickReplies) => {
    quickReplies.value = [...list, ...quickReplies.value];
  };

  // prepend、replace 后立即 save 只会保存上一个状态
  // 因为 savedRef.value 的更新优先级最后，用 setTimeout 可解
  const save = () => {
    stashRef.value = savedRef.value;
  };

  const pop = () => {
    if (stashRef.value) {
      quickReplies.value = stashRef.value;
    }
  };

  const replace = (newReplies: QuickReplies) => {
    quickReplies.value = newReplies;
  };

  const setVisible = (isVisible: boolean) => {
    visible.value = isVisible;
  };

  return {
    quickReplies,
    prepend,
    replace,
    visible,
    setVisible,
    save,
    pop,
  };
}
