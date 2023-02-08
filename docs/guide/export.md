# 谱面导出

本页面包含谱面导出的相关说明。

## 导出 .xml 谱面

使用 <kbd>F5</kbd> 来导出 .xml 格式的谱面。

导出的谱面可以在以下平台编辑 / 调试 / 游玩：

* Dynamite
* Dynamaker
* Dynamaker-modified

导出的基本信息**不包括**：

* 校时（BPM、Offset、节拍）

.xml 谱面具体的包含内容详见 [文件格式](/guide/file-formats.html#xml) 。

:::tip 整数时间转换
如果你打算将导出的谱面进行实机测试或发布，则建议在导出时同意进行**整数时间转换**。

这能有效解决毫秒级以下时间误差造成的防糊机制意外触发，但请注意：转换过后的导出谱面再次被导入时会丢失小数部分的时间信息。

我们不建议导入这类谱面进行编辑。如有需要，你应该导出未经过时间转换的谱面来用于导入编辑。
:::

### 在 Dynamite 上游玩

.xml 谱面可以直接导入 Dynamite 进行游玩。阅读 [此处](https://www.bilibili.com/read/cv17021429) 以了解如何导入谱面。

### 与 Dynamaker 共同编辑

如果你的谱面是从 Dynamaker 导入，则你可以正常使用与 Bar 相关的所有功能。导出的谱面可以直接在 Dynamaker 上进行编辑，当然前提是你在 Dynamaker 上正确配置了 Bar 相关的信息。

否则，如果你想让导出的谱面能同时在 Dynamaker 上编辑，你需要设置全局 [Bar](/guide/timing.html#bar) 信息，详见 [编辑](/guide/edit.html#设置全局-bar-信息) 。

### 对校时的默认处理

若你的谱面不是从 Dynamaker 导入且没有设置全局 Bar 信息，则导出的 .xml 谱面中将会设置以下默认值：

* Bar Per Minute : 校时中第一个 Timing Point 的 BPM 的 $1/4$ 。
* Bar Offset : 设置为 $0$ 。

所有音符的时间都将通过此默认 Bar 信息配置转化为其所在的 Bar 。以此默认信息导出的谱面能够正常游玩，但你大概率无法在 Dynamaker 上正常编辑此谱面。