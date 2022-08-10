import { mount } from '@vue/test-utils'
import {Tree} from '..'

describe('Tree', () => {
  it('render', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Tree  />
        }
      }
    })
  })
})

