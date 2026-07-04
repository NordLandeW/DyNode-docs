---
home: true
title: 主页
heroText: DyNode
bgImage: /low-poly-grid-haikei.svg
bgImageDark: /layered-waves-haikei.svg
bgImageStyle:
  background-attachment: fixed
tagline: "> 另一个 Dynamix 制谱工具。"
actions:
  - text: 快速上手
    link: /guide/getting-started.html
    type: primary
  - text: 下载
    link: "#download"
    type: secondary
  - text: Github Releases
    link: https://github.com/NordLandeW/DyNode/releases/latest
    type: secondary
heroImage: /Icon.png
heroFullScreen: true
features:
  - title: 简化编辑流程
    icon: wand-magic-sparkles
    details: 使用拖拽、多选、镜像与复制等操作来简化谱面制作过程。 
    link: /guide/edit
  - title: Timing 支持
    icon: stopwatch
    details: 用便捷的方式并借助外部工具来高效制作变速谱面。
    link: /guide/timing
  - title: 集中的项目管理
    icon: folder
    details: 用一个文件来集中保存谱面的所有信息。
    link: /guide/project
  - title: 从 Dynamaker 开始
    icon: right-left
    details: 使用来自 Dynamaker 的经验与记忆上手 DyNode。
    link: /guide/getting-started.html#从-dynamaker-开始
  - title: 轻量而高效
    icon: bolt
    details: 不到50MB的程序包体积，高速加载、编辑、导入与导出各种格式的谱面。
  - title: Sapphire 升级中...
    icon: angles-up
    details: DyNode 仍在持续不断地改进与开发中：新功能，更少的错误，更快的性能。

footer: MIT Licensed | Copyright © 2025 NordLandeW
---


## 🚀 安装与使用
:::info 建议系统要求
* 操作系统：Windows 10/11 64位
* GPU：支持 DirectX 11 / 建议使用独立显卡
:::

