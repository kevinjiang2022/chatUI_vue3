<template>
  <div class="main-layout">
    <!-- 顶部导航栏 -->
    <header class="header">
      <div class="container">
        <div class="header-content">
          <!-- Logo -->
          <div class="logo-container">
            <router-link to="/" class="logo">
              <span class="logo-text">ChatUI Vue3</span>
            </router-link>
          </div>

          <!-- 导航菜单 -->
          <nav class="nav-menu">
            <router-link to="/" class="nav-item" exact>首页</router-link>
            <router-link to="/components" class="nav-item">组件</router-link>
            <router-link to="/documentation" class="nav-item">文档</router-link>
            <router-link to="/demo" class="nav-item">演示</router-link>
            <a href="https://github.com/your-username/chatui-vue3" target="_blank" class="nav-item github-link">
              <i class="fab fa-github"></i>
              GitHub
            </a>
          </nav>

          <!-- 移动端菜单按钮 -->
          <div class="mobile-menu-button-container">
            <button @click="toggleMobileMenu" class="mobile-menu-button">
              <i class="fas" :class="mobileMenuOpen ? 'fa-times' : 'fa-bars'"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- 移动端菜单 -->
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <div class="container">
          <router-link to="/" class="mobile-nav-item" exact @click="closeMobileMenu">首页</router-link>
          <router-link to="/components" class="mobile-nav-item" @click="closeMobileMenu">组件</router-link>
          <router-link to="/documentation" class="mobile-nav-item" @click="closeMobileMenu">文档</router-link>
          <router-link to="/demo" class="mobile-nav-item" @click="closeMobileMenu">演示</router-link>
          <a href="https://github.com/your-username/chatui-vue3" target="_blank" class="mobile-nav-item">
            <i class="fab fa-github"></i>
            GitHub
          </a>
        </div>
      </div>
    </header>

    <!-- 主内容区 -->
    <main class="main-content">
      <router-view></router-view>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-info">
            <div class="logo-text">ChatUI Vue3</div>
            <p class="footer-description">
              基于阿里巴巴 ChatUI 的 Vue3 实现
            </p>
          </div>

          <div class="footer-links-container">
            <div class="footer-links-group">
              <h3 class="footer-links-title">资源</h3>
              <ul class="footer-links-list">
                <li><router-link to="/components" class="footer-link">组件</router-link></li>
                <li><router-link to="/documentation" class="footer-link">文档</router-link></li>
                <li><router-link to="/demo" class="footer-link">示例</router-link></li>
              </ul>
            </div>

            <div class="footer-links-group">
              <h3 class="footer-links-title">社区</h3>
              <ul class="footer-links-list">
                <li><a href="https://github.com/your-username/chatui-vue3" target="_blank" class="footer-link">GitHub</a></li>
                <li><a href="#" class="footer-link">交流群</a></li>
                <li><a href="#" class="footer-link">贡献指南</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-copyright">
          <p>© {{ new Date().getFullYear() }} ChatUI Vue3. 基于 <a href="https://github.com/alibaba/ChatUI" target="_blank" class="link">阿里巴巴 ChatUI</a> 的 Vue3 实现。</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* 顶部导航栏 */
.header {
  background-color: var(--white);
  border-bottom: 1px solid var(--gray-6);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, var(--brand-1), var(--brand-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.5px;
}

.nav-menu {
  display: none;
}

.nav-item {
  display: inline-flex;
  align-items: center;
  padding: 8px 16px;
  color: var(--gray-2);
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 8px;
  margin: 0 4px;
}

.nav-item:hover {
  color: var(--brand-1);
  background-color: var(--gray-7);
}

.nav-item.router-link-active,
.nav-item.router-link-exact-active {
  color: var(--brand-1);
  background-color: var(--brand-4);
}

.github-link {
  display: inline-flex;
  align-items: center;
}

.github-link i {
  margin-right: 6px;
  font-size: 18px;
}

.mobile-menu-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: var(--gray-7);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--gray-2);
}

.mobile-menu-button:hover {
  background-color: var(--brand-4);
  color: var(--brand-1);
}

.mobile-menu-button i {
  font-size: 18px;
}

.mobile-menu {
  background-color: var(--white);
  border-bottom: 1px solid var(--gray-6);
  padding: 10px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.mobile-nav-item {
  display: flex;
  align-items: center;
  padding: 12px 0;
  color: var(--gray-2);
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border-bottom: 1px solid var(--gray-6);
}

.mobile-nav-item:last-child {
  border-bottom: none;
}

.mobile-nav-item:hover {
  color: var(--brand-1);
}

.mobile-nav-item.router-link-active,
.mobile-nav-item.router-link-exact-active {
  color: var(--brand-1);
}

.mobile-nav-item i {
  margin-right: 10px;
  font-size: 18px;
}

/* 主内容区 */
.main-content {
  flex: 1;
}

/* 页脚 */
.footer {
  background-color: var(--white);
  border-top: 1px solid var(--gray-6);
  margin-top: 3rem;
  padding: 3rem 0;
}

.footer-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

.footer-info {
  margin-bottom: 2rem;
}

.footer-description {
  color: var(--gray-3);
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.footer-links-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-links-title {
  color: var(--gray-1);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.85rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.footer-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  color: var(--gray-3);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  display: inline-block;
  padding: 0.25rem 0;
}

.footer-link:hover {
  color: var(--brand-1);
  transform: translateX(3px);
}

.footer-copyright {
  padding-top: 1.5rem;
  border-top: 1px solid var(--gray-6);
  text-align: center;
  color: var(--gray-3);
  font-size: 0.875rem;
}

.link {
  color: var(--brand-1);
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
}

.link:hover {
  text-decoration: underline;
}

/* 响应式样式 */
@media (min-width: 768px) {
  .nav-menu {
    display: flex;
    gap: 0.5rem;
  }

  .mobile-menu-button-container {
    display: none;
  }

  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-info {
    margin-bottom: 0;
  }
}

/* 暗色模式适配 */
html[data-color-scheme="dark"] {
  .header {
    background-color: var(--gray-7);
    border-bottom-color: var(--gray-6);
  }
  
  .mobile-menu {
    background-color: var(--gray-7);
  }
  
  .footer {
    background-color: var(--gray-7);
    border-top-color: var(--gray-6);
  }
  
  .footer-copyright {
    border-top-color: var(--gray-6);
  }
}
</style>
