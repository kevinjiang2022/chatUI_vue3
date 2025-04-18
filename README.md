# ChatUI Vue3

这是阿里巴巴ChatUI的Vue3版本，基于阿里巴巴的[ChatUI](https://github.com/alibaba/ChatUI)项目进行Vue3的重构实现。

## 特性

- 😎 **最佳实践**：基于阿里小蜜业务积累和打磨的对话式交互最佳实践
- 🛡 **TypeScript**：使用 TypeScript 开发，提供完整的类型定义文件
- 📱 **响应式**：响应式布局，在无线和 PC 端都可以友好展现
- 🎨 **主题**：支持灵活的样式定制，以满足业务和品牌上多样化的视觉需求
- 🌍 **国际化**：支持多语言和本土化特性

## 安装

```bash
npm install
npm run dev
```

## 快速开始

```vue
<template>
  <Chat
    :messages="messages.value"
    :isTyping="isTyping"
    :navbar="navbar"
    @send="handleSend"
  >
    <template #messageContent="{ message }">
      <Bubble :content="message.content.text" />
    </template>
  </Chat>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { Chat, Bubble, useMessages } from './components';

export default defineComponent({
  name: 'App',
  components: {
    Chat,
    Bubble,
  },
  setup() {
    const { messages, appendMsg, setTyping } = useMessages([]);
    const isTyping = ref(false);

    const navbar = reactive({
      title: '智能助理',
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

    return {
      messages,
      isTyping,
      navbar,
      handleSend,
    };
  },
});
</script>
```

## 组件

ChatUI Vue3 提供了以下组件：

- `Chat`: 聊天容器组件
- `Bubble`: 气泡组件
- `Message`: 消息组件
- `MessageContainer`: 消息容器组件
- `Composer`: 输入组件
- `QuickReplies`: 快捷回复组件
- `Navbar`: 导航栏组件
- `Avatar`: 头像组件
- `Button`: 按钮组件
- `Icon`: 图标组件
- 等等...

## Composables (Hooks)

ChatUI Vue3 提供了以下Composables：

- `useMessages`: 管理消息列表
- `useQuickReplies`: 管理快捷回复
- `useTitleTyping`: 标题打字效果
- `useTypewriter`: 打字机效果

## 自定义主题

ChatUI Vue3 使用 CSS 变量来定义主题，你可以通过覆盖这些变量来自定义主题：

```css
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
}
```

## 许可证

MIT