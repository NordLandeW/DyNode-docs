# Timing

本页面介绍有关 DyNode 中 Timing（校时） 与 Timing Points 等概念。

## Timing Point

Timing Point 包括了一首曲目的 offset, BPM 与节拍等信息。

* offset: Timing Point 第一拍的偏置值，以毫秒为单位。通俗来讲，若某一 Timing Point 的 offset 为 100，则该 Timing 的第一拍将出现在歌曲开始播放后的 100ms 上。
* [BPM](https://zh.wikipedia.org/zh-hans/%E9%80%9F%E5%BA%A6_(%E9%9F%B3%E6%A8%82)#%E9%87%8F%E5%BA%A6%E9%9F%B3%E6%A8%82%E9%80%9F%E5%BA%A6): Beats Per Minute, 即每分钟节拍数，用于度量音乐的快慢。
* [节拍](https://zh.wikipedia.org/zh-hans/%E8%8A%82%E6%8B%8D) (meter): 指音乐拍子的出现模式。常见如 4/4 拍（四分音符为一拍，一小节四拍），3/4 拍（四分音符为一拍，一小节三拍，也即三拍子）等。此处的节拍为一整数 `x`，表示 `x/4` 拍。

一首曲目中可能包含多个不同的 BPM 与节拍数，使用 Timing Points 即可分割曲目中不同时间段的不同 BPM ，以更方便地制作变节拍或变 BPM 的曲目。

编辑器中的纵向网格（节拍线）将以设定的 Timing 为基准。

:::tip “什么是 Timing ？我还是不懂！”

以通俗的方式说，如果从歌曲的 **100ms** 开始，歌曲按照 **180 BPM**，**四拍子**的速度去运行，那么与之对应的 Timing 就是：
```
offset: 100
BPM: 180
meter: 4
```

如果从歌曲的 **3000ms** 开始，歌曲按照 **2023 BPM**，**三拍子**的速度去运行，那么与之对应的 Timing 就是：
```
offset: 3000
BPM: 2023
meter: 3
```

把这两个 Timing 作为 Timing Point 加入到同一首曲目中，这样就能把一首曲目中的变速段落用简单的方式分割开来了！

:::

## 编辑 Timing

### 添加 Timing Point

DyNode 中添加 Timing Point 的方式共有三种。

* 按 <kbd>Y</kbd> 来手动添加 Timing Point ，并依次输入 offset，BPM，节拍 三项信息便可直接添加一个 Timing Point。
* 按 <kbd>T</kbd> 来复制时间上最末尾的 Timing Point 到你选定的 Note 上。这可能会方便谱面重拍位置的调整以及从 Dynamaker 中导入谱面的校时。
* 按 <kbd>F2</kbd> 来从 .osu 中导入谱面所有的 Timing Point。这会覆盖掉之前的设置。

:::tip
在使用 <kbd>Y</kbd> 来添加 Timing Point 时，你可以先选中**单个** Note ，再使用 <kbd>Y</kbd> 键，则可以直接使用选中的 Note 的时间作为 offset 。
:::

### 修改 Timing Point

在想要修改 Timing Point 的时间点上放置一个 Note 并选中，按下 <kbd>Y</kbd> 即可修改该 Timing Point 的信息。按照提示输入对应格式的字符串以修改 Timing Point 的 offset，BPM 与节拍。

### Timing 修正

修改 Timing Point 的 offset 或 BPM 后，已经放置在该 Timing 区域下的音符很可能将无法对齐到节拍线上，且音符与音乐节奏不符的问题仍旧没有得到解决。如果遇到了此问题，你可以使用 Timing 修正功能尝试解决问题。

该功能将在你修改 Timing Point 的 offset 或 BPM 后自动询问你是否执行 Timing 修正（在有音符可以修正的情况下）。

该功能可以修正的错误范围存在极限。如果修正的结果有误，你随时可以撤销修改结果。

:::tip Timing 修正的额外说明
此功能将计算 Timing 区域内（Timing 的区域即为该 Timing Point 的 offset 至下一 Timing Point 的 offset 区间）音符相对于原本 Timing 的[小节数](#时间与小节数)，在修改 Timing 的 BPM 后根据原本的小节数计算得到新的绝对时间。

如果 offset 也有更改，音符随后将会增加 offset 的变化量。

在修正的过程中可能会出现音符修改后进入了其它未修改的 Timing 区域并弹出警告信息的情况，这意味着修正的结果可能并不正确，并需要你进行仔细检查。这个警告通常在以下两种情况下出现：
* BPM 减小幅度过大，导致音符进入了更后面的 Timing 区域。
* offset 减小幅度过大，导致当前 Timing 与上一 Timing 的区域互换，或者出现了其它更复杂的情况。
:::

### 删除 Timing Point

在你想要删除 Timing Point 的时间点上放置一个 Note 并选中，按下 <kbd>Ctrl+Delete</kbd> 即可删除在该时间点上的一个 Timing Point 。

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

使用 <kbd>Ctrl + Z/Y</kbd> 来进行撤销与还原你对 Timing 做出的改动。

## 导入 Timing

### 从 Osu File 中导入 Timing

DyNode 支持从 [osu file format v14](https://osu.ppy.sh/wiki/zh/Client/File_formats/Osu_%28file_format%29) (.osu) 格式的文件中直接导入 Timing Points 信息。这意味着你可以使用 osu! 或 osu!lazer 提供的官方谱面编辑器进行校时。详见 [谱面导入](/guide/import.html#导入-osu-谱面) 。

### 从 Dynamaker 中导入 Timing

你可以选择从 Dynamaker 或 Dynamaker-modified 中导入完整的 BPM 信息，而无需再作额外的校正工作。

## 时间与小节数

类似 Dynamaker 的 Bar，DyNode 也可以通过各种方式查看音符的小节数。在 DyNode 中，小节数代表时间所在的准确小节，这与所在 Timing 的 BPM 与 节拍 (Meter) 都存在关系。举例而言，若当前 Timing 的节拍为 $3/4$ 拍，则节拍数 $13+\frac{1}{3}=13.333\dots$ 所在的时间为第 $13$ 小节之后的一个四分音符，因为这个小节被三个四分音符等分。

在正面节拍线的右侧，形如 `X --- Y/4` 的数字描述了当前时间所在的小节数为第 $X$ 小节之后的第 $Y$ 个四分音符处。

在音符信息的右上角，形如 `X + Y/Z (D)` 的数字描述了当前音符在上一次网格吸附后的所在小节数为第 $X + \frac{Y}{Z}$ 小节，$D$ 描述了这个音符为 $D$ 分音符。这个信息只在特定的情况下能够准确显示。

:::tip 关于 Z 、D 参数与小节数
在一些情况下 $Z\neq D$ 的原因在于一个小节并不一定为四个四分音符的长度（四拍子），它的长度也可能是三个四分音符（三拍子）。若当前所在的 Timing 为三拍子（三个四分音符为一拍），此时假若你想放置 16 分音符（节拍细分为 $1/4$，$D=16$），则 12 个 16 分音符的长度与一个小节的长度相等（$Z=12$）。$Z$ 这一参数表明了一个小节中包含了多少个 $D$ 分音符。
:::

在 DyNode 中，一个 Timing Point 的起点一定会是一个新的小节，即使上一个小节没有完全结束。

你可以使用 [切换小节数/时间显示](/guide/edit.html#切换小节数-时间显示) 将音符信息左上角的时间更改为实数形式的准确小节数 $X + \frac{Y}{Z}$。

## Dynamaker 与 Bar

Dynamaker 中所使用的 Bar 概念便于在 Dynamaker 中以节拍数方式进行直接编辑。

类似 osu! ，DyNode 的大部分逻辑皆基于绝对时间进行处理，例如谱面的播放、谱面的读取与导出。以此种方式，DyNode 能够提供灵活的编辑方式与编辑工具。

在谱面导入或导出时，DyNode 对时间到 Bar 的转换皆进行了完整的处理，因此无需担心谱面的兼容性问题。

DyNode 中仍旧会显示小节与小节数，但他们与 Dynamaker 所使用的 Bar 概念可能有所不同。

## MP3 与 WAV 格式的延迟

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
> 
> ----brett, FMOD CEO

更多针对此问题的 FMOD 社区讨论详见：[https://qa.fmod.com/t/fmod-add-air-on-tracks/12073](https://qa.fmod.com/t/fmod-add-air-on-tracks/12073)

针对谱面的延迟问题，Dynamite 音乐至谱面的延迟与 osu! 类似，而 DyNode 对 .mp3 类型格式的播放从音乐至谱面的延迟普遍在 30~60ms 左右（因此，如果你从 .osu 导入谱面，不对导入物件添加延迟会感受到明显的音画不同步）。DyNode 对此没有特别好的解决方式，于是 DyNode 在之前的版本默认提供了为 .osu 添加 64ms 延迟的选项（0.1.4.1及以前），导致 Dynamite 中的谱面也会普遍出现 64ms 延迟的问题。

关于现在你应当如何解决此问题，DyNode 提供两种解决方案：

* 使用 .mp3 格式的文件的时候，DyNode 会默认为 FMOD 播放音乐提供一个 60ms 的延迟。针对不同的设备这可能存在差异，故你也可以在 config.json 中编辑这个延迟（或者完全关闭它）。你只需要更改 `config.json` 中 `FMOD_MP3_DELAY` 一项的值即可（以毫秒为单位），详见 [配置](/guide/configuration.html#fmod-mp3-delay) 。
* 使用 .wav 格式的文件来减少谱面编辑的延迟。

以及，DyNode 对旧的已经出现错误的延迟谱面也提供两种解决方案：

* 打开旧版本（0.1.4.1及以前）的谱面会出现警告。如果你已经添加了 64ms 的延迟，你可以根据指示将这 64ms 的延迟撤销。
* 使用 [全局时间偏移](/guide/edit#全局时间偏移) 手动调整。
