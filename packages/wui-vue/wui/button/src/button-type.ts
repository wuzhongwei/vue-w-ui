import type { PropType, ExtractPropTypes, ComputedRef, Component, InjectionKey, Ref } from 'vue'
import { Loading } from '@element-plus/icons-vue'
export type IButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
export type IButtonSize = '' | 'default' | 'small' | 'large';
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
  color: String,
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
    type: [String, Object, Function] as PropType<string | Component>
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: ''
  },
} as const

export const buttonGroupProps = {
  size: {
    type: String as PropType<IButtonSize>,
    default: ''
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
interface ButtonGroupInjection {
  size: Ref<IButtonSize>;
  type: Ref<IButtonType>;
}
export const buttonGroupInjectionKey: InjectionKey<ButtonGroupInjection> =
  Symbol('w-button-group');