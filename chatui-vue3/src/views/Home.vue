<template>
  <div class="home-page">
    <!-- Hero 区域 -->
    <section class="hero">
      <div class="container mx-auto px-4 py-20">
        <div class="flex flex-col items-center text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brand-1 to-brand-2 bg-clip-text text-transparent">
            ChatUI Vue3
          </h1>
          <p class="text-xl md:text-2xl text-gray-2 max-w-3xl mb-8">
            基于阿里巴巴ChatUI的Vue3实现，为开发者提供一套用于构建对话式交互界面的组件库
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button class="btn btn-primary text-lg px-8 py-3">快速开始</button>
            <button class="btn btn-outline text-lg px-8 py-3">查看文档</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 特性介绍 -->
    <section class="features bg-gray-7">
      <div class="container mx-auto px-4 py-20">
        <h2 class="text-3xl font-bold text-center mb-16">核心特性</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- 特性卡片 1 -->
          <div class="feature-card">
            <div class="icon-wrapper">
              <i class="icon icon-best-practice"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">最佳实践</h3>
            <p class="text-gray-3">
              基于阿里小蜜业务积累和打磨的对话式交互最佳实践，提供优质的用户体验
            </p>
          </div>
          
          <!-- 特性卡片 2 -->
          <div class="feature-card">
            <div class="icon-wrapper">
              <i class="icon icon-typescript"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">TypeScript</h3>
            <p class="text-gray-3">
              使用 TypeScript 开发，提供完整的类型定义文件，增强开发体验
            </p>
          </div>
          
          <!-- 特性卡片 3 -->
          <div class="feature-card">
            <div class="icon-wrapper">
              <i class="icon icon-responsive"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">响应式设计</h3>
            <p class="text-gray-3">
              响应式布局，在移动端和 PC 端都可以友好展现，提供一致的用户体验
            </p>
          </div>
          
          <!-- 特性卡片 4 -->
          <div class="feature-card">
            <div class="icon-wrapper">
              <i class="icon icon-theme"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">主题定制</h3>
            <p class="text-gray-3">
              支持灵活的样式定制，以满足业务和品牌上多样化的视觉需求
            </p>
          </div>
          
          <!-- 特性卡片 5 -->
          <div class="feature-card">
            <div class="icon-wrapper">
              <i class="icon icon-i18n"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">国际化</h3>
            <p class="text-gray-3">
              支持多语言和本土化特性，轻松适配不同地区的用户需求
            </p>
          </div>
          
          <!-- 特性卡片 6 -->
          <div class="feature-card">
            <div class="icon-wrapper">
              <i class="icon icon-composition"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">Composition API</h3>
            <p class="text-gray-3">
              基于 Vue3 的 Composition API 开发，提供更灵活的组件逻辑组织方式
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术架构 -->
    <section class="architecture">
      <div class="container mx-auto px-4 py-20">
        <h2 class="text-3xl font-bold text-center mb-16">技术架构</h2>
        <div class="flex flex-col md:flex-row items-center justify-between gap-12">
          <div class="md:w-1/2">
            <h3 class="text-2xl font-bold mb-4">组件化设计</h3>
            <p class="text-gray-3 mb-6">
              ChatUI Vue3 采用组件化设计，每个组件都是独立的，可以单独使用，也可以组合使用。组件之间通过 props 和 events 进行通信，保持了组件的独立性和可复用性。
            </p>
            <ul class="tech-list">
              <li><span class="tech-badge">Vue 3</span></li>
              <li><span class="tech-badge">TypeScript</span></li>
              <li><span class="tech-badge">Vite</span></li>
              <li><span class="tech-badge">SCSS</span></li>
              <li><span class="tech-badge">Composition API</span></li>
            </ul>
          </div>
          <div class="md:w-1/2">
            <div class="architecture-diagram">
              <!-- 这里放置架构图 -->
              <div class="arch-box arch-root">
                <span>Chat</span>
                <div class="arch-children">
                  <div class="arch-box">
                    <span>Navbar</span>
                  </div>
                  <div class="arch-box">
                    <span>MessageContainer</span>
                    <div class="arch-children">
                      <div class="arch-box">
                        <span>Message</span>
                      </div>
                      <div class="arch-box">
                        <span>Bubble</span>
                      </div>
                    </div>
                  </div>
                  <div class="arch-box">
                    <span>Composer</span>
                  </div>
                  <div class="arch-box">
                    <span>QuickReplies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 设计理念 -->
    <section class="design-philosophy bg-gray-7">
      <div class="container mx-auto px-4 py-20">
        <h2 class="text-3xl font-bold text-center mb-16">设计理念</h2>
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="md:w-1/2">
            <img src="/images/design-philosophy.svg" alt="设计理念" class="w-full rounded-lg shadow-lg">
          </div>
          <div class="md:w-1/2">
            <h3 class="text-2xl font-bold mb-4">以用户为中心的对话式交互</h3>
            <p class="text-gray-3 mb-4">
              ChatUI Vue3 的设计理念是以用户为中心，通过对话式交互提供自然、流畅的用户体验。我们注重以下几个方面：
            </p>
            <ul class="philosophy-list">
              <li>
                <strong>自然对话</strong>
                <p>模拟真实人类对话，提供自然、流畅的交互体验</p>
              </li>
              <li>
                <strong>视觉一致性</strong>
                <p>保持视觉设计的一致性，减少用户的认知负担</p>
              </li>
              <li>
                <strong>响应式反馈</strong>
                <p>提供及时的视觉反馈，增强用户的操作感知</p>
              </li>
              <li>
                <strong>易于定制</strong>
                <p>支持灵活的样式定制，满足不同品牌和业务需求</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 快速上手 -->
    <section class="quick-start">
      <div class="container mx-auto px-4 py-20">
        <h2 class="text-3xl font-bold text-center mb-16">快速上手</h2>
        <div class="max-w-3xl mx-auto">
          <div class="steps">
            <div class="step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3 class="text-xl font-bold mb-2">安装</h3>
                <div class="code-block">
                  <pre><code>npm install chatui-vue3</code></pre>
                </div>
              </div>
            </div>
            
            <div class="step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3 class="text-xl font-bold mb-2">引入组件</h3>
                <div class="code-block">
                  <pre><code>import { Chat, Bubble } from 'chatui-vue3'
