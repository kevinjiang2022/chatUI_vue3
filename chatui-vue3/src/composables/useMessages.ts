import { ref, computed } from 'vue';
import { getRandomString } from '../utils';

export type MessageId = string;

export interface MessageProps {
  _id: MessageId;
  type: string;
  content: any;
  position?: 'left' | 'right' | 'center';
  hasTime?: boolean;
  createdAt?: number;
  [key: string]: any;
}

type MessageWithoutId = Omit<MessageProps, '_id'> & {
  _id?: MessageId;
};

const TIME_GAP = 5 * 60 * 1000;
let lastTs = 0;

const makeMsg = (msg: MessageWithoutId, id?: MessageId) => {
  const ts = msg.createdAt || Date.now();
  const hasTime = msg.hasTime || ts - lastTs > TIME_GAP;

  if (hasTime) {
    lastTs = ts;
  }

  return {
    ...msg,
    _id: msg._id || id || getRandomString(),
    createdAt: ts,
    position: msg.position || 'left',
    hasTime,
  };
};

export function useMessages(initialState: MessageWithoutId[] = []) {
  const initialMsgs = initialState.map((t) => makeMsg(t));
  const messages = ref<MessageProps[]>(initialMsgs);

  const prependMsgs = (msgs: MessageProps[]) => {
    messages.value = [...msgs, ...messages.value];
  };

  const updateMsg = (id: MessageId, msg: MessageWithoutId) => {
    messages.value = messages.value.map((t) => (t._id === id ? makeMsg(msg, id) : t));
  };

  const appendMsg = (msg: MessageWithoutId) => {
    const newMsg = makeMsg(msg);
    messages.value = [...messages.value, newMsg];
    return newMsg._id;
  };

  const deleteMsg = (id: MessageId) => {
    messages.value = messages.value.filter((t) => t._id !== id);
  };

  const resetList = (list: MessageProps[] = []) => {
    messages.value = list;
  };

  return {
    messages,
    prependMsgs,
    appendMsg,
    updateMsg,
    deleteMsg,
    resetList,
  };
}
