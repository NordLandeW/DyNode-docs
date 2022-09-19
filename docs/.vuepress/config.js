import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";

export default defineUserConfig({
  lang: "zh-CN",
  title: "DyNode",
  description: "Yet another dynamix chart tool.",
  plugins: [
  ],
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "指南",
        link: "/guide",
      },
      {
        text: "快捷键",
        link: "/shortcuts",
      },
      {
        text: "FAQ",
        link: "/FAQ",
      },
    ],
    repo: "NagaseIori/DyNode",
    docsRepo: "NagaseIori/DyNode-docs",
    docsBranch: "main",
    docsDir: "docs",
    editLinkText: "在 Github 上编辑此页",
    sidebar: {
      "/guide": [
        {
          text: "指南",
          children: [
            "/guide/index.md",
            "/guide/getting-started.md",
            "/guide/project.md",
            "/guide/timing.md",
            "/guide/edit.md",
            "/guide/import.md",
            "/guide/export.md",
            "/guide/file-formats.md",
          ],
        },
      ],
    },
    contributorsText: '贡献者',
    lastUpdatedText: '最后更新',
    tip: '提示'
  }),
});
