import DefaultTheme from 'vitepress/theme';
import WUI from '../../../../wui/vue-devui';
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    app.use(WUI)
  },
};
