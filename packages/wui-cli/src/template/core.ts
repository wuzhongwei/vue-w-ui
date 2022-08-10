import { upperFirst } from "../share/utis"

export default function genCoreTemplate(name: string) {
  const compName = 'W' + upperFirst(name)
  const propsTypeName = upperFirst(name) + 'Props'
  const propsName = name + 'Props'
  const propsFileName = name + '-types'
  return `\
import { defineComponent, SetupContext } from 'vue';
import { ${propsTypeName}, ${propsName} } from './${propsFileName}'
import './${name}.scss';
export default defineComponent({
  name: '${compName}',
  props: ${name}Props,
  setup (props: ${propsTypeName}, ctx: SetupContext) {
    return () => (
      <div>${name}</div>
    );
  },
});

`
}
