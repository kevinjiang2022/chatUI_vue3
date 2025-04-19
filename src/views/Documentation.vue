<template>
  <div class="documentation-page">
    <!-- 页面头部 -->
    <header class="page-header bg-white shadow-sm">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold">文档</h1>
        <p class="text-gray-3 mt-2">
          了解如何使用 ChatUI Vue3 构建对话式交互界面
        </p>
      </div>
    </header>

    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- 侧边栏导航 -->
        <aside class="lg:w-64 flex-shrink-0">
          <div class="sticky top-4">
            <div class="bg-white rounded-lg shadow-sm p-4">
              <div class="mb-4">
                <input 
                  type="text" 
                  placeholder="搜索文档..." 
                  class="w-full px-3 py-2 border border-gray-5 rounded-md focus:outline-none focus:border-brand-1"
                />
              </div>
              
              <nav class="docs-nav">
                <div class="nav-group mb-4">
                  <h3 class="text-sm font-bold text-gray-2 uppercase mb-2">入门</h3>
                  <ul class="space-y-1">
                    <li><a href="#introduction" class="nav-link active">介绍</a></li>
                    <li><a href="#installation" class="nav-link">安装</a></li>
                    <li><a href="#quick-start" class="nav-link">快速开始</a></li>
                  </ul>
                </div>
                
                <div class="nav-group mb-4">
                  <h3 class="text-sm font-bold text-gray-2 uppercase mb-2">基础</h3>
                  <ul class="space-y-1">
                    <li><a href="#components" class="nav-link">组件</a></li>
                    <li><a href="#composables" class="nav-link">Composables</a></li>
                    <li><a href="#theming" class="nav-link">主题定制</a></li>
                  </ul>
                </div>
                
                <div class="nav-group mb-4">
                  <h3 class="text-sm font-bold text-gray-2 uppercase mb-2">进阶</h3>
                  <ul class="space-y-1">
                    <li><a href="#custom-components" class="nav-link">自定义组件</a></li>
                    <li><a href="#internationalization" class="nav-link">国际化</a></li>
                    <li><a href="#accessibility" class="nav-link">无障碍</a></li>
                  </ul>
                </div>
                
                <div class="nav-group">
                  <h3 class="text-sm font-bold text-gray-2 uppercase mb-2">其他</h3>
                  <ul class="space-y-1">
                    <li><a href="#faq" class="nav-link">常见问题</a></li>
                    <li><a href="#migration" class="nav-link">从 React 版本迁移</a></li>
                    <li><a href="#contributing" class="nav-link">贡献指南</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </aside>
        
        <!-- 主内容区 -->
        <main class="flex-1">
          <div class="bg-white rounded-lg shadow-sm p-6">
            <!-- 介绍 -->
            <section id="introduction" class="doc-section mb-12">
              <h2 class="text-2xl font-bold mb-4">介绍</h2>
              <p class="mb-4">
                ChatUI Vue3 是基于阿里巴巴 ChatUI 的 Vue3 实现，为开发者提供一套用于构建对话式交互界面的组件库。它基于 Vue3、TypeScript 和 Composition API 开发，保持了原始 ChatUI 的设计理念和交互模式。
              </p>
              <p class="mb-4">
                ChatUI Vue3 提供了一系列组件，包括对话容器、消息气泡、输入框、快捷回复等，可以帮助开发者快速构建对话式交互界面。同时，它还提供了一系列 Composables（组合式函数），用于管理消息列表、快捷回复等状态。
              </p>
              <p>
                ChatUI Vue3 的设计理念是以用户为中心，通过对话式交互提供自然、流畅的用户体验。它注重视觉设计的一致性，提供及时的视觉反馈，并支持灵活的样式定制，以满足不同品牌和业务需求。
              </p>
            </section>
            
            <!-- 安装 -->
            <section id="installation" class="doc-section mb-12">
              <h2 class="text-2xl font-bold mb-4">安装</h2>
              <p class="mb-4">
                你可以通过 npm 或 yarn 安装 ChatUI Vue3：
              </p>
              <div class="code-block mb-6">
                <pre><code>npm install chatui-vue3</code></pre>
              </div>
              <p class="mb-4">
                或者使用 yarn：
              </p>
              <div class="code-block">
                <pre><code>yarn add chatui-vue3</code></pre>
              </div>
            </section>
            
            <!-- 快速开始 -->
            <section id="quick-start" class="doc-section mb-12">
              <h2 class="text-2xl font-bold mb-4">快速开始</h2>
              <p class="mb-4">
                以下是一个简单的示例，展示了如何使用 ChatUI Vue3 构建一个对话界面：
              </p>
              <div class="code-block mb-6">
                <pre><code>&lt;template&gt;
  &lt;Chat
    :messages="messages.value"
    :isTyping="isTyping"
    :navbar="navbar"
    @send="handleSend"
  &gt;
    &lt;template #messageContent="{ message }"&gt;
      &lt;Bubble :content="message.content.text" /&gt;
    &lt;/template&gt;
  &lt;/Chat&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref, reactive } from 'vue';
