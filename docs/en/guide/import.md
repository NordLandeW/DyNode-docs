# Chart Import

This page contains instructions related to chart import.

Use <kbd>F2</kbd> to import charts of all supported formats. Supported chart formats include .xml, .dyn, .dy, and .osu.

:::warning
All chart import operations are **irreversible**, so please back up your project as needed before confirming the operation and saving.
:::

:::tip Merging Charts
You can use this feature to merge multiple charts without worrying about different BPM settings.

Even though we recommend that all charts have the same BPM settings before merging - as this makes it easier to edit again after merging.
:::

:::info About Dynamaker-modified
DyNode offers full support for importing Dynamaker-modified chart formats.
:::

:::info About Early Versions of Dynamaker Charts
DyNode currently cannot directly read early versions of Dynamaker chart formats.

If you encounter a related warning, try importing the chart into the latest version of [Dynamaker-modified](https://github.com/jmakxd/dynamaker-modified) and then re-export it for use in DyNode.
:::

## Importing .xml/.dy Charts When Creating a New Project

In addition to using <kbd>F2</kbd> to import .xml/.dy charts, you can also choose to import a chart file when [creating a new project](project.html).

When using this option, the imported chart information will override other information filled in when creating a new project.

If importing a .dy chart, there is no need to fill in the music file option.

:::note About the .dy Chart Format
The .dy chart format stores related files (music, background files, etc.) in Base64 format.
:::

## Importing .osu Charts

You can use <kbd>F2</kbd> to import .osu charts.

The import mode supports the basic four modes included in osu!, with special adaptation for osu!mania. This means you can use DyNode to directly convert osu!mania charts. Imported information can include all Timing Points, but will not include the chart's metadata (title, music, etc.).

DyNode currently does not support importing .osz files, as an .osz contains multiple chart difficulties. You can unzip the .osz file (an .osz is a compressed file) and then import the .osu files it contains.
