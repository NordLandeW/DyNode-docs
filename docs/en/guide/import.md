# Chart Import

This page explains how to import charts.

Press <kbd>F2</kbd> to import charts in any of the supported formats: .xml, .dyn, .dy, or .osu.

:::warning
All chart import operations are **irreversible**. Please back up your project as needed before proceeding.
:::

:::tip Merging Charts
You can use this function to merge multiple charts without worrying about different BPM settings.

Although we recommend that all charts have the same BPM before merging for easier post-merge editing.
:::

:::info About Dynamaker-modified
DyNode fully supports importing charts in the Dynamaker-modified format.
:::

:::info About Early Versions of Dynamaker Charts
DyNode currently cannot directly read early versions of Dynamaker chart formats.

If you encounter related warnings, try importing the chart into the latest [Dynamaker-modified](https://github.com/jmakxd/dynamaker-modified) first, then re-export and import it into DyNode.
:::

## Importing .xml/.dy Charts When Creating a Project

In addition to using <kbd>F2</kbd> to import .xml/.dy charts, you can also choose to import a chart file when [creating a project](project.md#creating-a-new-project).

When using this option, the imported chart information will overwrite the other information you filled in for the new project.

If the imported chart is in .dy format, you do not need to specify a music file.

:::note About the .dy Format
The .dy chart format stores chart-related files (music, background, etc.) in Base64. 
:::

## Importing .osu Charts

You can use <kbd>F2</kbd> to import .osu charts.

The import mode supports the four basic modes included in the osu! format, with special adjustments for osu!mania. This means you can use DyNode to convert osu!mania charts. The imported information can include all Timing Points, but it will not include the chart’s metadata (such as title or music).

DyNode does not currently support importing .osz files, as an .osz contains multiple difficulty levels. You can unzip an .osz file (since it is a compressed archive) and then import the included .osu file.
