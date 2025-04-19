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
            <router-link to="/demo" class="btn btn-primary">
              <i class="fas fa-play-circle"></i>
              立即体验
            </router-link>
            <router-link to="/documentation" class="btn btn-outline">
              <i class="fas fa-book"></i>
              查看文档
            </router-link>
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
          
          <div class="cta-container">
            <router-link to="/components" class="btn btn-primary">
              <i class="fas fa-cubes"></i>
              浏览组件
            </router-link>
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
  padding: 100px 0;
  background-color: var(--white);
  text-align: center;
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

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--brand-1), var(--brand-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 20px;
  color: var(--gray-2);
  max-width: 800px;
  margin: 0 auto 30px;
  line-height: 1.6;
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
  text-decoration: none;
}

.btn i {
  margin-right: 8px;
  font-size: 18px;
}

.btn-primary {
  background: linear-gradient(135deg, var(--brand-1), var(--brand-2));
  color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(var(--brand-1-rgb), 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(var(--brand-1-rgb), 0.4);
}

.btn-primary:active {
  transform: translateY(1px);
  box-shadow: 0 2px 8px rgba(var(--brand-1-rgb), 0.2);
}

.btn-outline {
  background: transparent;
  color: var(--gray-1);
  border: 2px solid var(--gray-5);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
}

.btn-outline:hover {
  border-color: var(--brand-1);
  color: var(--brand-1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.btn-outline:active {
  transform: translateY(1px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
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
  color: var(--gray-1);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  background-color: var(--white);
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
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
  margin-bottom: 20px;
  color: var(--brand-1);
  font-size: 24px;
}

.feature-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  color: var(--gray-1);
}

.feature-desc {
  color: var(--gray-3);
  line-height: 1.6;
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
  background: linear-gradient(135deg, var(--brand-1), var(--brand-2));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 20px;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(var(--brand-1-rgb), 0.2);
}

.step-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  color: var(--gray-1);
}

.code-block {
  background-color: var(--gray-7);
  border-radius: 8px;
  padding: 16px;
  overflow-x: auto;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.05);
}

.code-block pre {
  margin: 0;
}

.code-block code {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
  color: var(--gray-1);
  font-size: 14px;
  line-height: 1.6;
}

.cta-container {
  text-align: center;
  margin-top: 40px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .hero {
    padding: 60px 0;
  }
  
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
  
  .section-title {
    font-size: 28px;
    margin-bottom: 30px;
  }
  
  .step {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .step-number {
    margin-bottom: 16px;
  }
}

/* 暗色模式适配 */
html[data-color-scheme="dark"] {
  .feature-card {
    background-color: var(--gray-6);
  }
  
  .feature-icon {
    background: linear-gradient(135deg, rgba(var(--brand-1-rgb), 0.2), rgba(var(--brand-2-rgb), 0.2));
  }
  
  .code-block {
    background-color: var(--gray-6);
  }
  
  .code-block code {
    color: var(--gray-2);
  }
}
</style>