import { Chat, Bubble } from 'chatui-vue3';
import { useMessages } from 'chatui-vue3';

const { messages, appendMsg } = useMessages([]);
const isTyping = ref(false);

const navbar = reactive({
  title: '智能助理',
});

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
&lt;/script&gt;</code></pre>
              </div>
              <p>
                在这个示例中，我们使用了 <code>Chat</code> 和 <code>Bubble</code> 组件，以及 <code>useMessages</code> 组合式函数。<code>Chat</code> 组件是整个对话界面的容器，包含了导航栏、消息列表、输入框等组件。<code>Bubble</code> 组件用于展示消息内容。<code>useMessages</code> 组合式函数用于管理消息列表。
              </p>
            </section>
            
            <!-- 组件 -->
            <section id="components" class="doc-section mb-12">
              <h2 class="text-2xl font-bold mb-4">组件</h2>
              <p class="mb-6">
                ChatUI Vue3 提供了以下组件：
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="component-card">
                  <h3 class="text-lg font-bold mb-2">Chat</h3>
                  <p class="text-gray-3">
                    对话容器组件，包含导航栏、消息列表、输入框等组件。
                  </p>
                </div>
                
                <div class="component-card">
                  <h3 class="text-lg font-bold mb-2">Bubble</h3>
                  <p class="text-gray-3">
                    气泡组件，用于展示消息内容。
                  </p>
                </div>
                
                <div class="component-card">
                  <h3 class="text-lg font-bold mb-2">Message</h3>
                  <p class="text-gray-3">
                    消息组件，包含头像、气泡、时间等元素。
                  </p>
                </div>
                
                <div class="component-card">
                  <h3 class="text-lg font-bold mb-2">MessageContainer</h3>
                  <p class="text-gray-3">
                    消息容器组件，用于展示消息列表。
                  </p>
                </div>
                
                <div class="component-card">
                  <h3 class="text-lg font-bold mb-2">Composer</h3>
                  <p class="text-gray-3">
                    输入组件，用于用户输入消息。
                  </p>
                </div>
                
                <div class="component-card">
                  <h3 class="text-lg font-bold mb-2">QuickReplies</h3>
                  <p class="text-gray-3">
                    快捷回复组件，用于展示快捷回复选项。
                  </p>
                </div>
                
                <div class="component-card">
                  <h3 class="text-lg font-bold mb-2">Navbar</h3>
                  <p class="text-gray-3">
                    导航栏组件，用于展示标题和操作按钮。
                  </p>
                </div>
                
                <div class="component-card">
                  <h3 class="text-lg font-bold mb-2">Avatar</h3>
                  <p class="text-gray-3">
                    头像组件，用于展示用户头像。
                  </p>
                </div>
              </div>
              
              <p>
                你可以在 <a href="#" class="link">组件文档</a> 中查看每个组件的详细用法和 API。
              </p>
            </section>
            
            <!-- Composables -->
            <section id="composables" class="doc-section mb-12">
              <h2 class="text-2xl font-bold mb-4">Composables</h2>
              <p class="mb-6">
                ChatUI Vue3 提供了以下 Composables（组合式函数）：
              </p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="component-card">
                  <h3 class="text-lg font-bold mb-2">useMessages</h3>
                  <p class="text-gray-3">
                    管理消息列表的组合式函数。
                  </p>
                </div>
                
                <div class="component-card">
                  <h3 class="text-lg font-bold mb-2">useQuickReplies</h3>
                  <p class="text-gray-3">
                    管理快捷回复的组合式函数。
                  </p>
                </div>
                
                <div class="component-card">
                  <h3 class="text-lg font-bold mb-2">useTitleTyping</h3>
                  <p class="text-gray-3">
                    实现标题打字效果的组合式函数。
                  </p>
                </div>
                
                <div class="component-card">
                  <h3 class="text-lg font-bold mb-2">useTypewriter</h3>
                  <p class="text-gray-3">
                    实现打字机效果的组合式函数。
                  </p>
                </div>
              </div>
              
              <p>
                以下是 <code>useMessages</code> 的使用示例：
              </p>
              <div class="code-block">
                <pre><code>import { useMessages } from 'chatui-vue3';

const { messages, appendMsg, updateMsg, deleteMsg, resetList } = useMessages([
  {
    type: 'text',
    content: { text: '你好，我是智能助理，有什么可以帮助你的吗？' },
    createdAt: Date.now(),
  },
]);

