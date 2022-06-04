import { isString } from '@vue/shared'
import { isNumber } from '@vueuse/core'

export function addUnit(value: string | number, defaultUnit = 'px') {
  if (!value) return ''
  if (isString(value)) {
    return value
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`
  }
  console.warn('绑定值必须是字符串或数字')
}

export const isUndefined = (val: any): val is undefined => val === undefined 