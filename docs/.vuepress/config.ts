import { defineUserConfig } from "vuepress";
import { hopeTheme, pwa } from "vuepress-theme-hope";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  shouldPrefetch: false,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "DyNode",
      description: "另一个 Dynamix 谱面编辑器",
    },
    "/en/": {
      lang: "en-US",
      title: "DyNode",
      description: "Yet another Dynamix charting tool",
    },
  },
  title: "DyNode",
  description: "Yet another Dynamix charting tool.",
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
    markdown: {
      align: true,
      math: true,

      // 启用 figure
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      mark: true,
      // 启用图片大小
      imgSize: true,
    },
    plugins: {
      docsearch: {
        appId: "PX9VNWSCXQ",
        apiKey: "efdef4a898675ea367912de9d00bc6f2",
        indexName: "dyn-iorinn",
      },
      pwa: {
        maxSize: 1024768,
        maxImageSize: 1024768,
        cacheImage: true,
        update: "hint",
      },
      icon: {
        assets: "fontawesome",
      },
    },
    hostname: "https://dyn.iorinn.moe",
    locales: {
      "/": {
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
      },

      "/en/": {
        navbar: [
          {
            text: "Home",
            link: "/en/",
          },
          {
            text: "Guide",
            link: "/en/guide/",
          },
          {
            text: "Shortcuts",
            link: "/en/shortcuts",
          },
          {
            text: "FAQ",
            link: "/en/FAQ",
          },
          {
            text: "Changelog",
            link: "/en/changelog",
          },
          {
            text: "About",
            link: "/en/about",
          },
        ],
      },
    },

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
      "/en/guide": [
        "/en/guide/index.md",
        "/en/guide/getting-started.md",
        "/en/guide/project.md",
        "/en/guide/timing.md",
        "/en/guide/edit.md",
        "/en/guide/import.md",
        "/en/guide/export.md",
        "/en/guide/advanced-edit.md",
        "/en/guide/configuration.md",
        "/en/guide/file-formats.md",
      ],
    },

    docsRepo: "NagaseIori/DyNode-docs",
    docsDir: "docs/",
  }),
});
