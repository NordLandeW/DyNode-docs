# 谱面导入

本页面包含谱面导入的相关说明。

使用 <kbd>F2</kbd> 来导入所有格式的谱面。支持的谱面格式有 .xml / .dyn / .dy / .osu 。

:::warning
所有的谱面导入操作都是**不可撤销**的，因此确认操作并保存前请按需备份项目。
:::

:::tip 合并谱面
你可以使用这一功能来合并多张谱面而无需担心谱面具有不同的 BPM 设置。

即使我们推荐在合并谱面之前，所有的谱面都具有相同的 BPM 设置——因为这样更便于在谱面合并之后进行再次编辑。
:::

:::info 关于 Dynamaker-modified
DyNode 提供对 Dynamaker-modified 谱面格式导入的完整支持。
:::

:::info 关于早期版本的 Dynamaker 谱面格式
DyNode 目前无法直接读取早期版本的 Dynamaker 谱面格式。

若你遇见了相关警告，请尝试将谱面导入最新版的 [Dynamaker-modified](https://github.com/jmakxd/dynamaker-modified) 后重新导出再使用 DyNode 进行读取。
:::

## 新建项目时导入 .xml/.dy 谱面

除了使用 <kbd>F2</kbd> 来导入 .xml/.dy 谱面，你也可以在 [新建项目](/guide/project.html#新建项目) 时选择导入谱面文件。

使用该选项时，导入的谱面信息将覆盖新建项目中所填写的其它信息。

如果导入的是 .dy 谱面则无需填写音乐文件一项。

:::note 关于 .dy 谱面格式
.dy 谱面格式以 Base64 形式储存了谱面的相关文件（音乐、背景文件等）。
:::

## 导入 .osu 谱面

你可以使用 <kbd>F2</kbd> 来导入 .osu 谱面。

导入的模式支持 osu! 包含的基础四种模式，针对 osu!mania 有特别的适配，这意味着你可以直接使用 DyNode 来进行 osu!mania 的转谱。导入的信息可以选择包括全部的 Timing Points ，但不会包含谱面所具有的元信息（标题、音乐等）。

DyNode 目前不支持 .osz 的导入，因为一个 .osz 包含多个谱面难度。目前你可以将 .osz 文件解压（.osz 是一个压缩文件），之后再导入其中包含的 .osu 文件。
