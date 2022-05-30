import { defineConfig } from 'vite'
import vueJSX from '@vitejs/plugin-vue-jsx'
// import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: [{ find: '@wui', replacement: path.resolve(__dirname, '../wui') }], // vitepress里用
  // },
  plugins: [vueJSX()]
})
