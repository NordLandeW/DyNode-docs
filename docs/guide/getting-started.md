# 快速上手

本页面旨在提供让人快速上手 DyNode 编辑谱面的操作方式教程。

## 下载 & 安装

你可以在 [主页](/) 上选择一个选项下载 DyNode 对应平台的最新版本。

如果国内用户访问 Github 存在困难，则可以使用网盘的方式进行下载。

下载完毕后，解压压缩文件，执行 `DyNode.exe` 即可打开 DyNode 。

::: warning 注意
DyNode 从 0.1.6 版本开始将不支持 32 位系统。若你对此存在需求，目前可以下载 0.1.5 之前的版本并正常使用。
:::
## 从 DyNode 开始

:::info 提示
如果你准备创建一个全新的空项目并使用 DyNode 创作新谱面，则此处可以为你快速上手提供指引。
:::

通过以下几个简单的步骤可以快速地开始创作一个谱面的编辑过程。

1. [新建项目](/guide/project.html#新建项目) 。
2. 对谱面进行校时。详见 [校时](/guide/timing.html) 。
3. 切换拍线的显示。详见 [网格吸附与拍线](/guide/edit.html#网格吸附与拍线) 。
4. 对谱面进行编辑。详见 [谱面编辑](/guide/edit.html) 。
5. [保存项目](/guide/project.html#保存项目) 。
6. 导出 .xml 谱面，在 Dynamite 或其他游戏客户端上进行调试。详见 [谱面导出](/guide/export.html) 。
7. 将导出的 .xml 谱面正式发布。

一个谱面就创作完成了！

## 从 Dynamaker 开始

:::info 提示
如果你曾使用过 Dynamaker ，了解 Dynamaker 的基本操作方式，并准备从 Dynamaker 中导入已有的项目，则你可以从此开始快速上手 DyNode 。
:::

### 基本操作方式

DyNode 的大多数基本操作方式是 Dynamaker 的改进与增强。因此，若你熟悉 Dynamaker 的操作，则你应当可以快速上手 DyNode 更加人性化且易懂的基本操作方式。

下面讲解 DyNode 与 Dynamaker 的主要操作区别。

- 音符通过鼠标直接拖拽来移动。
  - Hold 的头尾移动是分离的。若你想进行整体拖动，按住 <kbd>Ctrl</kbd> 后再拖动头部即可。
  - 目前在多选模式下，Hold 强制为整体拖动。
- 编辑模式共有五个，以数字 <kbd>1</kbd> ~ <kbd>5</kbd> 进行切换。
  - 前四个模式与 Dynamaker 并无区别，第五个模式为预览（Playback）模式。这也是进入编辑器的默认模式。该模式下仅能够对谱面进行预览，所有特效全部开启，所有编辑器效果全部关闭。因此进入编辑器后，需要先选择模式 4 来切入编辑（Edit）模式以进行谱面的编辑。
- <kbd>C</kbd> / <kbd>V</kbd> 将会改变**节拍线**的密度与细分方式。
- Note 左上角默认情况下显示的并非 Note 的 Bar，而是 Note 所在的时间值（以毫秒为单位）。
- 可以使用 <kbd>Ctrl</kbd> 与拖拽框选来进行音符的多选/反选。
- 可以使用 <kbd>Ctrl + C/X/V/Z/Y</kbd> 来进行复制/剪切/粘贴/撤销/还原等操作。
- 可以使用 <kbd>Ctrl</kbd> + 鼠标滚轮 来进行快速的音符流速调整。若此时选中了音符，则可以进行快速的批量音符宽度调整。
- 可以使用 <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>V</kbd> 来复制单个音符的宽度并批量设置选中音符的宽度。
- 可以用 <kbd>Ctrl</kbd> + ( <kbd>Shift</kbd> + ) 方向键 来对选中音符进行微调。
- 右键栏暂时性的没有加入 DyNode 当中。

其它基本操作/键位等与 Dynamaker 基本完全一致。

### 从 Dynamaker 中导入谱面

DyNode 提供从 Dynamaker 直接导入谱面的方式。

在开始界面时，你应当选择“创建项目”而非“打开已有项目”。项目在 DyNode 中是一个独立的概念，所有项目的信息将以 JSON 形式被储存在以 ".dyn" 为后缀结尾的文件中。详见 [项目](/guide/project.md) 。

![创建项目](https://user-images.githubusercontent.com/31349569/183947720-5340d57b-922e-4676-a555-dd9410b1e3cc.png)

如果你已经在 Dynamaker 有正在编辑的谱面，则你可以在此创建项目页面中直接导入 Dynamaker 中的谱面。

以此方式你至少需要的文件有：

- 谱面的音乐文件。主流的音乐格式全部都可以使用（如 .mp3/.flac/.wav/.ogg/.mid 等）。关于使用 .mp3 与 .wav 音乐文件的延迟问题，你可以在 [校时](/guide/timing.html#mp3-与-wav-格式的延迟处理-在-0-1-5-之后) 页面中看到更多内容。
- 谱面的 .xml 文件（从 Dynamaker 中导出）。

在音乐文件一栏中选择你的谱面音乐文件。在导入谱面文件中选择你的 .xml 文件。如果有需要，你也可以添加背景文件。**所有右侧的谱面配置都可以无视**。

完成后，点击创建项目即可。

提示是否导入谱面信息，若你的谱面信息无误（即使有误，之后也可以进行方便的更改），则我们**建议所有人选择“是”**。如果你选择否，则之前在创建项目界面右侧的谱面配置将被应用到谱面之中，同时 Timing Point 将默认为空。

之后你应当可以正常预览从 Dynamaker 中导入的谱面。

### 将从 Dynamaker 中导入的谱面进行校时

校时在 DyNode 中是与 Dynamaker 中的 Bar 存在差异的概念。详见 Wiki 中的 [校时](/guide/timing) 页面。

若你不想了解原理，也不想制作变 BPM 谱面，并且已经在 Dynamaker 中将 Bar Per Minute 配置正确（它被配置为 Beats Per Minute 的 1/4 倍），则可以用以下向导进行简单的校时配置。

- 该谱面中存在至少一个**在 Dynamaker 中正确放置**的 Note 。
- 切换到 Edit 模式，选中第一个你在 Dynamaker 中正确放置的 Note，按下 <kbd>T</kbd> 键。则节拍线将会以该 Note 作为**小节的第一拍**进行对齐。
- 第一个 Note 可能并非小节的第一拍。若有需要，你可以在之后某个位置准确的 Note 上进行同样的操作，按下 <kbd>T</kbd> 键以对齐小节的第一拍。

若你在 Dynamaker 中的 Bar Per Minute 并非 Beats Per Minute 的 1/4 倍，则它可能不会被正确自动配置到 DyNode 中（因为 Dynamaker 中导出的 .xml 文件其实并不包含 Beats Per Minute 的任何信息）。以下是针对这种情况的向导以进行简单的校时配置。

- 如果你已经放置了错误的 BPM ，则你可以在该 BPM 线上放置一个 Note，在选中该 Note 的情况下使用组合键 <kbd>Ctrl+Delete</kbd> 来删除该 Timing Point。
- 切换到 Edit 模式，单击第一个 Note，记录 Note 左上角的时间，按下 <kbd>Y</kbd> 键，依次填写：你之前记录的时间、谱面的正确 BPM、谱面的正确节拍数。你可以在 Wiki 中的 [校时](/guide/timing) 页面简单了解这些乐理概念。
- 同理，第一个 Note 可能并非**小节的第一拍**。若有需要，你可以选中在此之后的某个位置准确的 Note ，此时可以直接按下 <kbd>T</kbd> 键以对齐小节的第一拍。

以某谱面为例，正确对齐节拍线的界面应当如下（此时节拍细分默认为 1/4）：

![哒哒☆ 恭喜你正确对齐节拍线了呢~](https://user-images.githubusercontent.com/31349569/183874896-c247e938-b8db-4afa-b95c-453a6d9027a4.png)



### 在这之后...

新建项目之后请不要忘记保存项目，否则进度可能会轻易丢失。详见 [保存项目](/guide/project.html#保存项目) 。

你可以使用 <kbd>F5</kbd> 来导出 .xml 格式的谱面，以用于导入游戏或 Dynamaker 中进行编辑（如果你有正确的 Bar Per Minute 设置）。

你可以使用 <kbd>F7</kbd> 来切换全屏。如果此时你没有处于粘贴模式，你可以使用 <kbd>Esc</kbd> 来退出 DyNode 。

如果你更改了音乐或图片文件的位置，则 DyNode 对文件的加载可能会出现错误。此时你可以使用 <kbd>F3</kbd> / <kbd>F4</kbd> 来手动加载音乐和图片文件。

如果比起蓝色你更喜欢粉色，你可以使用 <kbd>F9</kbd> 来切换主题。

全部的功能可以查看 [快捷键](/shortcuts) 页面。

你也可以无需通过 Dynamaker 进行谱面的创建。此时你需要手动配置 Timing Points 与所有的谱面信息。如果你通过 osu! 或 osu!lazer 等编辑器对谱面进行校时并无需配合 Dynamaker 使用，则推荐使用这种方式来进行谱面编辑。详见 [校时](/guide/timing#%E4%BB%8E-osu-file-%E4%B8%AD%E5%AF%BC%E5%85%A5-timing-points) 页面。

如果你有更多其他的问题，可以查看 [FAQ](/FAQ) 页面。
