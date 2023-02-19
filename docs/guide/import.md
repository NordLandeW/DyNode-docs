# 谱面导入

本页面包含谱面导入的相关说明。

使用 <kbd>F2</kbd> 来导入所有格式的谱面。支持的谱面格式有 XML / DYN / OSU 。

:::warning
所有的谱面导入操作都是**不可撤销**的，因此确认操作并保存前请按需备份项目。
:::

## 导入 .xml/.dyn 谱面

除了使用 <kbd>F2</kbd> 来导入 .xml 谱面，你也可以在 [新建项目](/guide/project.html#新建项目) 时选择导入谱面文件。

你可以选择是否导入谱面物件与信息。导入的信息将会包含谱面难度、标题等。

:::info 关于 Dynamaker-modified
DyNode 提供对 Dynamaker-modified 谱面格式导入的完整支持。
:::

## 导入 .osu 谱面

你可以使用 <kbd>F2</kbd> 来导入 .osu 谱面。

导入的模式支持 osu! 包含的基础四种模式，针对 osu!mania 有特别的适配，这意味着你可以直接使用 DyNode 来进行 osu!mania 的转谱。导入的信息可以选择包括全部的 Timing Points ，但不会包含谱面所具有的元信息（标题、音乐等）。

DyNode 目前不支持 .osz 的导入，因为一个 .osz 包含多个谱面难度。目前你可以将 .osz 文件解压（.osz 是一个压缩文件），之后再导入其中包含的 .osu 文件。