import 'chatui-vue3/dist/index.css'</code></pre>
                </div>
              </div>
            </div>
            
            <div class="step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3 class="text-xl font-bold mb-2">使用组件</h3>
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
&lt;/template&gt;</code></pre>
                </div>
              </div>
            </div>
            
            <div class="step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h3 class="text-xl font-bold mb-2">配置逻辑</h3>
                <div class="code-block">
                  <pre><code>const { messages, appendMsg } = useMessages([]);
const isTyping = ref(false);

const handleSend = (type, text) => {
  if (type === 'text' && text.trim()) {
    appendMsg({
      type: 'text',
      content: { text },
      position: 'right',
    });
    
    isTyping.value = true;
    setTimeout(() => {
      appendMsg({
        type: 'text',
        content: { text: `回复: ${text}` },
      });
      isTyping.value = false;
    }, 1000);
  }
};</code></pre>
                </div>
              </div>
            </div>
          </div>
          
          <div class="text-center mt-12">
            <button class="btn btn-primary text-lg px-8 py-3">查看完整文档</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 社区与支持 -->
    <section class="community bg-gray-7">
      <div class="container mx-auto px-4 py-20">
        <h2 class="text-3xl font-bold text-center mb-16">社区与支持</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="community-card">
            <div class="icon-wrapper">
              <i class="icon icon-github"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">GitHub</h3>
            <p class="text-gray-3 mb-4">
              在 GitHub 上关注我们的项目，参与贡献，提交问题和建议。
            </p>
            <a href="#" class="link">访问 GitHub 仓库</a>
          </div>
          
          <div class="community-card">
            <div class="icon-wrapper">
              <i class="icon icon-docs"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">文档</h3>
            <p class="text-gray-3 mb-4">
              查阅详细的文档，了解组件的使用方法、API 和最佳实践。
            </p>
            <a href="#" class="link">查看文档</a>
          </div>
          
          <div class="community-card">
            <div class="icon-wrapper">
              <i class="icon icon-chat"></i>
            </div>
            <h3 class="text-xl font-bold mb-2">交流群</h3>
            <p class="text-gray-3 mb-4">
              加入我们的交流群，与其他开发者交流经验，获取帮助。
            </p>
            <a href="#" class="link">加入交流群</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
