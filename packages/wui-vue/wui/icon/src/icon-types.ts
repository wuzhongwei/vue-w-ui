import type {ExtractPropTypes, ComputedRef} from 'vue'
export const iconProps = {
  color: {
    type: String,
    default: ''
  },
  size: {
    type: [Number, String],
    default: ''
  }
}
export type IconProps = ExtractPropTypes<typeof iconProps>
export interface UseIconReturnType {
  classes: ComputedRef<{
    [key: string]: string | boolean
  }>;
}