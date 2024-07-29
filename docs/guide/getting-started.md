# 快速上手

本页面旨在提供让人快速上手 DyNode 编辑谱面的操作方式教程。

## 下载 & 安装

你可以在 [主页](/) 上选择一个选项下载 DyNode 对应平台的最新版本。在运行 DyNode 前，系统上应当已经安装最新版本的 [Microsoft Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe) 。

如果国内用户访问 Github 存在困难，则可以使用网盘的方式进行下载。

下载完毕后，解压压缩文件，执行 `DyNode.exe` 即可打开 DyNode 。

::: important
DyNode 从 0.1.6 版本开始将不支持 32 位系统。若你对此存在需求，目前可以下载 0.1.5 之前的版本并正常使用。
:::

::: info 数据收集 / 隐私
从 DyNode 0.1.16 版本起，我们将进行最小化的匿名数据收集。我们仅会收集以下信息：
- 所使用的 DyNode 版本号

这些数据不会与任何个人数据（如IP地址、地理位置、系统或硬件信息等）关联，我们也不会传输任何形式的个人数据。

你可以随时在 [配置](configuration.md) 中完全关闭数据收集功能。
:::
## 从 DyNode 开始

:::info 提示
如果你准备创建一个全新的空项目并使用 DyNode 创作新谱面，则此处可以为你快速上手提供指引。
:::

通过以下几个简单的步骤可以快速地开始创作一个谱面的编辑过程。

