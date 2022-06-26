import { computed } from 'vue'
import type { SetupContext } from 'vue'
import { ButtonProps, UseButtonReturnType } from "./button-type";
import { useNamespace } from '../../shared/hooks/use-namespace';

export default function useButton (props: ButtonProps, ctx: SetupContext): UseButtonReturnType {
  const ns = useNamespace('button');
  // console.log('b', ns.b(), 'm', ns.m(props.type), 'e', ns.e('icon'), 'em', ns.em('cc', 'ddd'))
  // b w-button m w-button--danger e w-button__icon em w-button__cc--ddd is is-plain

  const classes = computed(() => ({
    [ns.b()]: true,
    [ns.m(props.type)]: true,
    [ns.is('is-plain')]: props.plain,
    [ns.is('is-round')]: props.round,
    [ns.is('is-circle')]: props.circle,
    [ns.is('is-disabled')]: props.disabled,
    [ns.is('is-link')]: props.link,
    [ns.is('is-text')]: props.text,
    [ns.is('is-has-bg')]: props.bg,
    [ns.is('is-loading')]: props.loading,
  }))
  
  const iconClass = computed(() => ({
    [ns.is('is-loading')]: props.loading
  }));

  return {
    classes,
    iconClass
  }
}