// 添加消息
appendMsg({
  type: 'text',
  content: { text: '你好，我想了解一下 ChatUI Vue3。' },
  position: 'right',
});

// 更新消息
updateMsg('msg-id', {
  content: { text: '更新后的消息内容' },
});

// 删除消息
deleteMsg('msg-id');

// 重置消息列表
resetList([]);</code></pre>
              </div>
            </section>
            
            <!-- 主题定制 -->
            <section id="theming" class="doc-section mb-12">
              <h2 class="text-2xl font-bold mb-4">主题定制</h2>
              <p class="mb-4">
                ChatUI Vue3 使用 CSS 变量来定义主题，你可以通过覆盖这些变量来自定义主题：
              </p>
              <div class="code-block mb-6">
                <pre><code>:root {
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
}</code></pre>
              </div>
              <p class="mb-4">
                你可以在全局样式文件中覆盖这些变量，或者在特定的组件中覆盖：
              </p>
              <div class="code-block">
                <pre><code>/* 全局样式文件 */
:root {
  --brand-1: #ff6200;
  --brand-2: #ffb300;
  --brand-3: #ffe0cc;
}

/* 特定组件中 */
.my-chat-container {
  --brand-1: #1890ff;
  --brand-2: #40a9ff;
  --brand-3: #e6f7ff;
}</code></pre>
              </div>
            </section>
            
            <!-- 自定义组件 -->
            <section id="custom-components" class="doc-section mb-12">
              <h2 class="text-2xl font-bold mb-4">自定义组件</h2>
              <p class="mb-4">
                ChatUI Vue3 支持自定义消息内容，你可以通过 <code>messageContent</code> 插槽来实现：
              </p>
              <div class="code-block mb-6">
                <pre><code>&lt;template&gt;
  &lt;Chat
    :messages="messages.value"
    :isTyping="isTyping"
    :navbar="navbar"
    @send="handleSend"
  &gt;
    &lt;template #messageContent="{ message }"&gt;
      &lt;!-- 根据消息类型渲染不同的内容 --&gt;
      &lt;template v-if="message.type === 'text'"&gt;
        &lt;Bubble :content="message.content.text" /&gt;
      &lt;/template&gt;
      &lt;template v-else-if="message.type === 'image'"&gt;
        &lt;ImageMessage :src="message.content.src" /&gt;
      &lt;/template&gt;
      &lt;template v-else-if="message.type === 'custom'"&gt;
        &lt;MyCustomMessage :data="message.content.data" /&gt;
      &lt;/template&gt;
    &lt;/template&gt;
  &lt;/Chat&gt;
&lt;/template&gt;</code></pre>
              </div>
              <p>
                你也可以创建自己的组件，继承 ChatUI Vue3 的样式和行为：
              </p>
              <div class="code-block">
                <pre><code>&lt;template&gt;
  &lt;div class="my-custom-message"&gt;
    &lt;!-- 自定义消息内容 --&gt;
    &lt;div class="custom-header"&gt;{{ title }}&lt;/div&gt;
    &lt;div class="custom-content"&gt;{{ content }}&lt;/div&gt;
    &lt;div class="custom-footer"&gt;
      &lt;button @click="handleAction"&gt;{{ actionText }}&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  actionText: {
    type: String,
    default: '确定',
  },
});

const emit = defineEmits(['action']);

const handleAction = () => {
  emit('action');
};
&lt;/script&gt;

&lt;style scoped&gt;
.my-custom-message {
  background-color: var(--white);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.custom-header {
  font-weight: bold;
  margin-bottom: 8px;
}

.custom-content {
  margin-bottom: 12px;
}

.custom-footer {
  display: flex;
  justify-content: flex-end;
}

.custom-footer button {
  background-color: var(--brand-1);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
}
&lt;/style&gt;</code></pre>
              </div>
            </section>
            
            <!-- 国际化 -->
            <section id="internationalization" class="doc-section mb-12">
              <h2 class="text-2xl font-bold mb-4">国际化</h2>
              <p class="mb-4">
                ChatUI Vue3 支持国际化，你可以通过配置来实现多语言支持：
              </p>
              <div class="code-block">
                <pre><code>// i18n.ts
export const messages = {
  'zh-CN': {
    send: '发送',
    typing: '正在输入...',
    placeholder: '请输入...',
  },
  'en-US': {
    send: 'Send',
    typing: 'Typing...',
    placeholder: 'Type a message...',
  },
};

// App.vue
&lt;template&gt;
  &lt;Chat
    :messages="messages.value"
    :isTyping="isTyping"
    :navbar="navbar"
    :locale="locale"
    @send="handleSend"
  &gt;
    &lt;template #messageContent="{ message }"&gt;
      &lt;Bubble :content="message.content.text" /&gt;
    &lt;/template&gt;
  &lt;/Chat&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref } from 'vue';
