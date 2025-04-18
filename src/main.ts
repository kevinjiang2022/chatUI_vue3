import { createApp } from 'vue'
import App from './App.vue'
import './styles/index.scss'

// 创建SVG图标
const createIcons = () => {
  const iconScript = document.createElement('script');
  iconScript.innerHTML = `
    (function() {
      var svgSprite = '<svg><symbol id="icon-chevron-left" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></symbol><symbol id="icon-chevron-double-down" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path><path d="M7.41 15.59L12 20.17l4.59-4.58L18 17l-6 6-6-6 1.41-1.41z"></path></symbol><symbol id="icon-spinner" viewBox="0 0 24 24"><path d="M12 4V2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2v2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8z"></path></symbol></svg>';
      var div = document.createElement('div');
      div.style.display = 'none';
      div.innerHTML = svgSprite;
      document.body.insertBefore(div, document.body.firstChild);
    })();
  `;
  document.head.appendChild(iconScript);
};

// 创建图标
createIcons();

// 创建应用
const app = createApp(App);

// 挂载应用
app.mount('#app');
