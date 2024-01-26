# Getting Started

This page aims to provide a tutorial on how to quickly get started with editing charts in DyNode.

## Download & Installation

You can download the latest version of DyNode for your platform on latest Github Release.

After downloading, extract the zip file and run `DyNode.exe` to open DyNode.

::: important
Starting from version 0.1.6, DyNode will no longer support 32-bit systems. If you need this support, you can download and use versions prior to 0.1.5.
:::
## Starting with DyNode

:::info Tip
If you plan to create a brand new empty project and use DyNode to create new charts, this section can provide guidance for a quick start.
:::

Follow these simple steps to quickly start the chart editing process.

1. [Create a new project](project.html#create-a-new-project).
2. Set the chart's Timing. See [Timing](timing.html).
3. Toggle the display of beatlines. See [Grid Snap and Beatlines](edit.html#grid-snap-and-beatlines).
4. Edit the chart. See [Chart Editing](edit.html).
5. [Save the project](project.html#save-the-project).
6. Export the .xml chart for testing in Dynamite or other game clients. See [Chart Export](export.html).
7. Publish the exported .xml chart.

Your chart is now complete!

## Starting from Dynamaker

:::info Tip
If you have previously used Dynamaker, understand the basic operation of Dynamaker, and plan to import existing projects from Dynamaker, you can quickly get started with DyNode from here.
:::

### Basic Operation

Most of DyNode's basic operations are modifications and enhancements of Dynamaker. Thus, if you are familiar with Dynamaker's operations, you should be able to quickly get started with the basic operations of DyNode.

Below are the main operational differences between DyNode and Dynamaker.

- Notes can be moved directly by dragging with the mouse, in addition to double-click snapping.
  - The movement of the beginning and end of a Hold is separate. If you want to move the entire Hold, press <kbd>Ctrl</kbd> and then drag the beginning.
  - Currently, in multi-selection mode, Hold is forced to move as a whole.
- When placing notes, press and drag the left mouse button to change the note's width, release to place the note.
- There are five editing modes, switchable with the number keys <kbd>1</kbd> ~ <kbd>5</kbd>.
  - The first four modes are similar to Dynamaker, and the fifth mode is the preview (Playback) mode. This is also the default mode when entering the editor. In this mode, you can only preview the chart; all effects are enabled, and all editor effects are disabled. Therefore, after entering the editor, you need to select mode 4 to switch to edit (Edit) mode to edit the chart.
- <kbd>C</kbd> / <kbd>V</kbd> will change the **beatline** density and subdivision method.
- By default, the top left corner of a Note shows not the Note's Bar, but the time value of the Note (in milliseconds).
- You can use <kbd>Ctrl</kbd> with drag to multi-select/deselect notes.
- You can use <kbd>Ctrl + C/X/V/Z/Y</kbd> for copy/cut/paste/undo/redo operations.
- You can use <kbd>Ctrl</kbd> + mouse wheel for rapid note flow speed adjustment. If notes are selected at this time, you can make rapid bulk width adjustments.
- You can use <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>V</kbd> to copy the width of a single note and bulk set the width of selected notes.
- Use <kbd>Ctrl</kbd> + ( <kbd>Shift</kbd> + ) arrow keys to fine-tune the position of selected notes.
- Drag the right mouse button to quickly switch the editing side.

Other basic operations/key positions are similar to Dynamaker.

### Importing Charts from Dynamaker

DyNode offers a way to directly import charts from Dynamaker.

At the start screen, you should choose "Create a project" rather than "Open an existing project." In DyNode, a project is an independent concept, and all project information is stored in files with the ".dyn" suffix in JSON format. See [Project](project.md).

![Create Project](project_create.png)

If you already have a chart being edited in Dynamaker, you can directly import the Dynamaker chart in this project creation page.

The minimum files you need for this method include:

- The chart's music file. All mainstream music formats can be used (e.g., .mp3/.flac/.wav/.ogg/.mid, etc.). For the delay issue when using .mp3 and .wav music files, you can see more on the [Timing](timing.html#mp3-and-wav-format-delay-handling-post-0-1-5) page.
- The chart's .xml/.dy file (exported from Dynamaker). Since .dy files generally already contain the music file needed for the chart, if you are using the .dy format, you may not need to fill in the music file field.

Select your chart music file in the music file field. Choose your .xml file in import chart file. If needed, you can also add a background file. **All chart configurations on the right side will be overwritten by the imported chart information**.

After completion, click create project.

You should then be able to preview the chart imported from Dynamaker normally.

### Timing and Beat Snap Divisor

Timing in DyNode differs from the concept of Bar in Dynamaker. See the Wiki's [Timing](timing) page for details.

If you have correctly set BPM in Dynamaker, you can normally import BPM (or multiple BPMs) information from various versions of Dynamaker and edit it directly in DyNode.

In **preview mode**, beatlines are not displayed by default. In this case, you should use the number keys <kbd>1</kbd> ~ <kbd>4</kbd> to switch to **edit mode** and use the **arrow keys** to display the beatlines. Similar to Dynamaker, you can use <kbd>Z/C</kbd> to switch beat snap divisor, but unlike Dynamaker, the display of beatlines changes with the beat snap divisor you use.

:::info Tip
If you are in **edit mode** but the beatlines are not displayed, you can try to check:
* Did you choose to import chart related information?
* Have you correctly configured BPM in Dynamaker-modified?
* Did you add a music file?
:::

If you want to make additional calibration to the downbeat (or first beat) in the imported Timing Points, you can try using the shortcut <kbd>T</kbd>. It will copy the latest Timing Point and add it to the time of the **selected** **single note**.

For example, a normal editing interface should look like this (with the default beat snap divisor set to 1/4):

![](bad-chart.png)

### After This...

To learn more about DyNode's changes to the editing method, visit [Chart Editing](edit).

Don't forget to save the project after creating a new one, or progress may be easily lost. See [Save Project](project.html#save-the-project).

You can use <kbd>F5</kbd> to export the chart in .xml format for importing into the game or Dynamaker for editing (if you have the correct Bar Per Minute setting).

You can use <kbd>F7</kbd> to toggle fullscreen. If you are not in paste mode, you can use <kbd>Esc</kbd> to exit DyNode.

If you changed the location of the music or image files, DyNode may encounter errors in loading files. In this case, you can use <kbd>F3</kbd> / <kbd>F4</kbd> to manually load music and image files.

If you prefer pink over blue, you can use <kbd>F9</kbd> to switch themes.

All features can be viewed on the [Shortcuts](../shortcuts) page.

You can also create charts without using Dynamaker. In this case, you need to manually configure Timing Points and all chart information. If you set Timing through osu! or other editors and do not need to work with Dynamaker, this method is recommended for chart editing. See [Timing](timing#from-osu-file-import-timing-points) page for more.

If you have more questions, you can check the [FAQ](../FAQ) page.
