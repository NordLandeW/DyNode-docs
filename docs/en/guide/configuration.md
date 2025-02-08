# Configuration

This page explains the configuration options for DyNode.

All DyNode configurations are automatically saved in the file `config.json` after the first run and exit.

:::tip
Please exit DyNode before modifying `config.json` to ensure your changes take effect.
:::

## Basic Configuration

### analytics

* Type: `true | false`
* Default: `true`

Set to `false` to completely disable data collection.

The scope of data collection is described in [Getting Started/Download & Installation](getting-started.md#download-installation).

### fullscreen

* Type: `true | false`
* Default: `false`

Whether to start in fullscreen mode. The last fullscreen state when DyNode was closed is remembered.

### resolutionW / resolutionH

* Type: `number`
* Default: `1920` / `1080`

The rendering resolution of DyNode.

:::warning
DyNode currently does not support other resolutions very well.

Changing the resolution may cause unpredictable display issues.
:::

### FPS

* Type: `number`
* Default: (screen refresh rate)

The frame rate at which DyNode runs.

### autosave

* Type: `true | false`
* Default: `false`

Whether to enable auto‐saving.

### language

* Type: `string`
* Default: `'zh-cn'`

The display language for DyNode.

### theme

* Type: `number`
* Default: `false`

The display theme for DyNode.

### autoupdate

* Type: `true | false`
* Default: `true`

Whether to enable automatic update checks.

:::tip
New versions bring new features, bug fixes, and performance improvements, and DyNode is still not fully stable. We do not recommend disabling this option.
:::

### simplify

* Type: `true | false`
* Default: `false`

Whether to enable simplified mode.

### graphics

#### graphics.AA

* Type: `0 | 2 | 4 | 8`
* Default: `4`

The level of anti-aliasing (2x/4x/8x). Set to `0` to disable anti-aliasing.

#### graphics.VSync

* Type: `true | false`
* Default: `true`

Whether to enable vertical synchronization.

### dropAdjustError

* Type: `real`
* Default: `0.12`

The threshold (in note-width units) for triggering width adjustment when dragging to place a note.

### offsetCorrection

* Type: `real`
* Default: `2`
* Minimum: `0`

The correction range (in milliseconds) used by the error correction function when exporting charts. Notes with time differences within this range will be aligned to the first note in that group.

### autoSaveTime

* Type: `real`
* Default: `180`
* Minimum: `1`

The interval (in seconds) for auto‐saving the chart.

### FMOD_MP3_DELAY

* Type: `number`
* Default: `0`

The delay (in milliseconds) applied when FMOD plays .mp3 files. See [Timing](guide/timing.html#mp3-and-wav-delay-handling) for details.

## Advanced Configuration

:::warning
Unless necessary, it is recommended to keep these options at their default values.
:::

### PROJECT_COMPRESSION_LEVEL

* Type: `number`
* Default: `11`
* Minimum: `0`
* Maximum: `22`

The compression level used by the ZSTD algorithm for project files. Higher levels result in smaller project files but longer saving times. In most cases, settings above `11` will not make a significant difference.

Setting this value to `0` will save the project in plain text (uncompressed).

### VIDEO_UPDATE_FREQUENCY

* Type: `number`
* Default: `60`

The refresh rate (in Hz) used when playing videos.

### ANNOUNCEMENT_MAX_LIMIT

* Type: `number`
* Default: `7`

The maximum number of notification messages in the lower-right corner. Notifications exceeding this limit will be removed first.

## Information

:::danger
The following configurations are auto-generated. Under no circumstances should you modify these options manually.
:::

### version

* Type: `String`

Automatically generated; represents the DyNode version corresponding to this configuration file.
