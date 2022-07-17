import {ref, nextTick} from 'vue'
import { mount } from '@vue/test-utils'
import { Row, Col } from '..';

describe('Row', () => {
  it('create', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Row />
        }
      }
    })
    expect(wrapper.classes()).toContain('w-row')
  })

  it('gutter', () => {
    const wrapper = mount({
      setup () {
        return () => {
          return <Row gutter={20} />
        }
      }
    })
    const rowElm = wrapper.element as HTMLElement
    expect(rowElm.style.marginLeft).toEqual('-10px')
    expect(rowElm.style.marginRight).toEqual('-10px')
  })

  it('justify', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Row justify="end" />
        }
      }
    })
    expect(wrapper.classes()).toContain('is-justify-end')
  })

  it('align', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Row align='bottom' />
        }
      }
    })
    expect(wrapper.classes()).toContain('is-align-bottom')
  })  
})

describe('Col', () => {
  it('create', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Col />
        }
      }
    })
    expect(wrapper.classes()).toContain('w-col')
  })

  it('span', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Col span={12} />
        }
      }
    })
    expect(wrapper.classes()).toContain('w-col-12')
  })

  it('pull', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Col pull={3} span={12} />
        }
      }
    })
    expect(wrapper.classes()).toContain('w-col-pull-3')
  })

  it('push', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Col push={3} span={12} />
        }
      }
    })
    expect(wrapper.classes()).toContain('w-col-push-3')
  })

  it('gutter', () => {
    const wrapper = mount({
      setup() {
       return () => {
         return <Row gutter={20}>
           <Col span={12} ref="col"></Col>
         </Row>
       } 
      }
    })
    const colEle = wrapper.findComponent({ref: 'col'}).element as HTMLElement
    expect(colEle.style.paddingLeft === '10px').toBe(true)
    expect(colEle.style.paddingRight === '10px').toBe(true)
  })

  it('change gutter value', async() => {
    const outer = ref(20)

    const wrapper = mount({
      setup() {
        return () => {
          return <Row gutter={outer.value} ref="row"><Col span={12} ref="col"></Col></Row>
        }
      }
    })
    const rowElm = wrapper.findComponent({ref: 'row'}).element as HTMLElement
    const colElm = wrapper.findComponent({ref: 'col'}).element as HTMLElement

    expect(rowElm.style.marginLeft === '-10px').toBe(true)
    expect(rowElm.style.marginRight === '-10px').toBe(true)
    expect(colElm.style.paddingLeft === '10px').toBe(true)
    expect(colElm.style.paddingRight === '10px').toBe(true)

    outer.value = 40
    await nextTick()
    expect(rowElm.style.marginLeft === '-20px').toBe(true)
    expect(rowElm.style.marginRight === '-20px').toBe(true)
    expect(colElm.style.paddingLeft === '20px').toBe(true)
    expect(colElm.style.paddingRight === '20px').toBe(true)
  })

  it('responsive', () => {
    const wrapper = mount({
      setup() {
        return () => {
          return <Row gutter={20}>
            <Col ref="col" sm={{ span: 4, offset: 2 }} md={8} lg={{ span: 6, offset: 3 }}></Col>
          </Row>
        }
      }
    })
    const colElmClass = wrapper.findComponent({ref: 'col'}).classes()
    expect(colElmClass.includes('w-col-sm-4')).toBe(true)
    expect(colElmClass.includes('w-col-sm-offset-2')).toBe(true)
    expect(colElmClass.includes('w-col-md-8')).toBe(true)
    expect(colElmClass.includes('w-col-lg-6')).toBe(true)
    expect(colElmClass.includes('w-col-lg-offset-3')).toBe(true)
  })
})