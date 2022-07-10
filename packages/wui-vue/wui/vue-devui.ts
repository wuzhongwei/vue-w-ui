import type { App } from 'vue'

import ButtonInstall, { Button } from './button'
import IconInstall, { Icon } from './icon'
import ContainerInstall, { Container, Header, Main } from './container'

const installs = [
	ButtonInstall,
  IconInstall,
  ContainerInstall
]

export {
	Button,
  Icon,
  Container,
  Header,
  Main
}

export default {
  version: '1.0.0-rc.0',
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
