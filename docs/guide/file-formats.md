# 文件格式

本页面旨在规定 DyNode 使用的项目文件的格式，文件后缀为 `.dyn`。

格式版本描述为 `dyn file format v1` 。`formatVersion` 版本号为 `1`。

:::info 关于项目降级

在 v0.2.0 之前的 DyNode 使用的格式版本描述为 `dyn file format v0`。`v1` 相对于 `v0` 版本的项目格式产生了重大变动，因此无法使用 v0.1 版本载入 `dyn file format v1` 格式的项目文件。

DyNode 目前并未支持任何情况下的项目降级功能。如果你需要将项目降级并导入较早的版本使用，可以将项目 [导出](/guide/export.md) 到 Dynamaker-modified 格式后再在较早的版本新建项目导入。

:::

## 约定

`dyn file format v1` 是一个基于 JSON 的文件格式，见 [JSON 标准](https://www.json.org/json-en.html)。

使用该格式的所有文件应当使用 UTF-8 编码。

文件可以以纯文本方式或经 ZSTD 算法压缩后存储。经过压缩后的文件符合 ZSTD 规定的标准 `Zstandard Compression Format` 。可以通过检查文件头的魔法数（小端序） `0xFD2FB528` 来判断文件是否经过了 ZSTD 压缩，并通过 ZSTD 提供的 [标准库](https://github.com/facebook/zstd/blob/dev/lib/decompress/zstd_decompress.c) 函数 `ZSTD_decompress()` 对文件进行解压。

本文档所描述的所有项在未经特别说明的情况下，都是**必需**且不具备**默认值**的。

## projectObject

|      键值       |         值类型         | 描述                                      |
| :-------------: | :--------------------: | :---------------------------------------- |
|    `version`    |         String         | 表示导出该项目的 DyNode 应用程序版本。    |
| `formatVersion` |        Integer         | 表示该文件对应的 `dyn file format` 版本。 |
|   `metadata`    | projectMetadataObject  | 项目的元信息。                            |
|    `charts`     | Array of `chartObject` | 包含一个或多个谱面对象的列表。            |

```json
{
    "version": "v0.1.19",       // DyNode 版本
    "formatVersion": 1,         // 文件格式版本
    "metadata": {
        "stats": {
            // ...
        },                      // 项目统计信息
        "settings": {
            // ...
        }                       // 项目设置
    },                          // projectMetadataObject
    "charts": [
        {
            // ...
        },                      // chartObject
        // ...
    ]   // Array of chartObjects
}
```

## projectMetadataObject

用于存储项目的元信息，例如编辑器特定的设置、窗口布局、或临时的统计数据。

* 此对象的结构和内容作为应用程序的自定义数据区，其格式可能会随 DyNode 版本的更新而频繁变更，其不受本文档的其它全局规则约束。
* 本文档不规定 `projectMetadataObject` 内部必须包含哪些键或值。其内容完全由当前的 DyNode 版本进行定义。
* 作为此规范的参考实现，DyNode 在解析此对象时，如果找不到预期的设置项，会使用其内部的默认值。因此，此对象内部的字段不是必需的。
* `projectObject.metadata` 这个键值对仍然是必需的。其值可以是一个空对象 `{}`。

:::tip 处理 projectMetadataObject 时的建议
在读取文件时，可以安全地忽略此对象内的所有内容。

在写入文件时，建议完整地保留此对象内在读入时的所有内容。除非非常清楚修改其内部数据的对应效果，否则不应更改它。
:::


## chartObject

用于存储谱面信息。


|      键值      |            值类型            | 描述                                |
| :------------: | :--------------------------: | :---------------------------------- |
|   `metadata`   |    `chartMetadataObject`     | 谱面的元信息。                      |
|     `path`     |      `chartPathObject`       | 谱面所需的文件路径。                |
| `timingPoints` | Array of `timingPointObject` | Timing Point 列表，**不保证有序**。 |
|    `notes`     |    Array of `noteObject`     | 音符列表，**不保证有序**。          |

```json
{
    "metadata" : {
        "title": "Bitcrusher",
        "difficulty": 0,                // Integer
        "sideType": [
            "PAD",
            "PAD"
        ],  // Array of string
        "artist": "namitape",
        "charter": "somebody"
    },   // chartMetadataObject
    "path" : {
        "music": "audio.mp3",         // Relative path
        "image": "bg.png",
        "video": "bg.mp4"
    },  // chartPathObject
    "timingPoints" : [
        {
            "offset": 0,
            "bpm": 120,
            "meter": 4
        },  // timingPointObject
        // ...
    ],   // Array of timingPointObjects
    "notes" : [
        {
            "time": 0,              // Note 时间，ms
            "position": 2.5,        // Note 位置
            "width": 1.0,           // Note 宽度
            "side": 0,              // Note 下落侧
            "type": 0,              // Note 类型
            "length": 0             // Hold 长度, ms
        }, // noteObject
        // ...
    ]   // Array of noteObjects
}
```

### chartPathObject

定义谱面所需的外部文件相对路径。路径值可留空字符串 `""`，表示不加载该文件。

|  键值   | 值类型 | 描述                     |
| :-----: | :----: | :----------------------- |
| `music` | String | 音乐文件的相对路径。     |
| `image` | String | 背景图片文件的相对路径。 |
| `video` | String | 背景视频文件的相对路径。 |

### chartMetadataObject

用于存储与谱面本身有关的元信息。

|     键值     |     值类型      | 描述                                                                       |
| :----------: | :-------------: | :------------------------------------------------------------------------- |
|   `title`    |     String      | 谱面显示的标题。                                                           |
| `difficulty` |     Integer     | 谱面难度。`0`:Casual, `1`:Normal, `2`:Hard, `3`:Mega, `4`:Giga, `5`:Tera。 |
|  `sideType`  | Array of String | `[左侧, 右侧]` 的下落类型。有效值为 `"PAD"`, `"MIXER"`, `"MULTI"`。        |
|   `artist`   |     String      | 音乐的艺术家。                                                             |
|  `charter`   |     String      | 谱面的制作者。                                                             |

### timingPointObject

包含单个 Timing Point 的数据。

|  键值  | 值类型  | 描述                                                                   | 单位  |
| :----: | :-----: | :--------------------------------------------------------------------- | :---: |
| offset | Double  | Timing Point 开始时间，以音乐起点为 `0`。                              | 毫秒  |
|  bpm   | Double  | 每分钟节拍数 (Beats Per Minute)。                                      |  BPM  |
| meter  | Integer | 节拍记号 (`meter`/4)。当值为 `4` 时，代表该 Timing Point 为 `4/4` 拍。 |   -   |

### noteObject

包含单个音符的数据。

|    键值    | 值类型  | 描述                                                                       | 单位/有效值                           |
| :--------: | :-----: | :------------------------------------------------------------------------- | :------------------------------------ |
|   `time`   | Double  | Note 所在的时间。以音乐起点为 `0`。                                        | 毫秒                                  |
| `position` | Double  | Note 中心的位置。`2.5` 为中心。                                            | Unit                                  |
|  `width`   | Double  | Note 的宽度。                                                              | Unit                                  |
|   `side`   | Integer | Note 所在的侧面。                                                          | `0` (FRONT), `1` (LEFT), `2` (RIGHT)  |
|   `type`   | Integer | Note 的类型。                                                              | `0` (NORMAL), `1` (CHAIN), `2` (HOLD) |
|  `length`  | Double  | `type` 为 `HOLD` 时，代表长按的持续时间。对于其他 `type`，此值必须为 `0`。 | 毫秒                                  |


:::note 基于 DyNode 的布局实现
将 `time` / `position` / `width` 转换到具体布局的实现方式不为本文档所强制规定。作为补充，下方描述 `position` 与 `width` 转换到屏幕布局的基于 DyNode 的实现。

下方所有有关布局的描述基于 `1920 px * 1080 px` 分辨率。布局基于平面直角坐标系。坐标以左上角为 `(0,0)`，以右下角为 `(1920,1080)`。

其中，`width` 到判定宽度（以像素为单位）的换算方式是：
* 当 `side` 为 `FRONT` 时，`= width * 300 - 30`。
* 当 `side` 为 `LEFT` 或 `RIGHT` 时，`= width * 150 - 30`。

`position` 以布局中央为中心，到具体屏幕位置（以像素为单位）的换算方式是：
* 当 `side` 为 `FRONT` 时，横坐标基于布局横向中央 (860px) `= 860 + (position - 2.5) * 300`。
* 当 `side` 为 `LEFT` 或 `RIGHT` 时，纵坐标基于布局纵向中央 (540px) `= 540 - (position - 2.5) * 150`。
:::