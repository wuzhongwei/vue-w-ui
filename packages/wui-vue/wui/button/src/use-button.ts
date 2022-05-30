import { computed } from 'vue'
import type { SetupContext } from 'vue'
import { ButtonProps, UseButtonReturnType } from "./button-type";
import { useNamespace } from '../../shared/hooks/use-namespace';

export default function useButton (props: ButtonProps, ctx: SetupContext): UseButtonReturnType {
  const ns = useNamespace('button');
  const classes = computed(() => ({
    [ns.b()]: true,
    [ns.m(props.type)]: true,
  }))
  return {
    classes
  }
}