import { Chat, Bubble } from 'chatui-vue3';
import { messages } from './i18n';

const locale = ref('zh-CN');

// 切换语言
const toggleLocale = () => {
  locale.value = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN';
};
&lt;/script&gt;</code></pre>
              </div>
            </section>
            
            <!-- 常见问题 -->
            <section id="faq" class="doc-section">
              <h2 class="text-2xl font-bold mb-4">常见问题</h2>
              <div class="faq-list">
                <div class="faq-item mb-6">
                  <h3 class="text-lg font-bold mb-2">ChatUI Vue3 与原版 ChatUI 有什么区别？</h3>
                  <p>
                    ChatUI Vue3 是基于阿里巴巴 ChatUI 的 Vue3 实现，保持了原版 ChatUI 的设计理念和交互模式，但使用了 Vue3 的特性，如 Composition API、TypeScript 等。在组件 API 和样式上，两者基本保持一致，但在实现方式上有所不同。
                  </p>
                </div>
                
                <div class="faq-item mb-6">
                  <h3 class="text-lg font-bold mb-2">如何自定义消息类型？</h3>
                  <p>
                    你可以通过 <code>messageContent</code> 插槽来自定义消息内容，根据消息类型渲染不同的组件。详见 <a href="#custom-components" class="link">自定义组件</a> 部分。
                  </p>
                </div>
                
                <div class="faq-item mb-6">
                  <h3 class="text-lg font-bold mb-2">如何实现消息加载更多？</h3>
                  <p>
                    你可以使用 <code>MessageContainer</code> 组件的 <code>onRefresh</code> 事件来实现下拉加载更多消息：
                  </p>
                  <div class="code-block mt-2">
                    <pre><code>&lt;MessageContainer
  :messages="messages"
  :isTyping="isTyping"
  @refresh="handleRefresh"
&gt;
  &lt;!-- 消息内容 --&gt;
&lt;/MessageContainer&gt;

const handleRefresh = () => {
  // 加载更多历史消息
  loadMoreMessages().then((moreMessages) => {
    // 将新消息添加到消息列表前面
    messages.value = [...moreMessages, ...messages.value];
  });
};</code></pre>
                  </div>
                </div>
                
                <div class="faq-item">
                  <h3 class="text-lg font-bold mb-2">如何实现消息状态（发送中、发送成功、发送失败）？</h3>
                  <p>
                    你可以通过设置消息的 <code>status</code> 属性来实现消息状态：
                  </p>
                  <div class="code-block mt-2">
                    <pre><code>// 发送消息
const msgId = Date.now().toString();
appendMsg({
  _id: msgId,
  type: 'text',
  content: { text },
  position: 'right',
  status: 'sending',
});

// 模拟发送请求
sendMessage(text)
  .then(() => {
    // 发送成功
    updateMsg(msgId, { status: 'success' });
  })
  .catch(() => {
    // 发送失败
    updateMsg(msgId, { status: 'failed' });
  });</code></pre>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
.documentation-page {
  background-color: var(--gray-7);
  min-height: 100vh;
}

.page-header {
  border-bottom: 1px solid var(--gray-6);
}

/* 导航样式 */
.nav-link {
  display: block;
  padding: 8px 12px;
  border-radius: 4px;
  color: var(--gray-2);
  text-decoration: none;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background-color: var(--gray-7);
  color: var(--gray-1);
}

.nav-link.active {
  background-color: var(--brand-4);
  color: var(--brand-1);
  font-weight: 500;
}

/* 文档部分 */
.doc-section {
  scroll-margin-top: 20px;
}

/* 代码块 */
.code-block {
  background-color: var(--gray-1);
  border-radius: 8px;
  padding: 16px;
  overflow: auto;
}

.code-block pre {
  margin: 0;
}

.code-block code {
  color: var(--white);
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  font-size: 14px;
  line-height: 1.5;
}

/* 组件卡片 */
.component-card {
  background-color: var(--white);
  border-radius: 8px;
  padding: 16px;
  border: 1px solid var(--gray-6);
  transition: all 0.2s ease;
}

.component-card:hover {
  border-color: var(--brand-1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* 链接 */
.link {
  color: var(--brand-1);
  text-decoration: none;
  transition: all 0.2s ease;
}

.link:hover {
  text-decoration: underline;
}

/* FAQ 样式 */
.faq-item h3 {
  position: relative;
  padding-left: 20px;
}

.faq-item h3::before {
  content: 'Q:';
  position: absolute;
  left: 0;
  color: var(--brand-1);
  font-weight: bold;
}
</style>
