import { computed } from 'vue'
import type { SetupContext } from 'vue'
import { IconProps, UseIconReturnType } from "./icon-types";
import { useNamespace } from '../../shared/hooks/use-namespace';

export default function useButton (props: IconProps, ctx: SetupContext): UseIconReturnType {
  const ns = useNamespace('icon');

  const classes = computed(() => ({
    [ns.b()]: true,
  }))
  return {
    classes
  }
}