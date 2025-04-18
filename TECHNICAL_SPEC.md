# ChatUI Vue3 技术规范

## 项目概述

ChatUI Vue3 是阿里巴巴 ChatUI 的 Vue3 版本实现，旨在为开发者提供一套用于构建聊天界面的组件库。本项目基于 Vue3、TypeScript 和 Composition API 开发，保持了原始 ChatUI 的设计理念和交互模式。

## 技术栈

- **Vue 3**: 核心框架
- **TypeScript**: 类型系统
- **Vite**: 构建工具
- **SCSS**: 样式预处理器
- **Composition API**: 组件逻辑组织方式

## 目录结构

```
src/
├── components/        # 组件目录
│   ├── Avatar/        # 头像组件
│   ├── BackBottom/    # 回到底部组件
│   ├── Bubble/        # 气泡组件
│   ├── Button/        # 按钮组件
│   ├── Chat/          # 聊天容器组件
│   ├── Composer/      # 输入组件
│   ├── Icon/          # 图标组件
│   ├── IconButton/    # 图标按钮组件
│   ├── Message/       # 消息组件
│   ├── MessageContainer/ # 消息容器组件
│   ├── Navbar/        # 导航栏组件
│   ├── QuickReplies/  # 快捷回复组件
│   └── Time/          # 时间组件
├── composables/       # 组合式函数
│   ├── useMessages.ts # 消息管理
│   ├── useQuickReplies.ts # 快捷回复管理
│   ├── useTitleTyping.ts # 标题打字效果
│   └── useTypewriter.ts # 打字机效果
├── styles/            # 样式文件
│   ├── index.scss     # 样式入口
│   ├── variables.scss # 变量定义
│   └── themes.scss    # 主题定义
├── utils/             # 工具函数
│   ├── index.ts       # 通用工具
│   └── ua.ts          # 用户代理检测
├── App.vue            # 应用入口组件
└── main.ts            # 应用入口文件
```

## 组件设计规范

### 组件结构

每个组件应遵循以下结构：

```vue
<template>
  <!-- 组件模板 -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentName',
  props: {
    // 组件属性
  },
  emits: [
    // 组件事件
  ],
  setup(props, { emit, expose }) {
    // 组件逻辑
    return {
      // 返回模板需要的数据和方法
    };
  },
});
</script>

<style lang="scss">
/* 组件样式 */
</style>
```

### 命名规范

- **组件名**: 使用 PascalCase，如 `MessageContainer`
- **文件名**: 使用 `index.vue` 作为组件的主文件
- **props**: 使用 camelCase，如 `quickReplies`
- **事件**: 使用 camelCase，如 `onQuickReplyClick`
- **CSS 类名**: 使用 BEM 命名规范，如 `.MessageContainer-inner`

### Props 定义

Props 应该使用 TypeScript 类型定义，并提供默认值和验证：

```typescript
props: {
  title: {
    type: String,
    required: true,
  },
  align: {
    type: String as PropType<'left' | 'center'>,
    default: 'center',
    validator: (value: string) => ['left', 'center'].includes(value),
  },
}
```

### 事件处理

事件应该在 `emits` 选项中声明，并在 `setup` 函数中使用 `emit` 触发：

```typescript
emits: ['click', 'focus'],
setup(props, { emit }) {
  const handleClick = (e: MouseEvent) => {
    emit('click', e);
  };
  
  return {
    handleClick,
  };
}
```

## 样式规范

### CSS 变量

使用 CSS 变量定义主题和样式：

```css
:root {
  --primary-color: #1890ff;
  --gray-1: #000000;
  /* 其他变量 */
}
```

### 响应式设计

组件应该支持响应式设计，适应不同屏幕尺寸：

```css
@media (min-width: 768px) {
  .Component {
    /* 桌面样式 */
  }
}
```

### 暗色模式

支持暗色模式：

```css
html[data-color-scheme="dark"] {
  --primary-color: #1890ff;
  --gray-1: #ffffff;
  /* 其他变量 */
}
```

## Composables 设计规范

Composables 应该是独立的、可重用的函数，遵循 Vue3 的 Composition API 设计原则：

```typescript
export function useFeature(initialValue: any) {
  const state = ref(initialValue);
  
  const updateState = (newValue: any) => {
    state.value = newValue;
  };
  
  return {
    state,
    updateState,
  };
}
```

## 性能优化

- 使用 `computed` 缓存计算结果
- 使用 `v-memo` 减少不必要的重渲染
- 使用 `shallowRef` 和 `shallowReactive` 减少深层响应式的开销
- 使用 `v-once` 渲染静态内容
- 使用 `defineAsyncComponent` 异步加载组件

## 可访问性

- 使用语义化的 HTML 标签
- 提供适当的 ARIA 属性
- 确保键盘可访问性
- 支持屏幕阅读器

## 国际化

使用 Vue I18n 或自定义的国际化解决方案，支持多语言：

```typescript
const messages = {
  'zh-CN': {
    send: '发送',
    placeholder: '请输入...',
  },
  'en-US': {
    send: 'Send',
    placeholder: 'Type a message...',
  },
};
```

## 测试规范

- **单元测试**: 使用 Vitest 测试组件和 Composables
- **组件测试**: 使用 Vue Test Utils 测试组件交互
- **端到端测试**: 使用 Cypress 测试完整的用户流程

## 文档规范

- 每个组件应该有详细的文档，包括 Props、Events、Slots 和示例
- 使用 JSDoc 注释代码
- 提供完整的 TypeScript 类型定义

## 版本控制

遵循语义化版本控制（Semantic Versioning）：

- **主版本号**: 不兼容的 API 变更
- **次版本号**: 向下兼容的功能性新增
- **修订号**: 向下兼容的问题修正

## 发布流程

1. 更新版本号
2. 生成变更日志
3. 构建生产版本
4. 发布到 npm
5. 更新文档

## 许可证

本项目采用 MIT 许可证。
