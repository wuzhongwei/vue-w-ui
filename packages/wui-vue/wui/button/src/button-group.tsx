import { defineComponent, provide, toRef } from 'vue';
import { buttonGroupProps, ButtonGroupProps, buttonGroupInjectionKey } from './button-type';
import './button-group.scss';
import { useNamespace } from '../../shared/hooks/use-namespace';

export default defineComponent({
  name: 'WButtonGroup',
  props: buttonGroupProps,
  setup(props: ButtonGroupProps, { slots }) {
    const ns = useNamespace('button-group');

    provide(buttonGroupInjectionKey, {
      size: toRef(props, 'size'),
      type: toRef(props, 'type')
    })
    return () => {
      return (
        <div class={ns.b()}>{slots.default && slots.default()}</div>
      );
    };
  },
});
