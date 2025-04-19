<template>
  <div class="components-page">
    <!-- 页面头部 -->
    <header class="page-header bg-white shadow-sm">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold">组件</h1>
        <p class="text-gray-3 mt-2">
          ChatUI Vue3 提供了一系列用于构建对话式交互界面的组件
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
                  placeholder="搜索组件..." 
                  class="w-full px-3 py-2 border border-gray-5 rounded-md focus:outline-none focus:border-brand-1"
                />
              </div>
              
              <nav class="components-nav">
                <div class="nav-group mb-4">
                  <h3 class="text-sm font-bold text-gray-2 uppercase mb-2">对话组件</h3>
                  <ul class="space-y-1">
                    <li><a href="#chat" class="nav-link active">Chat 对话容器</a></li>
                    <li><a href="#bubble" class="nav-link">Bubble 气泡</a></li>
                    <li><a href="#message" class="nav-link">Message 消息</a></li>
                    <li><a href="#typing" class="nav-link">Typing 输入中</a></li>
                    <li><a href="#quick-replies" class="nav-link">QuickReplies 快捷回复</a></li>
                  </ul>
                </div>
                
                <div class="nav-group mb-4">
                  <h3 class="text-sm font-bold text-gray-2 uppercase mb-2">基础组件</h3>
                  <ul class="space-y-1">
                    <li><a href="#button" class="nav-link">Button 按钮</a></li>
                    <li><a href="#avatar" class="nav-link">Avatar 头像</a></li>
                    <li><a href="#icon" class="nav-link">Icon 图标</a></li>
                    <li><a href="#composer" class="nav-link">Composer 输入框</a></li>
                  </ul>
                </div>
                
                <div class="nav-group">
                  <h3 class="text-sm font-bold text-gray-2 uppercase mb-2">功能组件</h3>
                  <ul class="space-y-1">
                    <li><a href="#time" class="nav-link">Time 时间</a></li>
                    <li><a href="#navbar" class="nav-link">Navbar 导航栏</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </aside>
        
        <!-- 主内容区 -->
        <main class="flex-1">
          <!-- 组件展示卡片 -->
          <section id="chat" class="component-section">
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
              <div class="component-header border-b border-gray-5 p-6">
                <h2 class="text-2xl font-bold">Chat 对话容器</h2>
                <p class="text-gray-3 mt-2">
                  Chat 组件是整个对话界面的容器，包含了导航栏、消息列表、输入框等组件。
                </p>
              </div>
              
              <div class="p-6">
                <!-- 组件预览 -->
                <div class="component-preview mb-8">
                  <div class="preview-header flex justify-between items-center mb-4">
                    <h3 class="text-lg font-bold">预览</h3>
                    <div class="preview-actions">
                      <button class="preview-btn">
                        <i class="icon icon-refresh"></i>
                        重置
                      </button>
                      <button class="preview-btn">
                        <i class="icon icon-code"></i>
                        查看代码
                      </button>
                    </div>
                  </div>
                  
                  <div class="preview-container border border-gray-5 rounded-lg overflow-hidden" style="height: 500px;">
                    <!-- 这里放置 Chat 组件的预览 -->
                    <div class="chat-demo">
                      <div class="chat-navbar">
                        <div class="navbar-title">智能助理</div>
                      </div>
                      <div class="chat-messages">
                        <div class="message left">
                          <div class="message-avatar"></div>
                          <div class="message-bubble">
                            你好，我是智能助理，有什么可以帮助你的吗？
                          </div>
                        </div>
                        <div class="message right">
                          <div class="message-bubble">
                            你好，我想了解一下 ChatUI Vue3。
                          </div>
                          <div class="message-avatar"></div>
                        </div>
                        <div class="message left">
                          <div class="message-avatar"></div>
                          <div class="message-bubble">
                            ChatUI Vue3 是基于阿里巴巴 ChatUI 的 Vue3 实现，提供了一系列用于构建对话式交互界面的组件。
                          </div>
                        </div>
                      </div>
                      <div class="chat-footer">
                        <div class="quick-replies">
                          <div class="quick-reply">了解更多</div>
                          <div class="quick-reply">如何使用</div>
                          <div class="quick-reply">查看文档</div>
                        </div>
                        <div class="chat-composer">
                          <div class="composer-input">请输入...</div>
                          <button class="composer-send-btn">发送</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 代码示例 -->
                <div class="code-example mb-8">
                  <h3 class="text-lg font-bold mb-4">代码示例</h3>
                  <div class="code-tabs">
                    <button class="code-tab active">基础用法</button>
                    <button class="code-tab">自定义导航栏</button>
                    <button class="code-tab">自定义消息</button>
                  </div>
                  <div class="code-block">
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
                </div>
                
                <!-- API 文档 -->
                <div class="api-docs">
                  <h3 class="text-lg font-bold mb-4">API</h3>
                  
                  <div class="mb-6">
                    <h4 class="text-md font-bold mb-2">Props</h4>
                    <div class="overflow-x-auto">
                      <table class="w-full api-table">
                        <thead>
                          <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>messages</td>
                            <td>消息列表</td>
                            <td>MessageProps[]</td>
                            <td>[]</td>
                          </tr>
                          <tr>
                            <td>isTyping</td>
                            <td>是否显示正在输入状态</td>
                            <td>boolean</td>
                            <td>false</td>
                          </tr>
                          <tr>
                            <td>navbar</td>
                            <td>导航栏配置</td>
                            <td>object</td>
                            <td>null</td>
                          </tr>
                          <tr>
                            <td>quickReplies</td>
                            <td>快捷回复列表</td>
                            <td>QuickReplyItemProps[]</td>
                            <td>[]</td>
                          </tr>
                          <tr>
                            <td>quickRepliesVisible</td>
                            <td>是否显示快捷回复</td>
                            <td>boolean</td>
                            <td>true</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div class="mb-6">
                    <h4 class="text-md font-bold mb-2">Events</h4>
                    <div class="overflow-x-auto">
                      <table class="w-full api-table">
                        <thead>
                          <tr>
                            <th>事件名</th>
                            <th>说明</th>
                            <th>回调参数</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>send</td>
                            <td>发送消息时触发</td>
                            <td>(type: string, text: string)</td>
                          </tr>
                          <tr>
                            <td>quickReplyClick</td>
                            <td>点击快捷回复时触发</td>
                            <td>(item: QuickReplyItemProps, index: number)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <h4 class="text-md font-bold mb-2">Slots</h4>
                    <div class="overflow-x-auto">
                      <table class="w-full api-table">
                        <thead>
                          <tr>
                            <th>插槽名</th>
                            <th>说明</th>
                            <th>作用域参数</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>navbar</td>
                            <td>自定义导航栏</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>messageContent</td>
                            <td>自定义消息内容</td>
                            <td>{ message: MessageProps }</td>
                          </tr>
                          <tr>
                            <td>beforeMessageList</td>
                            <td>在消息列表前插入内容</td>
                            <td>-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <!-- 更多组件卡片 -->
          <section id="bubble" class="component-section mt-8">
            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
              <div class="component-header border-b border-gray-5 p-6">
                <h2 class="text-2xl font-bold">Bubble 气泡</h2>
                <p class="text-gray-3 mt-2">
                  Bubble 组件用于展示消息内容，支持文本、图片、视频等多种类型。
                </p>
              </div>
              
              <div class="p-6">
                <!-- 组件预览 -->
                <div class="component-preview mb-8">
                  <div class="preview-header flex justify-between items-center mb-4">
                    <h3 class="text-lg font-bold">预览</h3>
                    <div class="preview-actions">
                      <button class="preview-btn">
                        <i class="icon icon-refresh"></i>
                        重置
                      </button>
                      <button class="preview-btn">
                        <i class="icon icon-code"></i>
                        查看代码
                      </button>
                    </div>
                  </div>
                  
                  <div class="preview-container border border-gray-5 rounded-lg p-6">
                    <!-- 这里放置 Bubble 组件的预览 -->
                    <div class="bubble-demo flex flex-col gap-4">
                      <div class="bubble left">
                        这是一条文本消息
                      </div>
                      <div class="bubble right">
                        这是一条用户发送的消息
                      </div>
                      <div class="bubble left">
                        这是一条<strong>富文本</strong>消息，支持 <a href="#">链接</a> 和其他格式
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- 代码示例 -->
                <div class="code-example mb-8">
                  <h3 class="text-lg font-bold mb-4">代码示例</h3>
                  <div class="code-tabs">
                    <button class="code-tab active">基础用法</button>
                    <button class="code-tab">富文本</button>
                  </div>
                  <div class="code-block">
                    <pre><code>&lt;template&gt;
  &lt;Bubble content="这是一条文本消息" /&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { Bubble } from 'chatui-vue3';
