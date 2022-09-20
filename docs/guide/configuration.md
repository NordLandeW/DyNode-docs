# 配置

本页面包含 DyNode 的配置说明。

所有 DyNode 的配置都在第一次启动并关闭后自动存储在文件 `config.json` 中。

:::tip
在关闭游戏的状态下编辑 `config.json` 并保存后启动游戏来令改动生效。
:::

## 基础配置

### fullscreen

* 类型：`0 | 1`
* 默认值：`0`

启动时是否为全屏模式。将会记录上一次 DyNode 时关闭的全屏状态。

### resolutionW / resolutionH

* 类型：`number`
* 默认值：`1920` / `1080`

DyNode 的渲染分辨率。

:::info 注意
DyNode 目前没有对其它分辨率作出很好的支持。
:::

### FPS

* 类型：`number`
* 默认值：屏幕刷新率

DyNode 运行的帧率。

### autosave

* 类型：`0 | 1`
* 默认值：`0`

是否开启自动保存。

### language

* 类型：`string`
* 默认值：`'zh-cn'`

DyNode 的显示语言。

### theme

* 类型：`number`
* 默认值：`0`

DyNode 的显示主题。

### autoupdate

* 类型：`0 | 1`
* 默认值：`1`

是否开启自动检查更新。

:::tip
最新的版本将会带来新的功能、错误修复以及性能改进，且 DyNode 目前仍不够稳定。我们不建议关闭此项。
:::

## 进阶配置

:::warning
除非必要，否则建议保持这些项目为默认值。
:::

### FMOD_MP3_DELAY

* 类型：`number`
* 默认值：`60.0`

FMOD 播放 .mp3 格式文件时的延迟时间（以毫秒计）。详见 [校时](/guide/timing.html#mp3-与-wav-格式的延迟处理) 。

## 信息

:::danger
此项包含的配置皆为自动生成，在任何情况下你都不应当修改这些项目。
:::

### version

* 类型：`String`

自动生成，代表配置文件对应的 DyNode 版本。