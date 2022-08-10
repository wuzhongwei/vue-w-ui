import { defineComponent, SetupContext } from 'vue';
import { TreeProps, treeProps } from './tree-types'
import './tree.scss';
export default defineComponent({
  name: 'WTree',
  props: treeProps,
  setup (props: TreeProps, ctx: SetupContext) {
    return () => (
      <div>tree</div>
    );
  },
});

