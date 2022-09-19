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
