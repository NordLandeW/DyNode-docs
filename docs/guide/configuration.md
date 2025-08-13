# 配置

本页面包含 DyNode 的配置说明。

所有 DyNode 的配置都在第一次启动并关闭后自动存储在文件 `config.json` 中。

:::tip
请在关闭 DyNode 的情况下修改 `config.json` 以使你的改动生效。
:::

## 基础配置

### analytics

* 类型：`true | false`
* 默认值：`true`

设置为 `false` 来完全关闭数据收集功能。

数据收集的范围请参见 [快速上手/下载 & 安装](getting-started.md)。

### fullscreen

* 类型：`true | false`
* 默认值：`false`

启动时是否为全屏模式。将会记录上一次 DyNode 时关闭的全屏状态。

### FPS

* 类型：`number`
* 默认值：屏幕刷新率

DyNode 运行的帧率。

### autosave

* 类型：`true | false`
* 默认值：`false`

是否开启自动保存。

### language

* 类型：`string`
* 默认值：`'zh-cn'`

DyNode 的显示语言。

### theme

* 类型：`number`
* 默认值：`false`

DyNode 的显示主题。

### autoupdate

* 类型：`true | false`
* 默认值：`true`

是否开启自动检查更新。

:::tip
最新的版本将会带来新的功能、错误修复以及性能改进，且 DyNode 目前仍不够稳定。我们不建议关闭此项。
:::

### simplify

* 类型：`true | false`
* 默认值：`false`

是否开启简化模式。

### graphics

#### graphics.AA

* 类型：`0 | 2 | 4 | 8`
* 默认值：`4`

抗锯齿倍数（2x/4x/8x）。若为 `0` 则不开启抗锯齿。

#### graphics.VSync

* 类型：`true | false`
* 默认值：`true`

是否开启垂直同步。

### dropAdjustError

* 类型：`real`
* 默认值：`0.12`

放置音符拖动调整音符宽度的触发阈值，以音符宽度为单位。


### offsetCorrection

* 类型：`real`
* 默认值：`2`
* 最小值：`0`

谱面导出时误差修正功能的修正范围，将相差时间在该范围内的音符以区间内的第一个音符为准进行对齐。单位为毫秒。

### autoSaveTime

* 类型：`real`
* 默认值：`180`
* 最小值：`1`

谱面自动保存的间隔时间。以秒为单位。

### FMOD_MP3_DELAY

* 类型：`number`
* 默认值：`0`

FMOD 播放 .mp3 格式文件时的延迟时间（以毫秒计）。详见 [校时](/guide/timing.html#mp3-与-wav-格式的延迟处理) 。

## 进阶配置

:::warning
除非必要，否则建议保持这些项目为默认值。
:::

### PROJECT_COMPRESSION_LEVEL

* 类型：`number`
* 默认值：`11`
* 最小值：`0`
* 最大值：`22`

项目所使用的 ZSTD 压缩算法等级。等级越高，项目文件越小，项目保存时间越长。在大多数情况下大于 `11` 的设置项不会对项目大小造成显著差异。

将该值设置为 `0` 时项目将以文本形式保存（不进行压缩）。

### VIDEO_UPDATE_FREQUENCY

* 类型：`number`
* 默认值：`60`

播放视频时所使用的刷新频率。以赫兹（Hz）为单位。

### ANNOUNCEMENT_MAX_LIMIT

* 类型：`number`
* 默认值：`7`

右下角提醒信息条数的最大限制值。超过限制值的提醒信息将被优先移除。

## 信息

:::danger
此项包含的配置皆为自动生成，在任何情况下你都不应当修改这些项目。
:::

### version

* 类型：`String`

自动生成，代表配置文件对应的 DyNode 版本。