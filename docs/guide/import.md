# 谱面导入

本页面包含谱面导入的相关说明。

## 导入 .xml 谱面

你可以使用 <kbd>F2</kbd> 来导入 .xml 谱面，或在创建项目时选择导入谱面文件。

**当你使用 Dynamaker-modified 来导出谱面文件时，我们建议其以 Save for Dynamite 形式导出，或者选择不导入 BPM 数据。**

从 Dynamaker-modified 中直接导出的文件包含变BPM数据，这些数据在 0.1.3 版本之后的 DyNode 支持导入，但由于实现上的差别，目前导入过后的节拍线会与音符存在不可避免的误差。而之后校正 BPM 与 offset 的过程将会是复杂与繁琐的。

我们建议单纯将音符进行导入，之后再手动地编辑 Timing Point 来进行精准的校时。详见 [校时](/guide/timing) 页面。