# Configuration

This page contains the configuration instructions for DyNode.

All configurations of DyNode are automatically stored in the file `config.json` after the first launch and closure.

:::tip
To apply changes, use <kbd>F10</kbd> to reload the configuration.
:::

## Basic Configuration

### fullscreen

* Type: `boolean`
* Default: `false`

Whether to start in fullscreen mode. It will record the fullscreen status when DyNode was last closed.

### resolutionW / resolutionH

* Type: `number`
* Default: `1920` / `1080`

The rendering resolution of DyNode.

:::warning
DyNode currently does not support other resolutions well.

Adjusting the resolution may cause unpredictable display issues.
:::

### FPS

* Type: `number`
* Default: Screen Refresh Rate

The frame rate at which DyNode runs.

### autosave

* Type: `boolean`
* Default: `false`

Whether to enable autosave.

### language

* Type: `string`
* Default: `'zh-cn'`

The display language of DyNode.

### theme

* Type: `number`
* Default: `false`

The display theme of DyNode.

### autoupdate

* Type: `boolean`
* Default: `true`

Whether to enable automatic update checks.

:::tip
The latest version will bring new features, bug fixes, and performance improvements, and DyNode is still not stable enough. We do not recommend disabling this option.
:::

### simplify

* Type: `boolean`
* Default: `false`

Whether to enable simplified mode.

### graphics

#### graphics.AA

* Type: `0 | 2 | 4 | 8`
* Default: `4`

Anti-aliasing multiplier (2x/4x/8x). If `0`, then anti-aliasing is disabled.

#### graphics.VSync

* Type: `boolean`
* Default: `true`

Whether to enable vertical synchronization.

## Advanced Configuration

:::warning
Unless necessary, it is recommended to keep these items at their default values.
:::

### FMOD_MP3_DELAY

* Type: `number`
* Default: `60.0`

The delay time (in milliseconds) for FMOD to play .mp3 format files. See [Timing](/guide/timing.html#mp3-与-wav-格式的延迟处理) for details.

### ANNOUNCEMENT_MAX_LIMIT

* Type: `number`
* Default: `7`

The maximum limit for the number of reminder messages in the bottom-right corner.

## Information

:::danger
These configuration items are auto-generated, and under no circumstances should you modify them.
:::

### version

* Type: `String`

Automatically generated, representing the version of DyNode corresponding to the configuration file.