/* Hero 区域 */
.hero {
  background-color: var(--white);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -10%;
  right: -10%;
  width: 60%;
  height: 70%;
  background: linear-gradient(135deg, rgba(255, 98, 0, 0.05), rgba(255, 179, 0, 0.05));
  border-radius: 50%;
  z-index: 0;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -10%;
  left: -10%;
  width: 60%;
  height: 70%;
  background: linear-gradient(135deg, rgba(255, 179, 0, 0.05), rgba(255, 98, 0, 0.05));
  border-radius: 50%;
  z-index: 0;
}

.hero > div {
  position: relative;
  z-index: 1;
}

/* 按钮样式 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, var(--brand-1), var(--brand-2));
  color: white;
  border: none;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 98, 0, 0.2);
}

.btn-outline {
  background: transparent;
  color: var(--gray-1);
  border: 2px solid var(--gray-5);
}

.btn-outline:hover {
  border-color: var(--brand-1);
  color: var(--brand-1);
  transform: translateY(-2px);
}

/* 特性卡片 */
.feature-card {
  background-color: var(--white);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--brand-3), var(--brand-4));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

/* 技术架构 */
.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.tech-badge {
  display: inline-block;
  padding: 6px 12px;
  background-color: var(--brand-4);
  color: var(--brand-1);
  border-radius: 20px;
  font-weight: 500;
  font-size: 14px;
}

.architecture-diagram {
  background-color: var(--white);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.arch-box {
  border: 2px solid var(--brand-3);
  border-radius: 8px;
  padding: 12px;
  margin: 8px 0;
  background-color: var(--white);
  position: relative;
}

.arch-root {
  border-color: var(--brand-1);
  background-color: var(--brand-4);
}

.arch-children {
  margin-left: 24px;
  position: relative;
}

.arch-children::before {
  content: '';
  position: absolute;
  left: -12px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--brand-3);
}

/* 设计理念 */
.philosophy-list {
  list-style: none;
  padding: 0;
}

.philosophy-list li {
  margin-bottom: 16px;
  padding-left: 24px;
  position: relative;
}

.philosophy-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--brand-1);
}

.philosophy-list li strong {
  display: block;
  font-weight: 600;
  margin-bottom: 4px;
  color: var(--gray-1);
}

.philosophy-list li p {
  color: var(--gray-3);
  margin: 0;
}

/* 快速上手 */
.steps {
  position: relative;
}

.steps::before {
  content: '';
  position: absolute;
  left: 24px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: var(--gray-5);
}

.step {
  display: flex;
  margin-bottom: 32px;
  position: relative;
}

.step-number {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--brand-1), var(--brand-2));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  margin-right: 24px;
  z-index: 1;
}

.step-content {
  flex: 1;
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

/* 社区与支持 */
.community-card {
  background-color: var(--white);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
}

.community-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.community-card .icon-wrapper {
  margin: 0 auto 16px;
}

.link {
  color: var(--brand-1);
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
}

.link:hover {
  text-decoration: underline;
}
</style>