:::tip Beta 提示
DyNode 仍处于测试阶段。我们建议避免使用过于老旧的 DyNode 版本，你同时可以启用 [自动保存](guide/edit.md#自动保存项目) 功能以最大限度的保留你的项目进度。

如果你使用旧版本遇到了很多奇怪的 bug，它们很可能在新版本里面已经被修复。DyNode 是一个目前仍在积极维护的项目，因此如果你在新版本里仍旧遇到了奇怪的 bug，我们十分欢迎你通过下面介绍的各种方式向开发者进行反馈 ❤
:::

:::info 数据收集
为了改进 DyNode 项目的开发过程，安装 DyNode 时默认启用了最低限度的匿名数据收集功能。

有关数据收集的详情、范围和关闭方法，请参见 [快速上手/下载 & 安装](guide/getting-started.md)。
:::

从主页的两种方式中选择一种方式来下载 DyNode 。

下载压缩文件并解压后，双击 `DyNode.exe` 即可运行 DyNode 。

## ✨ 问题反馈 / 求助

:::tip 与使用者交流来获取帮助！
QQ 交流/反馈群：347048298

你可以直接在此处交流/反馈/获取工具与最新消息/与开发者激情对线，也有可能通过测试版帮助直接改进DyNode！😇
:::

:::info 我其实只是想知道怎么使用 Dynamaker！
我们的文档里没有详细描写 Dynamaker 的使用方法与下载方式😢 不过你可以在 [这里](https://tlchicken.github.io/dynamaker-guide/) 找到由 TLChicken 维护的 Dynamaker 使用指南（英文），并前往由 Jmak 等人制作的 Dynamaker-modified 的 [项目页面](https://github.com/jmakxd/dynamaker-modified) 下载使用 Electron 打包分发的版本。你也可以在 [这里](https://dym.iorinn.moe/app/src) 使用 Dynamaker-modified 的网页分发版本。
:::

如果你在使用 DyNode 的过程中遇到了任何问题，可以 [提交 Issue](https://github.com/NordLandeW/DyNode/issues/new) 来反馈，或是前往 [Discussions](https://github.com/NordLandeW/DyNode/discussions) 进行求助。

如果不出意外，$\text{Iori}$ 会很快速地回答你的疑问与反馈喵。

*当然也没必要期待以光速回复。*

<script setup>
import { nextTick, onBeforeUnmount, onMounted, watch } from "vue";
import { useRoute } from "vuepress/client";

const JSON_URL = "https://d.g.iorinn.moe/dyn/info.json";
const BASE_URL = "https://d.g.iorinn.moe/dyn/";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const TEXTS = {
  zh: {
    idle: "下载",
    loading: "正在获取…",
    done: "下载已开始",
    error: "获取失败，请从 GitHub 下载",
  },
  en: {
    idle: "Download",
    loading: "Fetching…",
    done: "Download started",
    error: "Failed — use GitHub instead",
  },
};

const route = useRoute();

let btn = null;
let label = null;
let cleanupClick = null;
let busy = false;
let mounted = false;
let operationToken = 0;

const getTexts = () => (route.path.startsWith("/en/") ? TEXTS.en : TEXTS.zh);
const isCurrentOperation = (token) =>
  mounted && token === operationToken && btn !== null && label !== null;

function getOrCreateDownloadIframe() {
  let iframe = document.getElementById("__download_iframe__");
  if (!iframe) {
    iframe = document.createElement("iframe");
    iframe.id = "__download_iframe__";
    iframe.style.display = "none";
    document.body.appendChild(iframe);
  }
  return iframe;
}

async function getLatestWindowsUrl() {
  const resp = await fetch(JSON_URL, { cache: "no-store" });
  if (!resp.ok) throw new Error("fetch json failed");
  const data = await resp.json();
  const fileName = data?.artifacts?.windows;
  if (!fileName) throw new Error("invalid json: artifacts.windows missing");
  return BASE_URL + fileName;
}

function findDownloadButton() {
  const buttons = Array.from(
    document.querySelectorAll('a.vp-hero-action[href="#download"], a[href="#download"]'),
  );
  return buttons.find((element) => element.closest(".vp-hero-actions")) ?? buttons[0] ?? null;
}

// 注入可动画结构：微光层 + 内容层（状态图标 + 文字）。
// VuePress 切换语言时可能复用或重建同一个 hero action，因此这里允许重复调用并在结构缺失时重建。
function decorateButton(target) {
  target.classList.add("dyn-dl-btn");

  const existingLabel = target.querySelector(".dyn-dl-label");
  if (target.dataset.dynDlDecorated === "true" && existingLabel) return existingLabel;

  const text = target.textContent.trim() || getTexts().idle;
  target.dataset.dynDlDecorated = "true";
  target.textContent = "";

  const shine = document.createElement("span");
  shine.className = "dyn-dl-shine";

  const inner = document.createElement("span");
  inner.className = "dyn-dl-inner";

  const icon = document.createElement("span");
  icon.className = "dyn-dl-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.innerHTML =
    '<svg class="dyn-spin" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="42.4" stroke-dashoffset="30"/></svg>' +
    '<svg class="dyn-check" viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  const nextLabel = document.createElement("span");
  nextLabel.className = "dyn-dl-label";
  nextLabel.textContent = text;

  inner.appendChild(icon);
  inner.appendChild(nextLabel);
  target.appendChild(shine);
  target.appendChild(inner);

  return nextLabel;
}

function cancelCurrentOperation() {
  operationToken += 1;
  busy = false;
}

function applyIdleText() {
  if (!btn || !label) return;

  const { idle } = getTexts();
  btn.classList.remove("is-loading", "is-done", "is-error", "dyn-swapping", "dyn-measuring");
  btn.style.width = "";
  btn.setAttribute("aria-label", idle);
  label.textContent = idle;
}

function setState(token, state, text) {
  return new Promise((resolve) => {
    if (!isCurrentOperation(token)) {
      resolve(false);
      return;
    }

    btn.classList.add("dyn-swapping");

    window.setTimeout(() => {
      if (!isCurrentOperation(token)) {
        resolve(false);
        return;
      }

      const prev = btn.getBoundingClientRect().width;
      btn.classList.remove("is-loading", "is-done", "is-error");
      if (state) btn.classList.add(state);
      label.textContent = text;
      btn.setAttribute("aria-label", text);
      btn.classList.add("dyn-measuring");
      btn.style.width = "auto";
      const next = btn.getBoundingClientRect().width;
      btn.style.width = prev + "px";
      void btn.offsetWidth;
      btn.classList.remove("dyn-measuring");
      btn.style.width = next + "px";
      btn.classList.remove("dyn-swapping");

      window.setTimeout(() => {
        if (!isCurrentOperation(token)) {
          resolve(false);
          return;
        }

        if (!state) btn.style.width = "";
        resolve(true);
      }, 380);
    }, 200);
  });
}

async function bindDownloadButton() {
  await nextTick();
  if (!mounted) return;

  const nextBtn = findDownloadButton();
  if (!nextBtn) {
    cleanupClick?.();
    cleanupClick = null;
    btn = null;
    label = null;
    cancelCurrentOperation();
    return;
  }

  if (nextBtn !== btn) {
    cleanupClick?.();
    cleanupClick = null;
    btn = nextBtn;
    label = decorateButton(btn);

    const boundBtn = btn;
    const handleClick = async (e) => {
      e.preventDefault();

      if (busy) return;
      busy = true;

      const token = operationToken + 1;
      operationToken = token;
      const t0 = Date.now();
      const texts = getTexts();

      if (!(await setState(token, "is-loading", texts.loading))) return;

      try {
        const url = await getLatestWindowsUrl();
        if (!isCurrentOperation(token)) return;

        // 保证加载动画至少可见片刻，避免闪烁。
        await sleep(Math.max(0, 700 - (Date.now() - t0)));
        if (!isCurrentOperation(token)) return;

        const u = new URL(url);
        u.searchParams.set("_t", Date.now().toString());
        getOrCreateDownloadIframe().src = u.toString();

        if (!(await setState(token, "is-done", texts.done))) return;
        await sleep(2400);
      } catch (err) {
        if (!isCurrentOperation(token)) return;

        console.error(err);
        if (!(await setState(token, "is-error", texts.error))) return;
        await sleep(3000);
      } finally {
        if (isCurrentOperation(token)) {
          await setState(token, "", getTexts().idle);
          busy = false;
        }
      }
    };

    boundBtn.addEventListener("click", handleClick);
    cleanupClick = () => boundBtn.removeEventListener("click", handleClick);
  } else {
    label = decorateButton(btn);
  }

  cancelCurrentOperation();
  applyIdleText();
}

onMounted(() => {
  mounted = true;
  bindDownloadButton();
});

watch(
  () => route.path,
  () => {
    bindDownloadButton();
  },
  { flush: "post" },
);

onBeforeUnmount(() => {
  mounted = false;
  cleanupClick?.();
  cleanupClick = null;
  btn = null;
  label = null;
  cancelCurrentOperation();
});
</script>

<style>
/* —— 下载按钮状态动画 —— */
.dyn-dl-btn {
  position: relative;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  transition:
    color var(--vp-t-color),
    background var(--vp-t-color),
    transform var(--vp-t-transform),
    width 0.34s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.3s ease;
}
.dyn-dl-btn.is-loading {
  cursor: progress;
}

/* —— 主题配色：淡蓝 → 紫，半透明毛玻璃 —— */
.vp-hero-action[href="#download"] {
  color: #ffffff;
  background: linear-gradient(115deg, rgba(64, 156, 235, 0.6) 0%, rgba(112, 74, 235, 0.6) 100%);
  -webkit-backdrop-filter: blur(12px) saturate(1.5);
  backdrop-filter: blur(12px) saturate(1.5);
  text-shadow: 0 1px 8px rgba(60, 80, 160, 0.35);
  transition:
    color var(--vp-t-color),
    transform var(--vp-t-transform),
    width 0.34s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.3s ease,
    box-shadow 0.35s ease;
}
.vp-hero-action[href="#download"]:hover {
  background: linear-gradient(115deg, rgba(80, 172, 245, 0.72) 0%, rgba(128, 90, 245, 0.72) 100%);
  box-shadow: 0 0 24px rgba(140, 170, 255, 0.45);
}

/* 内容层：图标 + 文字，整体交叉淡入淡出 */
.dyn-dl-inner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  vertical-align: top;
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.dyn-dl-btn.dyn-swapping .dyn-dl-inner {
  opacity: 0;
  transform: translateY(0.3em);
}

/* 测量期间禁用一切过渡，保证宽度读数准确 */
.dyn-dl-btn.dyn-measuring,
.dyn-dl-btn.dyn-measuring * {
  transition: none !important;
}

/* 状态图标：加载环 / 对勾 */
.dyn-dl-icon {
  position: relative;
  display: none;
  flex: none;
  width: 1.05em;
  height: 1.05em;
  margin-right: 0.45em;
}
.dyn-dl-btn.is-loading .dyn-dl-icon,
.dyn-dl-btn.is-done .dyn-dl-icon {
  display: inline-flex;
}
.dyn-dl-icon svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.25s ease;
}
.dyn-dl-btn.is-loading .dyn-spin {
  opacity: 1;
  animation: dyn-rotate 0.9s linear infinite;
}
.dyn-dl-btn.is-done .dyn-check {
  opacity: 1;
}
.dyn-check path {
  stroke-dasharray: 24;
  stroke-dashoffset: 24;
}
.dyn-dl-btn.is-done .dyn-check path {
  animation: dyn-draw 0.45s cubic-bezier(0.65, 0, 0.35, 1) 0.1s forwards;
}

/* 加载中：微光缓缓扫过 */
.dyn-dl-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    transparent 30%,
    rgba(255, 255, 255, 0.2) 45%,
    rgba(255, 255, 255, 0.6) 50%,
    rgba(255, 255, 255, 0.2) 55%,
    transparent 70%
  );
  filter:
    drop-shadow(0 0 8px rgba(255, 255, 255, 0.7))
    drop-shadow(0 0 20px rgba(170, 200, 255, 0.55));
  transform: translateX(-100%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.dyn-dl-btn.is-loading .dyn-dl-shine {
  opacity: 1;
  animation: dyn-shimmer 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.15s infinite;
}

/* 完成：柔和光晕扩散 */
.dyn-dl-btn.is-done {
  animation: dyn-pulse 1s cubic-bezier(0.4, 0, 0.2, 1) 1;
}

/* 失败：轻微摇头 */
.dyn-dl-btn.is-error {
  animation: dyn-shake 0.4s ease 1;
}

@keyframes dyn-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes dyn-draw {
  to { stroke-dashoffset: 0; }
}
@keyframes dyn-shimmer {
  to { transform: translateX(100%); }
}
@keyframes dyn-pulse {
  0% { box-shadow: 0 0 0 0 color-mix(in srgb, currentColor 40%, transparent); }
  100% { box-shadow: 0 0 0 0.8em transparent; }
}
@keyframes dyn-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  50% { transform: translateX(3px); }
  75% { transform: translateX(-2px); }
}

@media (prefers-reduced-motion: reduce) {
  .dyn-dl-btn,
  .dyn-dl-shine,
  .dyn-dl-icon svg,
  .dyn-dl-inner,
  .dyn-check path {
    animation: none !important;
    transition: none !important;
  }
}
</style>
