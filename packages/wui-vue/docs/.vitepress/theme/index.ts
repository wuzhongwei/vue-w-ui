import Theme from 'vitepress/dist/client/theme-default'
import { registerComponents } from './register-components.js'
import WUI from '../../../wui/vue-devui'
import './custom.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({app}) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    // 注册组件
    app.use(WUI)
    registerComponents(app)
  }
}