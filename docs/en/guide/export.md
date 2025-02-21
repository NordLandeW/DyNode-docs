# Chart Export

This page explains how to export charts.

:::tip
This feature is generally used when you need to publish or import a chart for real‐device use after completing or testing it, or when switching to another chart editor.

If you only want to save your progress, please see [Saving Projects](project.md#saving-a-project).
:::

## Exporting .xml Charts for Real Devices

Press <kbd>F5</kbd> to export a chart in .xml format.

The exported chart can be played on the Dynamite platform; see [Import to Dynamite Platform](#import-to-dynamite-platform) for details.

For details on the contents of the .xml chart, see [File Formats](file-formats.md#xml).

:::important
**Charts exported using this function are not recommended for re-importing into DyNode, Dynamaker, or other chart editors. If you wish to edit an exported chart in Dynamaker, please see [Export XML Chart for Dynamaker-modified](#export-xml-chart-for-dynamaker-modified).**

Make sure that charts exported using this function will not be re-imported for editing, for example, for review or modification.
:::

### Error Correction

You can choose to use the error correction function when exporting.

By default, this function aligns consecutive notes with a time difference within 2ms to the earliest note in that group, correcting timing errors within 2ms.

You can adjust this value in the `offsetCorrection` option in the configuration (see [Configuration](configuration.md#offsetCorrection)).

This function does not affect the chart in editing; only the exported chart is corrected.

### Import to Dynamite Platform

An .xml chart can be directly imported into Dynamite for play. Read [this article](https://www.bilibili.com/read/cv17021429) for details on how to import a chart.

## Export XML Chart for Dynamaker-modified

Press <kbd>F6</kbd> to export a chart in the XML format tailored for Dynamaker-modified.

Charts exported in this format will include complete Timing information that can be read by Dynamaker-modified.

:::important
This chart format is **only for** reading by the Dynamaker-modified chart editor.

Charts exported in this format cannot be used for real‐device debugging or publishing (e.g., on Dynamite) and may suffer from a certain loss of precision.
:::
