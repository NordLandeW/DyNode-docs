# 谱面导出

本页面包含谱面导出的相关说明。

:::tip
该功能一般用于在完成谱面/测试谱面需要发布/导入实机时，或者对切换到其它谱面编辑器存在需求时。

如果只是想保存谱面进度，请查看如何[保存项目](project.md#保存项目)。
:::

## 导出用于实机的 .xml 谱面

使用 <kbd>F5</kbd> 来导出 .xml 格式的谱面。

导出的谱面可以在 Dynamite 平台游玩，详见 [导入 Dynamite 平台](#导入-dynamite-平台)。

.xml 谱面具体的包含内容详见 [文件格式](file-formats#xml) 。

:::important
**通过该功能导出的谱面不建议再次导入 DyNode、Dynamaker 等谱面编辑器。如果你想在 Dynamaker 上编辑导出的谱面，请查看[导出适用于 Dynamaker-modified 的 XML 谱面格式](#导出适用于-dynamaker-modified-的-xml-谱面格式)。**

请确认以该功能导出的谱面不会被再次导入编辑，例如审核或修改。
:::

### 误差修正

你可以选择在导出时使用误差修正功能。

该功能在默认的情况下将时间差在 2ms 以内的连续音符对齐到连续音符内最早的位置上以修正 2ms 以内的音符时间误差。

你也可以在配置文件中的`offsetCorrection`一项中调整这个数字，详见 [配置](configuration) 。

使用该功能不会影响正在编辑的谱面，只有导出的谱面会得到修正。

### 导入 Dynamite 平台

.xml 谱面可以直接导入 Dynamite 进行游玩。阅读 [此处](https://www.bilibili.com/read/cv17021429) 以了解如何导入谱面。

## 导出适用于 Dynamaker-modified 的 XML 谱面格式

使用 <kbd>F6</kbd> 导出适用于 Dynamaker-modified 的 XML 谱面。

通过该谱面格式导出的谱面将包含完整的可被 Dynamaker-modified 读取的 Timing 信息。

:::important
该谱面格式**仅用于** Dynamaker-modified 谱面编辑器的读取。
**以该格式导出的谱面无法用于 Dynamite 等实机调试与发布场景**，并可能存在一定的精度损失。
:::