<template>
  <div class="demo-page">
    <header class="page-header">
      <div class="container">
        <h1 class="page-title">ChatUI Vue3 演示</h1>
        <p class="page-description">
          体验智能对话界面的交互效果
        </p>
      </div>
    </header>

    <div class="container">
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
      
      <div class="demo-instructions">
        <h2>使用说明</h2>
        <ul>
          <li>在输入框中输入消息并发送</li>
          <li>点击下方的快捷回复选项</li>
          <li>尝试以下关键词：<span class="keyword">你好</span>、<span class="keyword">介绍一下自己</span>、<span class="keyword">你能做什么</span>、<span class="keyword">帮我写代码</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import Chat from '../components/Chat/index.vue';
import Bubble from '../components/Bubble/index.vue';
import { useMessages } from '../composables/useMessages';
import { useQuickReplies, QuickReplyItemProps } from '../composables/useQuickReplies';

// 初始化消息列表
const { messages, appendMsg } = useMessages([]);

// 初始化快捷回复
const { quickReplies, setVisible } = useQuickReplies([
  { name: '你好' },
  { name: '介绍一下自己' },
  { name: '你能做什么?' },
  { name: '帮我写代码', isNew: true },
]);

const isTyping = ref(false);
const quickRepliesVisible = ref(true);

// 导航栏配置
const navbar = reactive({
  title: 'ChatUI Vue3 演示',
  leftContent: {
    icon: 'chevron-left',
    onClick: () => {
      window.history.back();
    },
  },
});

// 添加欢迎消息
onMounted(() => {
  setTimeout(() => {
    appendMsg({
      type: 'text',
      content: { text: '👋 你好，我是 ChatUI Vue3 智能助理，有什么可以帮助你的吗？' },
      createdAt: Date.now(),
    });
    
    setTimeout(() => {
      appendMsg({
        type: 'text',
        content: { text: '你可以点击下方的快捷回复，或者直接输入消息与我交流。' },
        createdAt: Date.now(),
      });
    }, 1000);
  }, 500);
});

// 处理发送消息
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
        replyText = 'ChatUI Vue3 提供了一系列用于构建对话式交互界面的组件，包括：\n\n• 对话容器\n• 消息气泡\n• 输入框\n• 快捷回复\n• 头像\n• 时间戳\n\n你可以使用这些组件快速构建聊天机器人、客服系统等应用。';
      } else if (text.includes('代码') || text.includes('示例')) {
        replyText = '以下是一个简单的示例代码：\n\n```vue\n<template>\n  <Chat\n    :messages="messages.value"\n    :isTyping="isTyping"\n    :navbar="navbar"\n    @send="handleSend"\n  >\n    <template #messageContent="{ message }">\n      <Bubble :content="message.content.text" />\n    </template>\n  </Chat>\n</template>\n```\n\n你可以在我们的文档中找到更多示例。';
      } else {
        replyText = `你发送了: "${text}"，但我不太理解你的意思。你可以尝试问我关于 ChatUI Vue3 的问题，或者使用下方的快捷回复。`;
      }
      
      appendMsg({
        type: 'text',
        content: { text: replyText },
      });
      isTyping.value = false;
      
      // 重新显示快捷回复
      setTimeout(() => {
        quickRepliesVisible.value = true;
      }, 1000);
    }, 1000);
  }
};

// 处理快捷回复点击
const handleQuickReplyClick = (item: QuickReplyItemProps) => {
  handleSend('text', item.name);
  quickRepliesVisible.value = false;
};
</script>

<style scoped>
.demo-page {
  background-color: var(--gray-7);
  min-height: 100vh;
  padding-bottom: 40px;
}

.page-header {
  background-color: var(--white);
  border-bottom: 1px solid var(--gray-6);
  padding: 30px 0;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.page-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--gray-1);
}

.page-description {
  font-size: 16px;
  color: var(--gray-3);
}

.chat-container {
  max-width: 600px;
  height: 500px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--gray-6);
}

.demo-instructions {
  max-width: 600px;
  margin: 30px auto 0;
  background-color: var(--white);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.demo-instructions h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: var(--gray-1);
}

.demo-instructions ul {
  padding-left: 20px;
  margin: 0;
}

.demo-instructions li {
  margin-bottom: 8px;
  color: var(--gray-2);
}

.keyword {
  display: inline-block;
  padding: 2px 8px;
  background-color: var(--brand-4);
  color: var(--brand-1);
  border-radius: 4px;
  margin: 0 2px;
  font-size: 14px;
}

@media (max-width: 768px) {
  .chat-container {
    height: 70vh;
    margin: 0 15px;
  }
  
  .demo-instructions {
    margin: 30px 15px 0;
  }
}
</style>
