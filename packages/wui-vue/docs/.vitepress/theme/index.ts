import Theme from 'vitepress/dist/client/theme-default'
import { registerComponents } from './register-components.js'
import WUI from '../../../wui/vue-devui'

export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({app}) {
    // 注册组件
    app.use(WUI)
    registerComponents(app)
  }
}