&lt;/script&gt;</code></pre>
                  </div>
                </div>
                
                <!-- API 文档 -->
                <div class="api-docs">
                  <h3 class="text-lg font-bold mb-4">API</h3>
                  
                  <div class="mb-6">
                    <h4 class="text-md font-bold mb-2">Props</h4>
                    <div class="overflow-x-auto">
                      <table class="w-full api-table">
                        <thead>
                          <tr>
                            <th>属性</th>
                            <th>说明</th>
                            <th>类型</th>
                            <th>默认值</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>content</td>
                            <td>气泡内容</td>
                            <td>string</td>
                            <td>-</td>
                          </tr>
                          <tr>
                            <td>type</td>
                            <td>气泡类型</td>
                            <td>string</td>
                            <td>'text'</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
.components-page {
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

/* 组件预览 */
.component-section {
  scroll-margin-top: 20px;
}

.preview-btn {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 4px;
  background-color: var(--gray-7);
  color: var(--gray-2);
  font-size: 14px;
  margin-left: 8px;
  transition: all 0.2s ease;
}

.preview-btn:hover {
  background-color: var(--gray-6);
  color: var(--gray-1);
}

/* 代码示例 */
.code-tabs {
  display: flex;
  border-bottom: 1px solid var(--gray-5);
  margin-bottom: 16px;
}

.code-tab {
  padding: 8px 16px;
  font-size: 14px;
  color: var(--gray-2);
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
}

.code-tab:hover {
  color: var(--gray-1);
}

.code-tab.active {
  color: var(--brand-1);
  border-bottom-color: var(--brand-1);
}

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

/* API 表格 */
.api-table {
  border-collapse: collapse;
  width: 100%;
}

.api-table th,
.api-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid var(--gray-6);
}

