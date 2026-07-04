---
home: true
title: Home
heroText: DyNode
bgImage: low-poly-grid-haikei.svg
bgImageDark: layered-waves-haikei.svg
bgImageStyle:
  background-attachment: fixed
tagline: "> Yet another Dynamix charting tool."
actions:
  - text: Getting Started
    link: guide/getting-started.html
    type: primary
  - text: Download
    link: "#download"
    type: secondary
  - text: Github Releases
    link: https://github.com/NordLandeW/DyNode/releases/latest
    type: secondary
heroImage: Icon.png
heroFullScreen: true
features:
  - title: Streamlined Editing Workflow
    icon: wand-magic-sparkles
    details: Simplify chart creation with drag-and-drop, multi-select, mirroring, and duplication.
    link: guide/edit
  - title: Timing Support
    icon: stopwatch
    details: Efficiently create variable-speed charts with ease and external tools.
    link: guide/timing
  - title: Centralized Project Management
    icon: folder
    details: Manage all chart information in a single file.
    link: guide/project
  - title: Start from Dynamaker
    icon: right-left
    details: Get started with DyNode using your experience from Dynamaker.
    link: guide/getting-started.html#from-dynamaker
  - title: Lightweight and Efficient
    icon: bolt
    details: Under 50MB in size, with fast loading, editing, importing, and exporting of various chart formats.
  - title: Sapphire Upgrading...
    icon: angles-up
    details: "DyNode is continuously being improved and developed: new features, fewer bugs, and faster performance."

footer: MIT Licensed | Copyright © 2025 NordLandeW
---

## 🚀 Installation and Usage

:::info Recommended System Requirements
* Operating System: Windows 10/11 (64-bit)
* GPU: Supports DirectX 11 (a dedicated graphics card is recommended)
:::

:::tip Beta Notice
DyNode is still in beta. We recommend avoiding very old versions of DyNode. You can also enable [auto‐saving](guide/edit.md#auto-saving-project) to preserve your progress as much as possible.

If you encounter many strange bugs in an older version, they have most likely been fixed in a newer version. DyNode is actively maintained, so if you still encounter unusual bugs in the new version, please feel free to provide feedback to the developers using any of the methods described below ❤
:::

:::info Data Collection
To help improve the development of DyNode, a minimal amount of anonymous data collection is enabled by default when installing DyNode.

For details on the scope and how to disable data collection, please see [Getting Started](guide/getting-started.md).
:::

Choose one of the methods on the homepage to download DyNode.

After downloading and extracting the compressed file, simply double-click `DyNode.exe` to run DyNode.

## ✨ Feedback / Help

:::tip Get help by connecting with other users!
You can provide feedback or ask for help via GitHub Issues or Discussions. Your input is valuable in improving DyNode!
:::

:::info I just want to know how to use Dynamaker!
Our documentation does not include detailed instructions on using or downloading Dynamaker 😢 However, you can find an English guide maintained by TLChicken [here](https://tlchicken.github.io/dynamaker-guide/), and you can download the Electron‐packaged version of Dynamaker‐modified from its [project page](https://github.com/jmakxd/dynamaker-modified). You can also use the web version of Dynamaker‐modified [here](https://dym.iorinn.moe/app/src).
:::

If you encounter any issues while using DyNode, please [submit an Issue](https://github.com/NordLandeW/DyNode/issues/new) or visit [Discussions](https://github.com/NordLandeW/DyNode/discussions) for help.

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

// Inject animatable structure: shine layer + content layer (state icon + label).
// VuePress may reuse or rebuild the same hero action during locale switches, so this can run repeatedly.
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

        // Keep the loading state visible for a moment to avoid flicker.
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
/* —— Download button state animations —— */
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

/* —— Theme: light blue -> purple, semi-transparent frosted glass —— */
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

/* Content layer: icon + label, cross-fades as a whole */
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

/* Disable transitions while measuring for accurate width readings */
.dyn-dl-btn.dyn-measuring,
.dyn-dl-btn.dyn-measuring * {
  transition: none !important;
}

/* State icon: spinner ring / check mark */
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

/* Loading: subtle shine sweep */
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

/* Done: soft glow pulse */
.dyn-dl-btn.is-done {
  animation: dyn-pulse 1s cubic-bezier(0.4, 0, 0.2, 1) 1;
}

/* Error: gentle head-shake */
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
