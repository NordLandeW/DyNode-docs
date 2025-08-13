# Project

This page explains the concept of projects in DyNode.

## What a Project Contains

A DyNode project contains all the information needed to create a chart, such as difficulty, title, music, background files, timing, and the chart data itself.

Projects are saved in a compressed JSON format with the file extension `.dyn`.

:::tip
This file does not contain the actual content of the music or background files; it only stores their **relative paths**.

The music, background, and video files associated with the chart are copied to the same directory as the project file when it is saved. If these files are moved or deleted, they may fail to load, but your chart data remains intact. You can simply reload the files and save again.
:::

## Creating a New Project

Click “Create Project” on the start screen or press <kbd>Ctrl+N</kbd> in the editor to create a new project.

![](./project_create.png)

Fill in all the required information (fields marked with an asterisk are mandatory):

* **Music File\***: **Required. Choose the music file for the chart.** Most common formats are supported (.mp3, .wav, .ogg, .flac, etc.). For details on delays with .mp3 and .wav files, see [Timing](timing.md#mp3-and-wav-format-delays).
  * If you choose to import a chart from a .dy file, you do not need to fill in this field.
* Background File: Choose a background image. Common formats (e.g., .jpg, .jpeg, .png) are supported; if omitted, a plain white background is used.
* Falling Type: Select the falling note type for the left and right sides.
  - **MULTI:** Allows placement of Note, Hold, and Chain notes.
  - **PAD:** Allows placement of Note and Hold notes.
  - **MIXER:** Allows placement of Chain notes, with a slider effect.
* Chart Difficulty: Select the difficulty level of the chart.
* Chart Title: Enter the title of the chart.
* Import Chart File: If you wish to import an .xml or .dy chart file, you can select it here. If you choose to import a chart, you do not need to fill in the Falling Type, Chart Difficulty, or Chart Title fields.

After filling in all the information, click Create Project to enter the editor.

:::tip Tip on Creating Projects

We recommend keeping the project and its related files in a separate folder, using different folders for different projects. DyNode relies on this to provide many convenient features, such as quickly creating default projects, backing up projects, etc.

Before you start editing the chart, you should correctly configure [Timing](timing.html).

:::

## Opening a Project

Select “Open Existing Project” on the start screen or press <kbd>F1</kbd> in the editor to open an existing project.

You can also open a supported chart file (.xml / .dy) directly through "Open Project". This will cause DyNode to quickly create a new project and automatically associate and load the largest music/image file in the chart's folder. Projects created this way still need to be manually saved at least once to enable the auto-save feature.

## Saving a Project

Press <kbd>Ctrl+S</kbd> to save your project.

## Save Project As

Press <kbd>Ctrl+Shift+S</kbd> to save the project under a new name.