.api-table th {
  font-weight: 600;
  background-color: var(--gray-7);
}

/* 演示组件样式 */
.chat-demo {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--gray-7);
}

.chat-navbar {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  border-bottom: 1px solid var(--gray-6);
  padding: 0 16px;
}

.navbar-title {
  font-size: 16px;
  font-weight: 500;
}

.chat-messages {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
}

.message {
  display: flex;
  margin-bottom: 16px;
}

.message.left {
  align-items: flex-start;
}

.message.right {
  flex-direction: row-reverse;
  align-items: flex-start;
}

.message-avatar {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: var(--gray-5);
  margin: 0 8px;
}

.message-bubble {
  max-width: 70%;
  padding: 12px;
  border-radius: 12px;
  background-color: var(--white);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.message.right .message-bubble {
  background-color: var(--brand-3);
}

.chat-footer {
  padding: 8px 16px 16px;
  background-color: var(--white);
  border-top: 1px solid var(--gray-6);
}

.quick-replies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

.quick-reply {
  padding: 6px 12px;
  border-radius: 16px;
  background-color: var(--white);
  border: 1px solid var(--gray-5);
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.quick-reply:hover {
  border-color: var(--brand-1);
  color: var(--brand-1);
}

.chat-composer {
  display: flex;
  align-items: center;
  background-color: var(--gray-7);
  border-radius: 8px;
  padding: 8px 12px;
}

.composer-input {
  flex: 1;
  color: var(--gray-3);
}

.composer-send-btn {
  padding: 4px 12px;
  border-radius: 4px;
  background-color: var(--brand-1);
  color: white;
  font-size: 14px;
}

/* Bubble 演示 */
.bubble-demo {
  max-width: 400px;
  margin: 0 auto;
}

.bubble {
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.bubble.left {
  align-self: flex-start;
  background-color: var(--white);
}

.bubble.right {
  align-self: flex-end;
  background-color: var(--brand-3);
}
</style>
