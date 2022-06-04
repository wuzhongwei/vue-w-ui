import type { App } from 'vue';
import Icon from './src/icon';

export * from './src/icon-types';

export { Icon };

export default {
  install(app: App): void {
    app.component(Icon.name, Icon);
  }
};