1. [新建项目](/guide/project.html#新建项目) 。
2. 设置谱面的 Timing。详见 [Timing](/guide/timing.html) 。
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

DyNode 的大多数基本操作方式是 Dynamaker 的修改与增强。因此，若你熟悉 Dynamaker 的操作，则你应当可以快速上手 DyNode 的基本操作方式。

下面讲解 DyNode 与 Dynamaker 的主要操作区别。

- 音符除了双击吸附，也可以通过鼠标直接拖拽来移动。
  - Hold 的头尾移动是分离的。若你想进行整体拖动，按住 <kbd>Ctrl</kbd> 后再拖动头部即可。
  - 目前在多选模式下，Hold 强制为整体拖动。
- 音符放置时，长按左键拖拽来改变音符的宽度，松开左键进行放置。
- 编辑模式共有五个，以数字 <kbd>1</kbd> ~ <kbd>5</kbd> 进行切换。
  - 前四个模式与 Dynamaker 并无区别，第五个模式为预览（Playback）模式。这也是进入编辑器的默认模式。该模式下仅能够对谱面进行预览，所有特效全部开启，所有编辑器效果全部关闭。因此进入编辑器后，需要先选择模式 4 来切入编辑（Edit）模式以进行谱面的编辑。
- <kbd>C</kbd> / <kbd>V</kbd> 将会改变**节拍线**的密度与细分方式。
- Note 左上角默认情况下显示的并非 Note 的 Bar，而是 Note 所在的时间值（以毫秒为单位）。
- 可以使用 <kbd>Ctrl</kbd> 与拖拽框选来进行音符的多选/反选。
- 可以使用 <kbd>Ctrl + C/X/V/Z/Y</kbd> 来进行复制/剪切/粘贴/撤销/还原等操作。
- 可以使用 <kbd>Ctrl</kbd> + 鼠标滚轮 来进行快速的音符流速调整。若此时选中了音符，则可以进行快速的批量音符宽度调整。
- 可以使用 <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>V</kbd> 来复制单个音符的宽度并批量设置选中音符的宽度。
- 可以用 <kbd>Ctrl</kbd> + ( <kbd>Shift</kbd> + ) 方向键 来对选中音符进行微调。
- 拖拽右键来快速切换编辑侧。

其它基本操作/键位等与 Dynamaker 基本一致。

### 从 Dynamaker 中导入谱面

DyNode 提供从 Dynamaker 直接导入谱面的方式。

在开始界面时，你应当选择“创建项目”而非“打开已有项目”。项目在 DyNode 中是一个独立的概念，所有项目的信息将以 JSON 形式被储存在以 ".dyn" 为后缀结尾的文件中。详见 [项目](/guide/project.md) 。

![创建项目](project_create.png)

如果你已经在 Dynamaker 有正在编辑的谱面，则你可以在此创建项目页面中直接导入 Dynamaker 中的谱面。

以此方式你至少需要的文件有：

- 谱面的音乐文件。主流的音乐格式全部都可以使用（如 .mp3/.flac/.wav/.ogg/.mid 等）。关于使用 .mp3 与 .wav 音乐文件的延迟问题，你可以在 [Timing](/guide/timing.html#mp3-与-wav-格式的延迟处理-在-0-1-5-之后) 页面中看到更多内容。
- 谱面的 .xml/.dy 文件（从 Dynamaker 中导出）。因为 .dy 文件一般已经包含了谱面所需要的音乐文件，所以若你使用的是 .dy 格式的谱面，你可以无需填写谱面的音乐文件一栏。

在音乐文件一栏中选择你的谱面音乐文件。在导入谱面文件中选择你的 .xml 文件。如果有需要，你也可以添加背景文件。**所有右侧的谱面配置都将被导入的谱面信息所覆盖**。

完成后，点击创建项目即可。

之后你应当可以正常预览从 Dynamaker 中导入的谱面。

### Timing 与节拍细分

Timing 在 DyNode 中是与 Dynamaker 中的 Bar 存在差异的概念。详见 Wiki 中的 [Timing](/guide/timing) 页面。

若你已经在 Dynamaker 中正确设置了 BPM，则你可以正常从 Dynamaker 的各个版本中导入 BPM（亦或是多 BPM）信息，并可以直接在 DyNode 中进行编辑。

在**预览模式**下，节拍线默认不会显示，此时你应当使用数字键 <kbd>1</kbd> ~ <kbd>4</kbd> 来切换到**编辑模式**，并使用**方向键**来切出节拍线。与 Dynamaker 类似，你可以使用 <kbd>Z/C</kbd> 来切换节拍细分，与 Dynamaker 不同的地方在于节拍线的显示会随着你使用的节拍细分而改变。

:::info 提示
若你已经处于**编辑模式**却没有显示节拍线，则你可以尝试检查：
* 你是否选择了导入谱面相关信息？
* 你是否在 Dynamaker-modified 中正确配置了 BPM？
* 你是否添加了音乐文件？
:::

如果你想对导入的 Timing Point 中的重拍（或第一拍）进行额外的校准，则你可以尝试使用快捷键 <kbd>T</kbd> 。它会将时间上最晚的 Timing Point 复制并添加到你**选中**的**单个音符**上。

以某谱面为例，正常的编辑界面应当如下（此时节拍细分默认为 1/4）：

![](bad-chart.png)

### 在这之后...

想了解更多关于 DyNode 对编辑方式的改动，请前往查看 [谱面编辑](/guide/edit) 。

新建项目之后请不要忘记保存项目，否则进度可能会轻易丢失。详见 [保存项目](/guide/project.html#保存项目) 。

你可以使用 <kbd>F5</kbd> 来导出 .xml 格式的谱面，以用于导入游戏或 Dynamaker 中进行编辑（如果你有正确的 Bar Per Minute 设置）。

你可以使用 <kbd>F7</kbd> 来切换全屏。如果此时你没有处于粘贴模式，你可以使用 <kbd>Esc</kbd> 来退出 DyNode 。

如果你更改了音乐或图片文件的位置，则 DyNode 对文件的加载可能会出现错误。此时你可以使用 <kbd>F3</kbd> / <kbd>F4</kbd> 来手动加载音乐和图片文件。

如果比起蓝色你更喜欢粉色，你可以使用 <kbd>F9</kbd> 来切换主题。

全部的功能可以查看 [快捷键](/shortcuts) 页面。

你也可以无需通过 Dynamaker 进行谱面的创建。此时你需要手动配置 Timing Points 与所有的谱面信息。如果你通过 osu! 等编辑器对谱面设置 Timing 并无需配合 Dynamaker 使用，则推荐使用这种方式来进行谱面编辑。详见 [Timing](/guide/timing#%E4%BB%8E-osu-file-%E4%B8%AD%E5%AF%BC%E5%85%A5-timing-points) 页面。

如果你有更多其他的问题，可以查看 [FAQ](/FAQ) 页面。
