import { defineUserConfig } from "vuepress";
import { hopeTheme, pwa } from "vuepress-theme-hope";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";

export default defineUserConfig({
  shouldPrefetch: false,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "DyNode",
      description: "另一个 Dynamix 谱面编辑器",
    },
  },
  title: "DyNode",
  description: "Yet another dynamix charting tool.",
  plugins: [
    googleAnalyticsPlugin({
      id: "	G-GHC453BDJN",
    }),
  ],
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Noto+Sans+SC:100,300,400,500,700,900",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#da532c" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
  ],
  theme: hopeTheme({
    logo: "/Icon.png",
    plugins: {
      searchPro: {
        indexContent: false,
      },
      mdEnhance: {
        imgSize: true,
        katex: true,
        align: true,
        container: true,
      },
      pwa: {
        maxSize: 1024768,
        maxPicSize: 1024768,
        cachePic: true,
        update: "hint"
      }
    },
    hostname: "https://dyn.iorinn.moe",

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
      {
        text: "更新日志",
        link: "/changelog",
      },
      {
        text: "关于",
        link: "/about",
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
        "/guide/advanced-edit.md",
        "/guide/configuration.md",
        "/guide/file-formats.md",
      ],
    },

    docsRepo: "NagaseIori/DyNode-docs",
    docsDir: "docs/",
    iconAssets: "iconfont",
  }),
});
