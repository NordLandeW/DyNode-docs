# 谱面导出

本页面包含谱面导出的相关说明。

## 导出 .xml 谱面

使用 <kbd>F5</kbd> 来导出 .xml 格式的谱面。

导出的谱面可以在以下平台编辑 / 调试 / 游玩：

* Dynamite
* Dynamaker
* Dynamaker-modified

.xml 谱面具体的包含内容详见 [文件格式](/guide/file-formats.html#xml) 。

### 导出为 Dynamaker-modified 谱面格式

该谱面格式**仅用于** Dynamaker-modified 与 DyNode 谱面编辑器的读取。以该谱面格式导出的谱面将**强制进行** [默认 Bar 配置](#默认-bar-配置)。

通过该谱面格式导出的谱面将包含完整的可被 Dynamaker-modified 读取的 Timing 信息。

:::warning
**以该格式导出的谱面无法用于 Dynamite 等实机调试与发布场景。**
:::

### 默认 Bar 配置
导出的时候 DyNode 将会询问你是否进行默认的 Bar 配置。这一般只在你未使用从 Dynamaker 导入的谱面情况下询问。

默认 Bar 配置将以该谱面中时间上最早的 Timing Point 为准配置**全局**的 Bar Per Minute 与 Bar Offset 。

一般情况下，我们建议所有人选择“是”。在保存项目后，DyNode 不会进行第二遍询问，详见 [Bar](/guide/edit.html#bar)。

### 整数时间转换

如果你打算将导出的谱面进行实机测试或发布，则建议在导出时同意进行**整数时间转换**。

这能有效解决毫秒级以下时间误差造成的防糊机制意外触发，但请注意：转换过后的导出谱面再次被导入时会丢失小数部分的时间信息。

我们不建议导入这类谱面进行编辑。如有需要，你应该导出未经过时间转换的谱面来用于导入编辑。


### 在 Dynamite 上游玩

.xml 谱面可以直接导入 Dynamite 进行游玩。阅读 [此处](https://www.bilibili.com/read/cv17021429) 以了解如何导入谱面。

### 对校时的默认处理

若你的谱面不是从 Dynamaker 导入且没有设置全局 Bar 信息（这意味着你也没有设置默认 Bar 配置），则导出的 .xml 谱面中将会设置以下默认值：

* Bar Per Minute : 校时中第一个 Timing Point 的 BPM 的 $1/4$ 。
* Bar Offset : 设置为 $0$ 。

所有音符的时间都将通过此默认 Bar 信息配置转化为其所在的 Bar 。以此默认信息导出的谱面能够正常游玩，但你大概率无法在 Dynamaker 上正常编辑此谱面。