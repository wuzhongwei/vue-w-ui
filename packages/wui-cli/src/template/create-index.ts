import { upperFirst } from "../share/utis"
export default function createIndex(name: string) {
  const compName = upperFirst(name)
  return `\
import type { App } from 'vue';
import ${compName} from './src/${name}';

export * from './src/${name}-types';

export { ${compName} };

export default {
  install(app: App): void {
    app.component(${compName}.name, ${compName});
  }
};  
`
}
