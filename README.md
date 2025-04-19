<div align="center">
  <h1>ChatUI Vue3</h1>
  <p>基于阿里巴巴 ChatUI 的 Vue3 实现，为开发者提供一套用于构建对话式交互界面的组件库</p>
  <p>
    <a href="https://github.com/your-username/chatui-vue3/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/your-username/chatui-vue3" alt="license">
    </a>
    <a href="https://www.npmjs.com/package/chatui-vue3">
      <img src="https://img.shields.io/npm/v/chatui-vue3" alt="npm package">
    </a>
    <a href="https://www.npmjs.com/package/chatui-vue3">
      <img src="https://img.shields.io/npm/dm/chatui-vue3" alt="npm downloads">
    </a>
  </p>
  <p>
    <a href="https://chatui-vue3.example.com" target="_blank">
      <img src="https://img.shields.io/badge/Website-ChatUI%20Vue3-orange" alt="website">
    </a>
  </p>
</div>

## 简介

ChatUI Vue3 是基于阿里巴巴 ChatUI 的 Vue3 实现，提供了一系列用于构建对话式交互界面的组件。它使用 TypeScript 开发，提供完整的类型定义，支持响应式设计，在移动端和 PC 端都可以友好展现。

<p align="center">
  <a href="https://chatui-vue3.example.com" target="_blank">
    <img src="./public/preview.png" alt="ChatUI Vue3 预览" width="750">
    <br>
    <b>访问官网体验完整功能</b>
  </a>
</p>

## 特性

- 🚀 **最佳实践**：基于阿里小蜜业务积累和打磨的对话式交互最佳实践
- 💪 **TypeScript**：使用 TypeScript 开发，提供完整的类型定义文件
- 📱 **响应式设计**：响应式布局，在移动端和 PC 端都可以友好展现
- 🎨 **主题定制**：支持灵活的样式定制，满足不同品牌的视觉需求
- 🌍 **国际化**：支持多语言和本土化特性，适配不同地区的用户
- 🧩 **Composition API**：基于 Vue3 的 Composition API 开发，提供更灵活的组件逻辑

## 安装

```bash
npm install chatui-vue3
```

## 快速上手

```vue
<template>
  <Chat
    :messages="messages"
    :isTyping="isTyping"
    @send="handleSend"
  >
    <template #messageContent="{ message }">
      <Bubble :content="message.content.text" />
    </template>
  </Chat>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Chat, Bubble } from 'chatui-vue3';
import 'chatui-vue3/dist/index.css';
import { useMessages } from 'chatui-vue3';

const { messages, appendMsg } = useMessages([]);
const isTyping = ref(false);

const handleSend = (type, text) => {
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
</script>
```

## 组件列表

### 对话组件

| 组件名 | 描述 | 特点 |
| --- | --- | --- |
| `Chat` | 对话容器，整个聊天界面的容器组件 | 支持自定义导航栏、消息列表和输入区域 |
| `Bubble` | 气泡组件，用于展示消息内容 | 支持文本、图片、视频等多种内容类型，支持富文本 |
| `Message` | 消息组件，包含头像、气泡、时间等元素 | 支持左右对齐、状态显示和自定义样式 |
| `MessageContainer` | 消息列表容器，管理消息的渲染和滚动 | 支持虚拟列表、自动滚动和加载更多 |
| `Typing` | 输入中状态组件，表示对方正在输入 | 支持自定义动画和样式 |
| `QuickReplies` | 快捷回复组件，提供预设的回复选项 | 支持图标、文本和自定义样式 |

### 基础组件

| 组件名 | 描述 | 特点 |
| --- | --- | --- |
| `Button` | 按钮组件，提供多种样式和状态 | 支持主要、次要、文本按钮，支持图标和加载状态 |
| `Avatar` | 头像组件，支持图片和文字头像 | 支持圆形、方形和自定义大小 |
| `Icon` | 图标组件，提供常用图标 | 支持自定义大小、颜色和旋转动画 |
| `Composer` | 输入框组件，用于用户输入消息 | 支持文本输入、语音输入和自定义操作按钮 |

### 功能组件

| 组件名 | 描述 | 特点 |
| --- | --- | --- |
| `Time` | 时间组件，用于显示消息发送时间 | 支持多种时间格式和相对时间显示 |
| `Navbar` | 导航栏组件，显示在聊天界面顶部 | 支持标题、返回按钮和自定义操作按钮 |
| `BackBottom` | 回到底部组件，快速滚动到最新消息 | 支持自定义图标和显示条件 |
| `RichText` | 富文本组件，用于展示富文本内容 | 支持HTML、Markdown和自定义渲染 |
| `Divider` | 分割线组件，用于分隔不同内容区域 | 支持水平、垂直和自定义样式 |
| `Tooltip` | 提示气泡组件，用于显示辅助信息 | 支持多个方向和自定义触发方式 |

## 组合式函数

| 函数名 | 描述 | 特点 |
| --- | --- | --- |
| `useMessages` | 消息管理函数，提供消息的增删改查功能 | 支持消息分组、过滤和排序 |
| `useQuickReplies` | 快捷回复管理函数，管理快捷回复选项 | 支持动态更新和条件显示 |
| `useTitleTyping` | 标题打字效果函数，实现标题文字的打字机效果 | 支持自定义速度、延迟和循环模式 |
| `useTypewriter` | 打字机效果函数，实现文字的逐字显示效果 | 支持HTML标签、暂停和回滚效果 |
| `useTheme` | 主题管理函数，管理应用的主题样式 | 支持明暗模式切换和自定义主题色 |
| `useScroll` | 滚动管理函数，管理元素的滚动行为 | 支持平滑滚动、虚拟滚动和滚动事件 |

## 文档与示例

访问 [ChatUI Vue3 官网](https://chatui-vue3.example.com) 查看完整文档和示例。

### 快速导航

- [组件文档](https://chatui-vue3.example.com/components)
- [交互示例](https://chatui-vue3.example.com/demo)
- [开发指南](https://chatui-vue3.example.com/documentation)
- [设计规范](https://chatui-vue3.example.com/design)

## 贡献

欢迎提交 Pull Request 或创建 Issue 来帮助改进这个项目。

### 如何贡献

1. Fork 这个仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的改动 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 使用案例

ChatUI Vue3 适用于各种需要对话式交互的场景，包括：

- 智能客服系统
- 聊天机器人
- 在线咨询平台
- 教育辅导系统
- 健康咨询应用
- 社交媒体聊天功能

## 许可证

[MIT](./LICENSE)

---

<p align="center">由 <a href="https://chatui-vue3.example.com">团队名称</a> 开发和维护</p>
<p align="center">
  <a href="https://chatui-vue3.example.com/demo" target="_blank">立即体验</a> |
  <a href="https://chatui-vue3.example.com/components" target="_blank">浏览组件</a> |
  <a href="https://github.com/your-username/chatui-vue3/issues" target="_blank">反馈问题</a>
</p>
