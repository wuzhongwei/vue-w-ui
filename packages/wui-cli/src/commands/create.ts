import * as inquirer from 'inquirer' // inquirer只有cjs格式
import { red } from 'kolorist'
import createComponent from '../share/create-component'
const CREATE_TYPES = ['component', 'lib-entry']
// 文档分类
const DOCS_CATEGORIES = ['通用', '导航', '反馈', '数据录入', '数据展示', '布局']
export async function onCreate(cmd = { type: '' }) {
  let {type} = cmd
  if (!type) {
    const reuslt = await inquirer.prompt([
      {
        name: 'type',
        type: 'list',
        message: '(必填)请选择创建类型:',
        choices: CREATE_TYPES,
        default: 0
      }
    ])
    type = reuslt.type
  }
  if (!CREATE_TYPES.includes(type)) {
    console.log(
      red(`当前类型仅支持：${CREATE_TYPES.join(', ')}，收到不在支持范围内的 "${type}"，请重新选择！`)
    )
    return onCreate()
  }

  try {
    switch (type) {
      case 'component':
        // 如果是组件，我们还需要收集一些信息
        const info = await inquirer.prompt([
          {
            name: 'name',
            type: 'input',
            message: '（必填）请输入组件 name ，将用作目录及文件名：',
            validate: (value: string) => {
              if (value.trim() === '') {
                return '组件 name 是必填项！'
              }
              return true
            }
          },
          {
            name: 'title',
            type: 'input',
            message: '（必填）请输入组件中文名称，将用作文档列表显示：',
            validate: (value: string) => {
              if (value.trim() === '') {
                return '组件名称是必填项！'
              }
              return true
            }
          },
          {
            name: 'category',
            type: 'list',
            message: '（必填）请选择组件分类，将用作文档列表分类：',
            choices: DOCS_CATEGORIES,
            default: 0
          }
        ])

        createComponent(info)
        break
      case 'lib-entry':
        createLibEntry()
        break
      default:
        break
    }
  } catch (e) {
    console.log(red('✖') + e.toString())
    process.exit(1)
  }
  console.log('type', type)
}

function createLibEntry() {
  console.log('create lib-entry file.')
}