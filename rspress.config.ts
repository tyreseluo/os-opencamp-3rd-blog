import * as path from 'path';
import { defineConfig } from 'rspress/config';
import alignImage from 'rspress-plugin-align-image';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '第三阶段笔记 - 2024 春夏季开源操作系统训练营',
  description: 'os-opencamp-3rd-blog',
  icon: '/rspress-icon.png',
  logo: {
    light: '/logo.png',
    dark: '/logo.png',
  },
  themeConfig: {
    outlineTitle: '本节大纲',
    prevPageText: '上一节',
    nextPageText: '下一节',
  },
});
