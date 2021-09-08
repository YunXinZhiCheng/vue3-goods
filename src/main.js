import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入Vant样式
import 'vant/lib/index.css'
// 导入Vant组件：按需引入 轮播图 懒加载 徽标
import { Swipe, SwipeItem, Lazyload, Badge } from 'vant'

createApp(App)
  .use(store)
  .use(router)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload, {
    loading: require('./assets/images/default.png'),
  })
  .use(Badge)
  .mount('#app')
