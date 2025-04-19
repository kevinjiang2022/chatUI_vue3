<template>
  <div class="demo-page">
    <header class="page-header bg-white shadow-sm">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold">演示</h1>
        <p class="text-gray-3 mt-2">
          ChatUI Vue3 聊天组件演示
        </p>
      </div>
    </header>

    <div class="container mx-auto px-4 py-8">
      <div class="chat-container">
        <Chat
          :messages="messages.value"
          :isTyping="isTyping"
          :navbar="navbar"
          :quickReplies="quickReplies"
          :quickRepliesVisible="quickRepliesVisible"
          @send="handleSend"
          @quickReplyClick="handleQuickReplyClick"
        >
          <template #messageContent="{ message }">
            <Bubble :content="message.content.text" />
          </template>
        </Chat>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import Chat from '../components/Chat/index.vue';
import Bubble from '../components/Bubble/index.vue';
import { useMessages } from '../composables/useMessages';
import { useQuickReplies, QuickReplyItemProps } from '../composables/useQuickReplies';

const { messages, appendMsg } = useMessages([
  {
    type: 'text',
    content: { text: '你好，我是 ChatUI Vue3 智能助理，有什么可以帮助你的吗？' },
    createdAt: Date.now(),
  },
]);

const { quickReplies } = useQuickReplies([
  { name: '你好' },
  { name: '介绍一下自己' },
  { name: '你能做什么?' },
  { name: '帮我写代码', isNew: true },
]);

const isTyping = ref(false);
const quickRepliesVisible = ref(true);

const navbar = reactive({
  title: 'ChatUI Vue3 演示',
  leftContent: {
    icon: 'chevron-left',
    onClick: () => {
      window.history.back();
    },
  },
});

const handleSend = (type: string, text: string) => {
  if (type === 'text' && text.trim()) {
    // 添加用户消息
    appendMsg({
      type: 'text',
      content: { text },
      position: 'right',
    });

    // 显示机器人正在输入状态
    isTyping.value = true;

    // 模拟机器人回复
    setTimeout(() => {
      let replyText = '';
      
      if (text.includes('你好') || text.includes('嗨') || text.includes('hi')) {
        replyText = '你好！很高兴为你服务。有什么我可以帮助你的吗？';
      } else if (text.includes('介绍') || text.includes('自己')) {
        replyText = '我是 ChatUI Vue3 智能助理，基于阿里巴巴 ChatUI 的 Vue3 实现。我可以帮助你了解 ChatUI Vue3 的使用方法和特性。';
      } else if (text.includes('做什么') || text.includes('功能')) {
        replyText = 'ChatUI Vue3 提供了一系列用于构建对话式交互界面的组件，包括对话容器、消息气泡、输入框、快捷回复等。你可以使用这些组件快速构建聊天机器人、客服系统等应用。';
      } else if (text.includes('代码') || text.includes('示例')) {
        replyText = '以下是一个简单的示例代码：\n\n```vue\n<template>\n  <Chat\n    :messages="messages.value"\n    :isTyping="isTyping"\n    :navbar="navbar"\n    @send="handleSend"\n  >\n    <template #messageContent="{ message }">\n      <Bubble :content="message.content.text" />\n    </template>\n  </Chat>\n</template>\n```';
      } else {
        replyText = `你发送了: ${text}，但我不太理解你的意思。你可以尝试问我关于 ChatUI Vue3 的问题。`;
      }
      
      appendMsg({
        type: 'text',
        content: { text: replyText },
      });
      isTyping.value = false;
    }, 1000);
  }
};

const handleQuickReplyClick = (item: QuickReplyItemProps) => {
  handleSend('text', item.name);
  quickRepliesVisible.value = false;
};
</script>

<style scoped>
.demo-page {
  background-color: var(--gray-7);
  min-height: 100vh;
}

.page-header {
  border-bottom: 1px solid var(--gray-6);
}

.chat-container {
  max-width: 600px;
  height: 70vh;
  margin: 0 auto;
  border: 1px solid var(--gray-6);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--shadow-2);
}
</style>
