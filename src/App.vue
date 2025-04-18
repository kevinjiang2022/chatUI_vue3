<template>
  <div class="app-container">
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
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import Chat from './components/Chat/index.vue';
import Bubble from './components/Bubble/index.vue';
import { useMessages } from './composables/useMessages';
import { useQuickReplies, QuickReplyItemProps } from './composables/useQuickReplies';

export default defineComponent({
  name: 'App',
  components: {
    Chat,
    Bubble,
  },
  setup() {
    const { messages, appendMsg, setTyping } = useMessages([]);
    const { quickReplies, setVisible } = useQuickReplies([
      { name: '你好' },
      { name: '介绍一下自己' },
      { name: '你能做什么?' },
      { name: '帮我写代码', isNew: true },
    ]);
    
    const isTyping = ref(false);
    const quickRepliesVisible = ref(true);
    
    const navbar = reactive({
      title: '智能助理',
      leftContent: {
        icon: 'chevron-left',
        onClick: () => {
          alert('点击了返回按钮');
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
          appendMsg({
            type: 'text',
            content: { text: `你发送了: ${text}` },
          });
          isTyping.value = false;
        }, 1000);
      }
    };

    const handleQuickReplyClick = (item: QuickReplyItemProps) => {
      handleSend('text', item.name);
      quickRepliesVisible.value = false;
    };

    return {
      messages,
      isTyping,
      navbar,
      quickReplies,
      quickRepliesVisible,
      handleSend,
      handleQuickReplyClick,
    };
  },
});
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

#app {
  height: 100%;
}

.app-container {
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}

:root {
  --primary-color: #1890ff;
  --primary-color-hover: #40a9ff;
  --primary-color-active: #096dd9;
  --primary-color-bg: #e6f7ff;
  --primary-color-bg-active: #cce5ff;
  
  --gray-1: #000000;
  --gray-2: #333333;
  --gray-3: #666666;
  --gray-4: #999999;
  --gray-5: #cccccc;
  --gray-6: #e6e6e6;
  --gray-7: #f7f7f7;
  --white: #ffffff;
  
  --gutter: 20px;
  --msg-avatar-gap: 8px;
  --msg-gutter: 48px;
  --radius-md: 4px;
  --font-size-xs: 12px;
}
</style>
