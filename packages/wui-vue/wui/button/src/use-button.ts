import { computed, inject } from 'vue'
import type { SetupContext } from 'vue'
import { ButtonProps, UseButtonReturnType, buttonGroupInjectionKey } from "./button-type";
import { useNamespace } from '../../shared/hooks/use-namespace';

export default function useButton (props: ButtonProps, ctx: SetupContext): UseButtonReturnType {
  const ns = useNamespace('button');
  // console.log('b', ns.b(), 'm', ns.m(props.type), 'e', ns.e('icon'), 'em', ns.em('cc', 'ddd'))
  // b w-button m w-button--danger e w-button__icon em w-button__cc--ddd is is-plain
  const buttonGroup = inject(buttonGroupInjectionKey, null)
  const buttonSize = computed(() => {
    return props.size || buttonGroup?.size.value
  })
  const buttonType = computed(() => {
    return props.type || buttonGroup?.type.value
  })
  const classes = computed(() => ({
    [ns.b()]: true,
    [ns.m(buttonSize.value)]: buttonSize.value,
    [ns.m(buttonType.value)]: buttonType.value,
    [ns.is('plain')]: props.plain,
    [ns.is('round')]: props.round,
    [ns.is('circle')]: props.circle,
    [ns.is('disabled')]: props.disabled,
    [ns.is('link')]: props.link,
    [ns.is('text')]: props.text,
    [ns.is('has-bg')]: props.bg,
    [ns.is('loading')]: props.loading
  }))
  
  const iconClass = computed(() => ({
    [ns.is('loading')]: props.loading
  }));

  return {
    classes,
    iconClass
  }
}