# 谱面导入

本页面包含谱面导入的相关说明。

使用 <kbd>F2</kbd> 来导入所有格式的谱面。

:::warning
所有的谱面导入操作都是**不可撤销**的，因此确认操作并保存前请按需备份项目。
:::

## 导入 .xml 谱面

除了使用 <kbd>F2</kbd> 来导入 .xml 谱面，你也可以在 [新建项目](/guide/project.html#新建项目) 时选择导入谱面文件。

你可以选择是否导入谱面物件与信息。导入的信息将会包含谱面难度、标题等。

:::tip 关于 Dynamaker-modifed 的谱面导入提示
你应当使用**最新版本**的 Dynamaker-modifed 来导出谱面以避免不必要的错误。

若你的谱面包含变 BPM 信息，则你应当注意 DyNode 目前无法导出变 BPM 信息到 XML 格式谱面中，因此你无法将变 BPM 信息保留并与 Dynamaker-modified 协作编辑。详见 [谱面导出](/guide/export.html)。
:::

## 导入 .osu 谱面

你可以使用 <kbd>F2</kbd> 来导入 .osu 谱面。

导入的模式支持 osu! 包含的基础四种模式，针对 osu!mania 有特别的适配，这意味着你可以直接使用 DyNode 来进行 osu!mania 的转谱。导入的信息可以选择包括全部的 Timing Points ，但不会包含谱面所具有的元信息（标题、音乐等）。

DyNode 目前不支持 .osz 的导入，因为一个 .osz 包含多个谱面难度。目前你可以将 .osz 文件解压（.osz 是一个压缩文件），之后再导入其中包含的 .osu 文件。
