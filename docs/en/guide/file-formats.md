# File Formats

This document specifies the format for project files used by DyNode, which have the `.dyn` file extension.

The format version is described as `dyn file format v1`. The `formatVersion` number is `1`.

## Conventions

`dyn file format v1` is a JSON-based file format, as specified by the [JSON standard](https://www.json.org/json-en.html).

All files using this format must use UTF-8 encoding.

Files can be stored as plain text or compressed using the ZSTD algorithm. A compressed file conforms to the `Zstandard Compression Format` standard defined by ZSTD. To determine if a file is ZSTD compressed, check the file header for the magic number (little-endian) `0xFD2FB528`. The file can be decompressed using the `ZSTD_decompress()` function from the [standard library](https://github.com/facebook/zstd/blob/dev/lib/decompress/zstd_decompress.c) provided by ZSTD.

Unless otherwise specified, all items described in this document are **required** and do not have **default values**.

## projectObject

| Key             | Value Type             | Description                                                      |
| :-------------- | :--------------------- | :--------------------------------------------------------------- |
| `version`       | String                 | The version of the DyNode application that exported the project. |
| `formatVersion` | Integer                | The version of the `dyn file format` this file corresponds to.   |
| `metadata`      | projectMetadataObject  | The project's metadata.                                          |
| `charts`        | Array of `chartObject` | A list containing one or more chart objects.                     |

```json
{
    "version": "v0.1.19",       // DyNode version
    "formatVersion": 1,         // File format version
    "metadata": {
        "stats": {
            // ...
        },                      // Project statistics
        "settings": {
            // ...
        }                       // Project settings
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

This object stores project metadata, such as editor-specific settings, window layouts, or temporary statistical data.

*   The structure and content of this object serve as a custom data area for the application. Its format may change frequently with updates to DyNode and is not bound by the other global rules of this document.
*   This document does not specify which keys or values must be included within the `projectMetadataObject`. Its content is defined entirely by the current version of DyNode.
*   As a reference implementation of this specification, DyNode will use its internal default values when parsing this object if an expected setting is not found. Therefore, the fields within this object are not required.
*   The `projectObject.metadata` key-value pair is still required. Its value can be an empty object `{}`.

:::tip Recommendation for handling projectMetadataObject
When reading a file, it is safe to ignore all content within this object.

When writing a file, it is recommended to preserve all original content of this object. It should not be modified unless the effects of changing its internal data are fully understood.
:::

## chartObject

Stores information for a chart.

| Key            | Value Type                   | Description                                               |
| :------------- | :--------------------------- | :-------------------------------------------------------- |
| `metadata`     | `chartMetadataObject`        | Metadata for the chart.                                   |
| `path`         | `chartPathObject`            | File paths required by the chart.                         |
| `timingPoints` | Array of `timingPointObject` | A list of Timing Points, **not guaranteed to be sorted**. |
| `notes`        | Array of `noteObject`        | A list of notes, **not guaranteed to be sorted**.         |

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
            "time": 0,              // Note time in ms
            "position": 2.5,        // Note position
            "width": 1.0,           // Note width
            "side": 0,              // Note falling side
            "type": 0,              // Note type
            "length": 0             // Hold duration in ms
        }, // noteObject
        // ...
    ]   // Array of noteObjects
}
```

### chartPathObject

Defines the relative paths to external files required by the chart. The path value can be an empty string `""` to indicate that the file should not be loaded.

| Key     | Value Type | Description                                 |
| :------ | :--------- | :------------------------------------------ |
| `music` | String     | Relative path to the music file.            |
| `image` | String     | Relative path to the background image file. |
| `video` | String     | Relative path to the background video file. |

### chartMetadataObject

Stores metadata related to the chart itself.

| Key          | Value Type      | Description                                                                                        |
| :----------- | :-------------- | :------------------------------------------------------------------------------------------------- |
| `title`      | String          | The display title of the chart.                                                                    |
| `difficulty` | Integer         | The difficulty of the chart. `0`: Casual, `1`: Normal, `2`: Hard, `3`: Mega, `4`: Giga, `5`: Tera. |
| `sideType`   | Array of String | The falling type for `[Left Lane, Right Lane]`. Valid values are `"PAD"`, `"MIXER"`, `"MULTI"`.    |
| `artist`     | String          | The artist of the music.                                                                           |
| `charter`    | String          | The creator of the chart.                                                                          |

### timingPointObject

Contains data for a single Timing Point.

| Key    | Value Type | Description                                                                       | Unit |
| :----- | :--------- | :-------------------------------------------------------------------------------- | :--- |
| offset | Double     | The start time of the Timing Point, with the start of the music as `0`.           | ms   |
| bpm    | Double     | Beats Per Minute.                                                                 | BPM  |
| meter  | Integer    | The time signature (`meter`/4). A value of `4` represents a `4/4` time signature. | -    |

### noteObject

Contains data for a single note.

| Key        | Value Type | Description                                                                                          | Unit / Valid Values                   |
| :--------- | :--------- | :--------------------------------------------------------------------------------------------------- | :------------------------------------ |
| `time`     | Double     | The time of the note, with the start of the music as `0`.                                            | ms                                    |
| `position` | Double     | The center position of the note. `2.5` is the center.                                                | Unit                                  |
| `width`    | Double     | The width of the note.                                                                               | Unit                                  |
| `side`     | Integer    | The target judgment area for the note.                                                               | `0` (FRONT), `1` (LEFT), `2` (RIGHT)  |
| `type`     | Integer    | The type of the note.                                                                                | `0` (NORMAL), `1` (CHAIN), `2` (HOLD) |
| `length`   | Double     | For `HOLD` type notes, this represents the hold duration. For other `type`s, this value must be `0`. | ms                                    |

:::note DyNode-based Layout Implementation
The method for converting `time` / `position` / `width` into a specific layout is not mandated by this document. For supplementation, the DyNode-based implementation for converting `position` and `width` to a screen layout is described below.

All layout descriptions below are based on a `1920 px * 1080 px` resolution. The layout is based on a 2D Cartesian coordinate system. The coordinate origin is the top-left corner at `(0,0)`, and the bottom-right corner is `(1920,1080)`.

The conversion from `width` to judgment width (in pixels) is as follows:
*   When `side` is `FRONT`, `= width * 300 - 30`.
*   When `side` is `LEFT` or `RIGHT`, `= width * 150 - 30`.

The conversion from `position`, which is centered on the layout, to a specific screen position (in pixels) is as follows:
*   When `side` is `FRONT`, the x-coordinate is based on the layout's horizontal center (860px): `= 860 + (position - 2.5) * 300`.
*   When `side` is `LEFT` or `RIGHT`, the y-coordinate is based on the layout's vertical center (540px): `= 540 + (position - 2.5) * 300`.
:::