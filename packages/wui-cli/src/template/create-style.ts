import { upperFirst } from "../share/utis"
export default function createStyle(name: string) {
  const propsTypeName = upperFirst(name) + 'Props'
  const propsName = name + 'Props'
  return `\
@use '../../styles-var/base.scss';
@use '../../styles-var/${name}.scss';


`
}
