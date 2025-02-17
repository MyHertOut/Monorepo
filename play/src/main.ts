import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Icon from  '@guan-chun/components/icon';
import '@guan-chun/themechalk/src/index.scss';

const plugin = [
  Icon
]

const app = createApp(App)

plugin.forEach(plugin => {
  app.use(plugin) // 将组件注册到全局app中, 可以直接使用
})

app.mount('#app')
