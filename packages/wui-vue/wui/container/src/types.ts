import type {ExtractPropTypes, ComputedRef, PropType} from 'vue'
export type direction = 'horizontal' | 'vertical'
export const containerProps = {
  direction: {
    type: String as PropType<direction>
  }
}
export const asidedProps = {
  width: {
    type: String
  }
}
export const headerProps = {
  height: {
    type: String
  }
}
export const footerProps = {
  height: {
    type: String
  }
}
export type ContainerProps = ExtractPropTypes<typeof containerProps>
