import { upperFirst } from "../share/utis"
export default function createDM(name: string) {
  const propsTypeName = upperFirst(name)
  const propsName = name + 'Props'
  return `\
  ---
  map:
    # 映射到docs的路径
    path: /components/${name}
  ---
  
  # ${upperFirst(name)}
  
  这是一个简单的${upperFirst(name)}。
  
  ## 代码演示
  
  ### 基本用法
  <demo src="./demo.vue"
    language="vue"
    title="基本用法"
    desc="点击切换。">
  </demo>  

`
}
