import type { App } from 'vue'

import ButtonInstall, { Button } from './button'
import IconInstall, { Icon } from './icon'

const installs = [
	ButtonInstall,
  IconInstall
]

export {
	Button,
  Icon
}

export default {
  version: '1.0.0-rc.0',
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
