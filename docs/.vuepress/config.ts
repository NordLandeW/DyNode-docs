import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  locales: {
    "/": {
      lang: "zh-CN",
      title: "DyNode",
      description: "另一个 Dynamix 谱面编辑器",
    },
  },
  title: "DyNode",
  description: "Yet another dynamix chart tool.",
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type:'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type:'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
  ],
  theme: hopeTheme({
    plugins: {
      mdEnhance: {
        imageMark: true,
        imageSize: true,
        katex: true,
        align: true,
        container: true,
      },
    },
    hostname: "https://dyn-docs.iorinn.moe",

    navbar: [
      {
        text: "主页",
        link: "/",
      },
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "快捷键",
        link: "/shortcuts",
      },
      {
        text: "常见问题",
        link: "/FAQ",
      },
    ],

    repo: "NagaseIori/DyNode",

    sidebar: {
      "/guide": [
        "/guide/index.md",
        "/guide/getting-started.md",
        "/guide/project.md",
        "/guide/timing.md",
        "/guide/edit.md",
        "/guide/import.md",
        "/guide/export.md",
        "/guide/configuration.md",
        "/guide/file-formats.md",
      ],
    },

    docsRepo: "NagaseIori/DyNode-docs",
    docsDir: "docs/",
    iconAssets: "iconfont",
  }),
});
