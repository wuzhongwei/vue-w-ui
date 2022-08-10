import { upperFirst } from "../share/utis"
export default function createTest(name: string) {
  const compName = upperFirst(name)
  return `\
import { mount } from '@vue/test-utils'
import {${compName}} from '..'

describe('${compName}', () => {
  it('render', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <${compName}  />
        }
      }
    })
  })
})

`
}
