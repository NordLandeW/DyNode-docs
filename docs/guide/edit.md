# 编辑

本页面讲解 DyNode 编辑的基本要素。

## 音符

音符共有三种类型。

- Note (Tap): 单点音符，最基本的音符
- Chain (Slide): 滑键，只要手指有放置就能判定的音符
- Hold: 长按直至尾部判定完全再松开的音符

除此以外，在 xml 格式数据的储存中也有额外的类型：

- Sub: Hold 的尾部音符，仅所在时间具有有意义的数据

### 放置音符

1. 数字键 <kbd>1</kbd> ~ <kbd>3</kbd> 切换至你想放置的音符。
2. 找到你想放置的位置，长按 Note 拖拽调整长度，松开放置。
3. 如果你放置的是 Hold，下一步继续选择 Hold 的尾端并点按放置。

最后一次手动放置单个音符的宽度将作为下一次放置音符的 _设置宽度_ 。

![Drop a note](https://user-images.githubusercontent.com/31349569/184546816-cc813b1b-844b-4eef-a959-e69022702f50.gif)
![Drop_a_hold](https://user-images.githubusercontent.com/31349569/184546887-17f5d3d3-b9dc-4a36-a0b1-ab13a10130e2.gif)

### 移动音符

拖拽。

![Drag a note](https://user-images.githubusercontent.com/31349569/184546984-f9bae40d-f543-4544-ab07-1902c2a80dd3.gif)

### 选中音符

拖拽并框选。

你可以按住 <kbd>Ctrl</kbd> 键来多选音符或反选音符。

![Multiselect](https://user-images.githubusercontent.com/31349569/184547121-032231e9-4c4a-4a7b-9cc1-b6c5c3e4e122.gif)

#### 批量移动音符

在选中音符后，拖拽即可。

#### 批量删除音符

在选中音符后，按下 <kbd>Backspace</kbd> 或 <kbd>Delete</kbd> 即可。

#### 批量调节音符宽度

在选中音符后，按下 <kbd>Ctrl</kbd> 并使用鼠标滚轮来快速调节音符宽度，或使用 <kbd>Ctrl</kbd> + <kbd>V</kbd> 来快速粘贴 _设置宽度_ 。

#### 复制音符宽度

在选中 **单个** 音符后，使用 <kbd>Ctrl</kbd> + <kbd>C</kbd> 来将此音符的宽度作为 _设置宽度_ 。

#### 复制音符

在选中音符后，按下 <kbd>Ctrl</kbd> + <kbd>C</kbd> ，右下角即会提示复制音符数量。

![Copy](https://user-images.githubusercontent.com/31349569/184547227-bbb12d78-0f0e-40b9-b0c2-77e69e3b8887.gif)

#### 粘贴音符

在复制音符后，按下 <kbd>Ctrl</kbd> + <kbd>V</kbd> ，在适当的位置像放置普通音符那样放置复制音符即可。

粘贴音符的时候，默认使用时间最早的音符当做选择的中心。如果你想更换这个中心（比如，你想以末尾的音符作为中心），用 <kbd>Ctrl</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> 来切换。

可以用 <kbd>Esc</kbd> 来退出粘贴，也可以直接使用数字键切换模式。

可以用 <kbd>Up</kbd> 或 <kbd>鼠标右键</kbd> 来切换你想要粘贴到的下落面。

可以用 <kbd>Ctrl</kbd> + <kbd>1</kbd>/<kbd>2</kbd> 来批量转换你想粘贴的音符。

![Paste](https://user-images.githubusercontent.com/31349569/184547335-9d6a2e4e-d2f1-4908-92d8-038683a371f4.gif)

### 撤销与还原

使用 <kbd>Ctrl</kbd> + <kbd>Z</kbd>/<kbd>Y</kbd> 来撤销与还原。

## 编辑侧

### 切换编辑侧

用 <kbd>Up</kbd> 或 <kbd>鼠标右键</kbd> 拖拽来切换编辑侧。

亮起的判定线代表你正在编辑的侧面。

![Switch side](https://user-images.githubusercontent.com/31349569/184547647-4e148234-543a-413e-bdcb-b0498ca618be.gif)

### 透明化非编辑侧音符

按下 <kbd>F</kbd> 即可隐去非编辑侧音符。

![Fade side](https://user-images.githubusercontent.com/31349569/184547770-ef9add4d-0300-4a1e-89d1-dcd6af67d599.gif)

### 切换侧面下落类型

将编辑侧切换到左侧或右侧后，按下 <kbd>Ctrl</kbd> + <kbd>F</kbd> 来切换此侧面的下落类型。

- MULTI: 可以放置 Note, Hold 与 Chain 三种类型的音符
- PAD: 可以放置 Note 与 Hold 两种类型的音符。
- MIXER: 可以放置 Chain 类型的音符，带有滑板

目前的版本实际上对三种模式的音符放置都不带有严格限制。

## 网格吸附与拍线

开启纵向网格吸附与拍线的前提是正确配置 Timing Point ，详看 [校时](/guide/timing) 页面。

### 节拍细分（组）

使用 <kbd>C</kbd>/<kbd>V</kbd> 来切换节拍细分的细密程度。

使用 <kbd>G</kbd> 来切换节拍分组。

目前支持的节拍细分有：

- A 组：1/2，1/3 为基础的细分组，包括 1/4, 1/8, 1/6, 1/12 等。
- B 组：比较少见的 1/5，1/7 为基础的细分组，包括 1/10, 1/14, 1/20 等。

### 网格吸附的开关

使用 <kbd>Z</kbd> 来开关纵向（时间）网格吸附。

使用 <kbd>X</kbd> 来开关横向（位置）网格吸附。

由于 Dynamix 的防糊机制，我们十分不建议在关闭纵向网格吸附的情况下手动放置双押。如果一定要这么操作，目前建议先确保两个音符在时间上准确对齐（例如，他们先吸附在拍线上），再利用剪切粘贴等方式来进行音符放置。

### 节拍线

使用 <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd> 来调整对应编辑侧的节拍线透明度。共三档：0% / 50% / 100% 。

注意：若不存在 Timing Point 或在第一个 Timing Point 之前的拍线不会被显示。

## 其它

### 全局时间偏移

你可以使用 <kbd>U</kbd> 键来一次性调整所有音符与校时的时间。它会将所有的音符与校时所在的时间 **加上** 你填写的偏移量（通俗来讲，当该偏移量为正时，所有音符与节拍线都将往后推延一段时间），这个偏移量以毫秒记。我们建议此偏移量填写为整数。
