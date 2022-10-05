# 校时

本页面介绍有关 DyNode 中 Timing（校时） 与 Timing Points 等概念。

## Timing Point

Timing Point 包括了一首曲目的 offset, BPM 与节拍等信息。

* offset: Timing Point 第一拍的偏置值，以毫秒为单位。通俗来讲，若某一 Timing Point 的 offset 为 100，则该 Timing 的第一拍将出现在歌曲开始播放后的 100ms 上。
* [BPM](https://zh.wikipedia.org/zh-hans/%E9%80%9F%E5%BA%A6_(%E9%9F%B3%E6%A8%82)#%E9%87%8F%E5%BA%A6%E9%9F%B3%E6%A8%82%E9%80%9F%E5%BA%A6): Beats Per Minute, 即每分钟节拍数，用于度量音乐的快慢。
* [节拍](https://zh.wikipedia.org/zh-hans/%E8%8A%82%E6%8B%8D) (meter): 指音乐拍子的出现模式。常见如 4/4 拍（四分音符为一拍，一小节四拍），3/4 拍（四分音符为一拍，一小节三拍，也即三拍子）等。此处的节拍为一整数 `x`，表示 `x/4` 拍。

一首曲目中可能包含多个不同的 BPM 与节拍数，使用 Timing Points 即可分割曲目中不同时间段的不同 BPM ，以更方便地制作变节拍或变 BPM 的曲目。

编辑器中的纵向网格（节拍线）将以设定的 Timing 为基准。

## 编辑 Timing

### 添加 Timing Point

DyNode 中添加 Timing Point 的方式共有三种。

* 按 <kbd>Y</kbd> 来手动添加 Timing Point ，并依次输入 offset，BPM，节拍 三项信息便可直接添加一个 Timing Point。
* 按 <kbd>T</kbd> 来复制时间上最末尾的 Timing Point 到你选定的 Note 上。这可能会方便谱面重拍位置的调整以及从 Dynamaker 中导入谱面的校时。
* 按 <kbd>F10</kbd> 来从 .osu 中导入谱面所有的 Timing Point。这会覆盖掉之前的设置。

:::tip
在使用 <kbd>Y</kbd> 来添加 Timing Point 时，你可以先选中**单个** Note ，再使用 <kbd>Y</kbd> 键，则可以直接使用选中的 Note 的时间作为 offset 。

这在 Timing Point 的 offset 需要为精准小数的时候十分有用：例如，你选择从 Dynamaker-modifed 中导入变 BPM 谱面时需要对 Timing 进行校准，而 Note 的时间却为小数时（即使时间显示为整数）。
:::

### 删除 Timing Point

在你想要删除 Timing Point 的时间点上放置一个 Note 并选中，按下 <kbd>Ctrl+Delete</kbd> 即可删除在该时间点上的一个 Note 。

### 手动修改

你可以直接编辑项目的 .dyn 文件。.dyn 文件以 JSON 形式直接存储 Timing Points 的信息，因此你可以直接对 .dyn 中包含的 Timing Points 信息进行编辑。

```json
{
    "beatLength": 324.324324324324,
    "meter": 4,
    "time": 419
}
```

上面是 Timing Point json 格式的一个样例，其中 `beatLength` 代表一拍的长度（以毫秒计），`meter` 代表节拍，`time` 代表 offset。

从 `beatLength` 到 `BPM` 的换算以上方为例有：$1 / 324.324324324324 * 1000 * 60 = 185$。

编辑完成后，你需要手动重新打开该项目的文件。详见 [文件格式](/guide/file-formats) 页面。

### 撤销/还原

使用 <kbd>Ctrl</kbd> + <kbd>Z</kbd>/<kbd>Y</kbd> 来进行撤销与还原。

## 从 Osu File 中导入 Timing Points

DyNode 支持从 [osu file format v14](https://osu.ppy.sh/wiki/zh/Client/File_formats/Osu_%28file_format%29) (.osu) 格式的文件中直接导入 Timing Points 信息。这意味着你可以使用 osu! 或 osu!lazer 提供的官方谱面编辑器进行校时。详见 [谱面导入](/guide/import.html#导入-osu-谱面) 。

## 从 Dynamaker 中导入校时

你可以选择从 Dynamaker 中导入已有的 BPM 信息，但你需要作额外的校正工作。详见 [快速上手](/guide/getting-started.html#将从-dynamaker-中导入的谱面进行校时) 。

不建议从 Dynamaker-modified 中导入多 BPM 信息。详见 [谱面导入](/guide/import.html) 。

## Bar

Dynamaker 中引入 Bar 的概念便于在 Dynamaker 中以固定的节拍线格式或文本方式进行直接编辑，而实际上谱面的播放仍旧基于时间逻辑。DyNode 提供了更加灵活的节拍线与可变 BPM 设置，因此弃用了 Bar 相关的概念，将所有编辑与播放过程全部基于时间与 BPM (Beats Per Minute) 逻辑。

DyNode 同时也提供了向 Dynamaker 进行兼容的功能。若想同时使用 Dynamaker 与 DyNode ，目前可以现在 Dynamaker 中设置好 Bar Per Minute 并放置至少一个音符后，再将 DyNode 的 Timing 进行校准（由此对齐音符的节拍线以进行放置）。

从 Dynamaker 中导入的谱面信息所包含的 Bar Per Minute 与 Offset 将会直接同步到 DyNode 上。此时 DyNode 中的全局 Bar Offset 可以与 Dynamaker 保持一致，便于在两个编辑器中来回切换编辑。但注意，DyNode 中任何的 Timing 信息将无法同步到 Dynamaker 上（例如，你无法直接像在 DyNode 上那样在 Dynamaker 上编辑变速谱面）。详见 [快速上手](/guide/getting-started.md) 。

## MP3 与 WAV 格式的延迟处理

::: warning 关于旧版本的警告

针对 .mp3 的延迟处理在 0.1.5 版本之后产生了较大变动。该条目底部详细阐述了你应当如何在 0.1.5 版本之后打开旧版本项目时处理有关 .mp3 文件的延迟。

:::

DyNode 已经力所能及地将音乐对谱面延迟降到了最低，但 MP3 仍旧会与 WAV 格式存在一定的延迟。

MP3 格式众所周知地不适合用于对音乐延迟、衔接要求较高的游戏开发场合中。其中的一个原因可能在于对音频文件进行编码的编码器会视情况而定对原音频段落添加一定的空白。

> Why is a decoded MP3 longer than the original .wav file?
>
> Because LAME (and all other MDCT based encoders) add padding to the beginning and end of each song.  For an explination of why, see the questions below.
>
> LAME embeds the amount of padding in the ancillary data of the first frame of the MP3 file. (LAME INFO tag). The LAME decoder will use this information to remove the leading padding of an MP3 file.  
>
> Modifications to the decoder so that it will also remove the trailing padding have not yet been made. 
>
> [https://lame.sourceforge.io/tech-FAQ.txt](https://lame.sourceforge.io/tech-FAQ.txt)

> FMOD doesn’t chop the start off .mp3 decodes, a format which has inherent latency in it.
> ----brett, FMOD CEO

更多针对此问题的 FMOD 社区讨论详见：[https://qa.fmod.com/t/fmod-add-air-on-tracks/12073](https://qa.fmod.com/t/fmod-add-air-on-tracks/12073)

针对谱面的延迟问题，Dynamite 音乐至谱面的延迟与 osu! 类似，而 DyNode 对 .mp3 类型格式的播放从音乐至谱面的延迟普遍在 30~60ms 左右（因此，如果你从 .osu 导入谱面，不对导入物件添加延迟会感受到明显的音画不同步）。DyNode 对此没有特别好的解决方式，于是 DyNode 在之前的版本默认提供了为 .osu 添加 64ms 延迟的选项（0.1.4.1及以前），导致 Dynamite 中的谱面也会普遍出现 64ms 延迟的问题。

关于现在你应当如何解决此问题，DyNode 提供两种解决方案：

* 使用 .mp3 格式的文件的时候，DyNode 会默认为 FMOD 播放音乐提供一个 60ms 的延迟。针对不同的设备这可能存在差异，故你也可以在 config.json 中编辑这个延迟（或者完全关闭它）。你只需要更改 `config.json` 中 `FMOD_MP3_DELAY` 一项的值即可（以毫秒为单位），详见 [配置](/guide/configuration.html#fmod-mp3-delay) 。
* 使用 .wav 格式的文件来减少谱面编辑的延迟。

以及，DyNode 对旧的已经出现错误的延迟谱面也提供两种解决方案：

* 打开旧版本（0.1.4.1及以前）的谱面会出现警告。如果你已经添加了 64ms 的延迟，你可以根据指示将这 64ms 的延迟撤销。
* 使用 [全局时间偏移](/guide/edit#全局时间偏移) 手动调整。
