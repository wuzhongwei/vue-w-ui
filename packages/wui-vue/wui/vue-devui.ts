import type { App } from 'vue'

import ButtonInstall, { Button } from './button'
import IconInstall, { Icon } from './icon'
import ContainerInstall, { Container, Header, Main } from './container'
import RowInstall, { Row, Col } from './grid'

const installs = [
	ButtonInstall,
  IconInstall,
  ContainerInstall,
  RowInstall
]

export {
	Button,
  Icon,
  Container,
  Header,
  Main,
  Row,
  Col
}

export default {
  version: '1.0.0-rc.0',
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
