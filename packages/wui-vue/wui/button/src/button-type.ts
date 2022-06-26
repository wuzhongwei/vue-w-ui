import type { PropType, ExtractPropTypes, ComputedRef, Component } from 'vue'
import { Loading } from '@element-plus/icons-vue'
export type IButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
export type IButtonSize = 'lg' | 'md' | 'sm' | 'xs';
export type IButtonNativeType = 'button' | 'submit' | 'reset'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: ''
  },
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  disabled: Boolean,
  link: Boolean,
  text: Boolean,
  bg: Boolean,
  loading: Boolean,
  loadingIcon: {
    type: Object as PropType<Component>,
    default: () => Loading,
  },
  nativeType: {
    type: String as PropType<IButtonNativeType>,
    default: 'button'
  },
  icon: {
    type: Object as PropType<Component>
  }
} as const

export const buttonGroupProps = {
  size: {
    type: String as PropType<IButtonSize>,
    default: 'md'
  },
  type: {
    type: String as PropType<IButtonType>,
    default: ''
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>

export interface UseButtonReturnType {
  classes: ComputedRef<{
    [key: string]: string | boolean
  }>;
  iconClass: ComputedRef<{
    [key: string]: string | boolean
  }>;
}