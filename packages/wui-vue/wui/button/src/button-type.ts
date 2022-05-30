import type { PropType, ExtractPropTypes, ComputedRef } from 'vue'
export type IButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: ''
  }
}
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export interface UseButtonReturnType {
  classes: ComputedRef<{
    [key: string]: string | boolean
  }>;
}