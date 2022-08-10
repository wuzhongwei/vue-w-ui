import { ensureDirSync, writeFileSync, removeSync } from 'fs-extra'
import { WriteFileOptions } from 'fs'
import { resolve } from 'path'
import { lightBlue, lightGreen } from 'kolorist'
import genCoreTemplate from '../template/core'
import createIndex from '../template/create-index'
import createTest from '../template/create-test'
import createType from '../template/create-type'
import createStyle from '../template/create-style'
import createDocDemo from '../template/create-doc-demo'
import createDM from '../template/create-md'
const WRITE_FILE_OPTIONS: WriteFileOptions = { encoding: 'utf-8' }
export type ComponentMeta = {
  name: string
  title: string
  category: string
}

export default function createComponent(meta: ComponentMeta) {
  // 拼接组件目录
  const componentDir = resolve('../wui-vue/wui', meta.name)
  const scssDir = resolve('../wui-vue/wui/styles-var')
  removeSync(componentDir)
  // // 其他核心文件：组件源文件、类型文件、样式文件
  const testtsDir = resolve(componentDir, '__tests__')
  const demoDir = resolve(componentDir, 'demo')
  const srcDir = resolve(componentDir, 'src')

  ensureDirSync(testtsDir)
  ensureDirSync(demoDir)
  ensureDirSync(srcDir)

  console.log(
    lightGreen(
      `✔ 组件 "${meta.name}" 目录创建成功`
    )
  )
  console.log(lightBlue(`✈ 组件目录地址: ${componentDir}`))
  // 创建组件核心文件：组件文件，类型文件，样式文件
  // 组件文件
  const coreFilePath = resolve(srcDir, meta.name) + '.tsx'
  const createIndexPath = resolve(componentDir, 'index') + '.ts'
  const createTestPath = resolve(testtsDir, `${meta.name}.test`) + '.tsx'
  const createTypePath = resolve(srcDir, `${meta.name}-types`) + '.ts'
  const createStylePath = resolve(srcDir, `${meta.name}`) + '.scss'
  const createScssPath = resolve(scssDir, `${meta.name}`) + '.scss'
  const createDocDemoPath = resolve(demoDir, 'demo') + '.vue'
  const createDMPathUS = resolve(demoDir, 'index.en-US') + '.md'
  const createDMPathCN = resolve(demoDir, 'index.zh-CN') + '.md'
  writeFileSync(coreFilePath, genCoreTemplate(meta.name), WRITE_FILE_OPTIONS)
  writeFileSync(createTestPath, createTest(meta.name), WRITE_FILE_OPTIONS)
  writeFileSync(createIndexPath, createIndex(meta.name), WRITE_FILE_OPTIONS)
  writeFileSync(createTypePath, createType(meta.name), WRITE_FILE_OPTIONS)
  writeFileSync(createStylePath, createStyle(meta.name), WRITE_FILE_OPTIONS)
  writeFileSync(createScssPath, '', WRITE_FILE_OPTIONS)
  writeFileSync(createDocDemoPath, createDocDemo(meta.name), WRITE_FILE_OPTIONS)
  writeFileSync(createDMPathUS, createDM(meta.name), WRITE_FILE_OPTIONS)
  writeFileSync(createDMPathCN, createDM(meta.name), WRITE_FILE_OPTIONS)
}