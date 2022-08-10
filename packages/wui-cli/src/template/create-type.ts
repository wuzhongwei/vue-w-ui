import { upperFirst } from "../share/utis"
export default function createType(name: string) {
  const propsTypeName = upperFirst(name) + 'Props'
  const propsName = name + 'Props'
  return `\
import type {ExtractPropTypes} from 'vue'
export const ${propsName} = {}
export type ${propsTypeName} = ExtractPropTypes<typeof ${propsName}>

`
}
