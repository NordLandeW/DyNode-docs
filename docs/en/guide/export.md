# Chart Export

This page contains instructions related to chart export.

## Exporting .xml Charts

Use <kbd>F5</kbd> to export charts in .xml format.

Exported charts can be edited, debugged, or played on the following platforms:

* Dynamite
* Dynamaker
* Dynamaker-modified

For specific contents included in the .xml chart, see [File Formats](file-formats.html#xml).

### Error Correction

If you plan to test or release the exported chart on actual devices, you can use the error correction feature during export.

By default, this feature aligns continuous notes with time differences within 2ms to the earliest position within the continuous notes, correcting timing errors of notes within 2ms.

Using this feature does not affect the chart being edited; only the exported chart will be corrected.

:::important
**Charts exported with this feature cannot be normally edited with chart editors like Dynamaker.**

Please ensure that charts exported using this feature are not re-imported for editing, such as for review or modification.
:::

### Playing on Dynamite

.xml charts can be directly imported into Dynamite for play. Read [here](https://www.bilibili.com/read/cv17021429) to learn how to import charts.

## Exporting XML Chart Format for Dynamaker-modified

Use <kbd>Ctrl+F5</kbd> to export XML charts suitable for Dynamaker-modified.

Charts exported in this format will include complete Timing information readable by Dynamaker-modified.

:::important
This chart format is **only for use** with the Dynamaker-modified chart editor.
**Charts exported in this format cannot be used for real device testing and release scenarios** in Dynamite and may suffer some precision loss.
:::
