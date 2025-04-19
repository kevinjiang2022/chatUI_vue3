<template>
  <div class="home-page">
    <!-- Hero 区域 -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            ChatUI Vue3
          </h1>
          <p class="hero-description">
            基于阿里巴巴ChatUI的Vue3实现，为开发者提供一套用于构建对话式交互界面的组件库
          </p>
          <div class="hero-buttons">
            <button class="btn btn-primary">快速开始</button>
            <button class="btn btn-outline">查看文档</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 特性介绍 -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">核心特性</h2>
        <div class="features-grid">
          <!-- 特性卡片 1 -->
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-check-circle"></i>
            </div>
            <h3 class="feature-title">最佳实践</h3>
            <p class="feature-desc">
              基于阿里小蜜业务积累和打磨的对话式交互最佳实践
            </p>
          </div>
          
          <!-- 特性卡片 2 -->
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-code"></i>
            </div>
            <h3 class="feature-title">TypeScript</h3>
            <p class="feature-desc">
              使用 TypeScript 开发，提供完整的类型定义文件
            </p>
          </div>
          
          <!-- 特性卡片 3 -->
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <h3 class="feature-title">响应式设计</h3>
            <p class="feature-desc">
              响应式布局，在移动端和 PC 端都可以友好展现
            </p>
          </div>
          
          <!-- 特性卡片 4 -->
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-paint-brush"></i>
            </div>
            <h3 class="feature-title">主题定制</h3>
            <p class="feature-desc">
              支持灵活的样式定制，满足不同品牌的视觉需求
            </p>
          </div>
          
          <!-- 特性卡片 5 -->
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-globe"></i>
            </div>
            <h3 class="feature-title">国际化</h3>
            <p class="feature-desc">
              支持多语言和本土化特性，适配不同地区的用户
            </p>
          </div>
          
          <!-- 特性卡片 6 -->
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-puzzle-piece"></i>
            </div>
            <h3 class="feature-title">Composition API</h3>
            <p class="feature-desc">
              基于 Vue3 的 Composition API 开发，提供更灵活的组件逻辑
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 快速上手 -->
    <section class="quick-start">
      <div class="container">
        <h2 class="section-title">快速上手</h2>
        <div class="steps-container">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3 class="step-title">安装</h3>
              <div class="code-block">
                <pre><code>npm install chatui-vue3</code></pre>
              </div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3 class="step-title">引入组件</h3>
              <div class="code-block">
                <pre><code>import { Chat, Bubble } from 'chatui-vue3'
import 'chatui-vue3/dist/index.css'</code></pre>
              </div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3 class="step-title">使用组件</h3>
              <div class="code-block">
                <pre><code>&lt;template&gt;
  &lt;Chat
    :messages="messages"
    :isTyping="isTyping"
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
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero 区域 */
.hero {
  padding: 80px 0;
  background-color: var(--white);
  text-align: center;
}

.hero-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--brand-1), var(--brand-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-size: 20px;
  color: var(--gray-2);
  max-width: 800px;
  margin: 0 auto 30px;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

/* 按钮样式 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
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

/* 特性部分 */
.features {
  padding: 80px 0;
  background-color: var(--gray-7);
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

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

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--brand-3), var(--brand-4));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: white;
  font-size: 24px;
}

.feature-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
}

.feature-desc {
  color: var(--gray-3);
}

/* 快速上手 */
.quick-start {
  padding: 80px 0;
  background-color: var(--white);
}

.steps-container {
  max-width: 800px;
  margin: 0 auto;
}

.step {
  display: flex;
  margin-bottom: 40px;
  position: relative;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--brand-1);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 20px;
  flex-shrink: 0;
}

.step-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
}

.code-block {
  background-color: var(--gray-7);
  border-radius: 8px;
  padding: 16px;
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
}

.code-block code {
  font-family: monospace;
  color: var(--gray-1);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }
  
  .hero-description {
    font-size: 18px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 300px;
  }
}
</style>
