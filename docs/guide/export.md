# 谱面导出

本页面包含谱面导出的相关说明。

## 导出 .xml 谱面

使用 <kbd>F5</kbd> 来导出 .xml 格式的谱面。

导出的谱面可以在以下平台编辑 / 调试 / 游玩：

* Dynamite
* Dynamaker
* Dynamaker-modified

.xml 谱面具体的包含内容详见 [文件格式](/guide/file-formats.html#xml) 。

### 误差修正

如果你打算将导出的谱面进行实机测试或发布，则可以在导出时使用误差修正功能。

该功能在默认的情况下将时间差在 2ms 以内的连续音符对齐到连续音符内最早的位置上以修正 2ms 以内的音符时间误差。

使用该功能不会影响正在编辑的谱面，只有导出的谱面会得到修正。

:::important
**通过该功能导出的谱面无法用于 Dynamaker 等谱面编辑器的正常编辑。**

请确认以该功能导出的谱面不会被再次导入编辑，例如审核或修改。
:::

### 在 Dynamite 上游玩

.xml 谱面可以直接导入 Dynamite 进行游玩。阅读 [此处](https://www.bilibili.com/read/cv17021429) 以了解如何导入谱面。

## 导出适用于 Dynamaker-modified 的 XML 谱面格式

使用 <kbd>Ctrl+F5</kbd> 导出适用于 Dynamaker-modified 的 XML 谱面。

通过该谱面格式导出的谱面将包含完整的可被 Dynamaker-modified 读取的 Timing 信息。

:::important
该谱面格式**仅用于** Dynamaker-modified 谱面编辑器的读取。
**以该格式导出的谱面无法用于 Dynamite 等实机调试与发布场景**，并可能存在一定的精度损失。
:::