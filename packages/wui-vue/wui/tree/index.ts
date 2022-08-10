import type { App } from 'vue';
import Tree from './src/tree';

export * from './src/tree-types';

export { Tree };

export default {
  install(app: App): void {
    app.component(Tree.name, Tree);
  }
};  
