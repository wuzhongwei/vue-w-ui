import type { App } from 'vue';
import Row from './src/row';
import Col from './src/col';
export { Row, Col };

export default {
  install(app: App): void {
    app.component(Row.name, Row);
    app.component(Col.name, Col);
  }
};
