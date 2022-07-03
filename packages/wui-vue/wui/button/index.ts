import type { App } from 'vue';
import Button from './src/button';
import ButtonGroup from './src/button-group';

export { Button, ButtonGroup };

export default {
  install(app: App): void {
    app.component(Button.name, Button);
    app.component(ButtonGroup.name, ButtonGroup);
  },
};
