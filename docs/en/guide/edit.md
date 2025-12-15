# Chart Editing

This page explains the basic elements of chart editing in DyNode.

## Editing Modes

DyNode has five editing modes, which you can switch between using the number keys <kbd>1</kbd> through <kbd>5</kbd>.

* **Placement Mode:** Use number keys <kbd>1</kbd>–<kbd>3</kbd> to place notes. See [Placing Notes](#placing-notes).
* **Edit Mode:** Press <kbd>4</kbd> to edit notes, such as selecting, modifying, or deleting them. See [Notes](#notes).
* **Playback Mode:** Press <kbd>5</kbd> to preview the chart. In this mode all effects are enabled and editing features are disabled.

:::tip Tip on Chart Optimization

DyNode has optimized the rendering method for playback mode. Only in this mode can DyNode efficiently render a large number of objects.

While DyNode can still handle editing a large number of objects, an excessive number of on-screen notes in non-playback modes will significantly increase the performance load on DyNode. Therefore, when editing charts in non-playback modes, it is recommended to keep the density of on-screen notes within a reasonable range.

:::

## Notes

There are three types of notes:

- **Note (Tap):** A single-tap note, the most basic type.
- **Chain (Slide):** A slide note that registers as long as there is a continuous touch.
- **Hold:** A note that must be held until its tail is reached and then released.

In addition, the XML data format includes an extra type:

- **Sub:** The tail note of a Hold, where only the timing data is meaningful.

### Placing Notes

1. Press the number keys <kbd>1</kbd>–<kbd>3</kbd> to select the note type you wish to place.
2. Locate the desired position and, for a Note, press and hold while dragging to adjust its length, then release to place it.
3. If placing a Hold note, after placing the head, continue to select the tail and tap to place it.

The width of the last manually placed single note will become the _default width_ for subsequent note placements.

:::center
![Place Note](drop-a-note.gif =400x)

![Place Hold](drop-a-hold.gif =400x)
:::

### Moving Notes

Simply drag to move.

To move an entire Hold note, if only a single Hold is selected, hold <kbd>Ctrl</kbd> and drag its head. In multi-select mode, a Hold note will be moved as a whole.

:::center
![Drag Note](drag_note.gif =400x)
:::

### Selecting Notes

Click on a single note or drag a selection box with the mouse to select multiple notes.

You can hold <kbd>Ctrl</kbd> to individually click or box-select notes to add or remove them from the selection.

:::center
![Multi-select Notes](select_note_2.gif =400x)
:::

### Snapping Notes

Double-click a note.

When snapping multiple selected notes, the double-clicked note becomes the snap center.

Clicking again will place the snapped notes.

:::center
![Snap Notes](double_click.gif =400x)
:::

You can use <kbd>Ctrl + ←/→</kbd> or <kbd>Alt + Mouse Wheel</kbd> to change the snap center note.

### Batch Operations

#### Batch Moving / Snapping Notes

After selecting notes, drag them with the mouse or use the snap function to move all selected notes simultaneously.

#### Batch Deleting Notes

After selecting notes, press <kbd>Backspace</kbd> or <kbd>Delete</kbd> to delete them.

#### Batch Adjusting Note Widths

After selecting notes, hold <kbd>Ctrl</kbd> and use the mouse wheel to quickly adjust their width, or use <kbd>Ctrl+V</kbd> to paste the _default width_.

#### Copying Note Width

After selecting a **single** note, use <kbd>Ctrl+C</kbd> to copy its width as the new _default width_.

#### Copying Notes

After selecting notes, press <kbd>Ctrl+C</kbd> to copy them; a prompt will indicate the number of notes copied.

:::center
![Copy Notes](select_note.gif =400x)
:::

Use <kbd>Ctrl+D</kbd> to quickly duplicate the selected notes to the next beat following the latest note among them.

:::center
![Quick Duplicate Notes](quick_duplicate.gif =600x)
:::

#### Pasting Notes

After copying notes, press <kbd>Ctrl+V</kbd> and click where you wish to place the copied notes, just as if placing new notes.

When pasting, the note with the earliest time among the copied ones is used as the center. If you wish to change this center (for example, to use the last note as the center), use <kbd>Ctrl</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd> to switch.

You can press <kbd>Esc</kbd> to exit paste mode, or simply switch modes with the number keys.

You can also use <kbd>Up</kbd> or right-click to change the falling side for the paste.

You can use <kbd>Ctrl+1</kbd>/<kbd>2</kbd> to batch-convert the pasted notes.

:::center
![Paste Notes](paste_note.gif =400x)
:::

### Multi-select Across Sides

Switching the editing side does not clear the current selection, so you can select notes from different sides simultaneously. For example, after selecting multiple notes on the left, you can switch to the front and hold <kbd>Ctrl</kbd> to continue selecting notes there.

Selected notes can still be subject to batch operations such as copy, paste, snapping, dragging, and width adjustment. However, when multi-selecting across sides, the behavior and logic of editing may change.

:::center
![Multi-select Across Sides](multiside-select.gif =400x)
:::

#### Toggling Multi-select Binding Across Sides

By default, when multi-selecting notes across sides, the properties of all selected notes are bound together. This means that if you drag a note on the front, the notes on the side will move accordingly.

If you wish to avoid this, press <kbd>B</kbd> to unbind the properties. In this case, only notes on the current editing side will be moved.

This function currently only takes effect during note dragging.

### Select All Notes

Press <kbd>Ctrl+A</kbd> to select all notes within the visible area of the screen.

### Mirror / Symmetrical Notes

After selecting notes, press <kbd>M</kbd> to mirror them about the center of the current editing side. Press <kbd>Ctrl+M</kbd> to mirror-copy the selected notes.

After selecting side notes, press <kbd>R</kbd> to symmetrically move the notes to the opposite side. Press <kbd>Ctrl+R</kbd> to symmetrically duplicate the notes.

### Undo and Redo

Use <kbd>Ctrl+Z</kbd> to undo and <kbd>Ctrl+Y</kbd> to redo your actions.

## Default Width

The default width is the width setting from the last single note you placed.

### Setting the Default Width

When placing a **single note**, you can drag horizontally (or vertically) to adjust the default width.

You can also press <kbd>K</kbd> to manually input your desired default width value. This will update the default width for the **current editing side**.

Alternatively, after selecting a **single note**, use <kbd>Ctrl+C</kbd> to copy its width as the new default width.

### Default Width Mode

DyNode provides four modes for setting the default note width. In Dynamix, for the front side, the width is set in pixels, while for the side the width is half that of the front when set to the same value. For example, if both front and side notes are set to a width of `1.0`, the front note will be 300 pixels wide, while the side note will be 150 pixels wide. This also affects the game's hit detection.

Press <kbd>L</kbd> to change the default width mode. There are four modes in total, and the default width settings in each mode are kept separate. In other words, changing the default width in one mode does not affect the others, so you can switch between modes as needed.

#### Uniform Width

This is the default mode in DyNode. In this mode, the default widths for the front and side are bound together and remain equal.

:::tip
This is also the method used by Dynamaker for handling default widths. If you feel this feature is too complex and unhelpful, you need not change the default width mode.
:::

#### Visually Consistent

In this mode, the default widths for the front and side are bound together, and the side's default width is always twice that of the front.

For example, if you change the front default width to 1.0, the side's default width will automatically change to 2.0, and vice versa.

:::tip
Unlike the other modes, in the visually consistent mode, pasted/snapped notes will automatically adjust their width to remain visually consistent.

:::center
![](visual-consistency.gif =400x)
:::

#### Front and Side Separated

In this mode, the default widths for the front and side are separate, but the default widths for the left and right sides are bound together.

In other words, changing the default width for the front will not affect that for the side, and vice versa.

#### All Sides Separated

In this mode, the default widths for all editing sides are completely independent.

That is, changing the default width on any editing side will not affect the others.

## Editing Side

### Switching Editing Sides

Use <kbd>Up</kbd> or right-click drag to switch the editing side.

The highlighted timing line indicates the side you are currently editing.

The available editing sides are:
- Front
- Left
- Right
- [Dual-sided Editing](#dual-sided-editing)

:::center
![Switch Editing Side](switch_side.gif =400x)
:::

### Dual-sided Editing

Additionally, you can swipe up using <kbd>Up</kbd> or right-click drag to switch to dual-sided editing, where you can seamlessly edit notes on both the left and right sides simultaneously.

In this mode, some editing interactions may change.

### Fading Non-Editing Side Notes

Press <kbd>F</kbd> to fade out notes that are not on the active editing side.

:::center
![](side_faded.gif =400x)
:::

### Toggling Falling Note Type for a Side

After switching the editing side to Left or Right, press <kbd>Ctrl+F</kbd> to toggle the falling note type for that side.

- **MULTI:** Allows placement of Note, Hold, and Chain notes.
- **PAD:** Allows placement of Note and Hold notes.
- **MIXER:** Allows placement of Chain notes, with a slider effect.

In the current version, there are no strict restrictions on the types of notes placed in these modes.

## Grid Snapping and Beat Lines

To enable vertical grid snapping and beat lines, you must correctly configure Timing Points. See the [Timing](timing.html) page for details.

### Beat Lines

:::tip Note
If there are no Timing Points, beat lines will not be displayed.
:::

Use <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd> to adjust the beat line opacity for the corresponding editing side. There are three settings: 0%, 50%, and 100%.

### Beat Line Styles

Press <kbd>J</kbd> to change the beat line style. There are four styles in total: Default, Uniform, Monochrome, and Classic.

In Uniform mode, all beat lines have the same length. In Monochrome mode, beat lines do not have a color.

Classic mode enables both Uniform and Monochrome styles.

### Beat Subdivision (Grouping)

Press <kbd>C</kbd> / <kbd>V</kbd> to change the subdivision density of the beat lines.

Press <kbd>G</kbd> to toggle beat grouping.

Currently supported subdivisions include:

- **Group A:** Based on 1/2 and 1/3 subdivisions, including 1/4, 1/8, 1/6, 1/12, etc.
- **Group B:** Based on the less common 1/5 and 1/7 subdivisions, including 1/10, 1/14, 1/20, etc.

### Custom Beat Subdivision

Press <kbd>`</kbd> to set a custom beat subdivision of the form 1/x, where x is any valid (≥1) positive integer.

### Toggling Grid Snapping

Press <kbd>Z</kbd> to toggle vertical (time) grid snapping.

Press <kbd>X</kbd> to toggle horizontal (position) grid snapping.

## Editing Interface

### Playback Preview

Press <kbd>Enter</kbd> to preview your chart from the beginning.

This will switch the editor to Playback mode. See [Editing Modes](#editing-modes) for details.

### Setting a Background Image

Press <kbd>F4</kbd> to set a background image.

Background images can be common formats such as JPG, JPEG, or PNG.

### Setting a Background Video

Press <kbd>F4</kbd> to import a background video. The imported video will play without sound and only during [Playback mode](#editing-modes).

DyNode imposes some requirements on the video format. It is recommended to transcode and compress the video file. You can refer to [this guide](https://osu.ppy.sh/wiki/zh/Guides/Compressing_files#video) for details on processing videos.

If you use [FFmpeg](https://ffmpeg.org/) for video processing, you may use the following command:
```bash
ffmpeg -i input -c:v libx264 -crf 20 -preset fast -an -sn -map_metadata -1 -map_chapters -1 -vf scale=-1:720 output.mp4
```

If FFmpeg is installed and added to your PATH, you can save this command in a file with a `.bat` extension and run it.

Replace `input` with the name of your video file (e.g., `video.mp4`). The command will output a transcoded video file named `output.mp4` in the same folder.

:::important
Before setting a background video, make sure you have transcoded it into a supported format as described above.

If you encounter issues with background videos, such as:

* Specific videos timing out during import (your video format may not be supported)
* All videos timing out during import
* Video stuttering or significant audio-video desynchronization

try saving the project and **restarting the application**. If problems persist, you may choose to **reset the background** to remove the current image/video, or try using a different background video file.
:::

### Resetting the Background

Press <kbd>Ctrl+F4</kbd> to reset all backgrounds, including images and videos.

Resetting the background does not affect the files on your disk.

### Toggling Between Bar Number and Time Display

:::tip
Configure Timing correctly to display bar numbers.
:::

Press <kbd>Ctrl+B</kbd> to switch the note display from milliseconds to bar numbers.

For details on bar numbers, see [Timing/Time and Bar Number](timing.md#time-and-bar-numbers).

## Delay Adjustment

You can adjust the delay for music playback and note timings separately in DyNode.

### Batch Adjusting Note Times

Press <kbd>-/=</kbd> to quickly adjust the time of all notes in the current chart.

Press <kbd>U</kbd> to manually input a precise time adjustment (in milliseconds).

:::note
This function adjusts the time of all **existing** notes and Timing Points in the chart.

DyNode adds the specified time to the time of all notes and Timing Points in the chart.

For example, if a note originally occurs 150ms after the start, and you input 30ms, the note's new time will be 180ms after the start.

This function is useful for adjusting the chart to match device playback delays.
:::

### Adjusting Device Music Playback Delay

Press <kbd>Ctrl + -/=</kbd> to quickly adjust the music playback delay for your device.

:::note
This delay is added to the inherent MP3 delay (`FMOD_MP3_DELAY`) and is saved in the configuration.

This setting only affects the delay when DyNode plays music; it does not affect exported chart data.

For more details, see [Timing](timing.md#mp3-and-wav-format-delays) and [Configuration](configuration.md).
:::

## Toolbar

Press <kbd>Tab</kbd> to toggle the display of the top toolbar.

### Music / Hit Sounds

Use the top toolbar to adjust the music and hit sound volumes.

Press <kbd>Ctrl+H</kbd> to toggle hit sounds.

### Background Brightness

Use the top toolbar to adjust the background brightness.

### Disable Pitch Change

:::warning
This is an experimental feature.
:::

Use the disable pitch change option to prevent music from changing pitch when its speed is altered.

## Other

### Chart Statistics

Press the <kbd>Middle Mouse</kbd> button to display chart statistics, which include:
* The BPM at the current time
* Note count statistics
* Project run time
* Notes per second (KPS)
  * Measured over a 400ms window
  * In non‐playback mode, notes from the current time forward are measured
  * In playback mode, notes from the current time backward are measured

### Auto‐saving Projects

Press <kbd>F8</kbd> to enable auto‐saving of projects.

By default, the project is auto‐saved every three minutes. Auto‐saves back up the previous project files into a subfolder named `backups` in the current directory.

To enable auto‐saving, you must save the project manually at least once.

You can adjust this interval via the `autoSaveTime` option in [Configuration](configuration.md#autosavetime).

### Record Chart to Video

Use <kbd>TAB</kbd> to open the toolbar and select `Record Chart to Video`.

Powered by FFmpeg's encoding capabilities, this feature renders the chart preview directly to a video at specified settings (defaulting to 1080p@60FPS) and with the current editor interface settings (such as note flow speed, particle effects, etc.) at medium-high quality. When using this feature, the background video will be played back at the rendering speed, and any previously set music speed multipliers will be ignored. All input operations will be locked during the recording process.

DyNode will automatically detect the availability of encoders and prioritize system-supported hardware acceleration and HEVC encoding.

:::tip How to check if FFmpeg is installed correctly?

This feature requires an environment where FFmpeg is installed. For example, on Windows 11, you can right-click the "Start Menu," select "Terminal," and enter the following command to check FFmpeg's availability.

```
ffmpeg -version
```

If the output shows `ffmpeg version ...`, it means FFmpeg is installed correctly. Otherwise, FFmpeg is not properly configured in your environment, and DyNode cannot call it to support this feature.

You can use the following command to quickly install FFmpeg. After installation, restart the terminal and use the command above again to check if FFmpeg is installed correctly.
```
winget install --id Gyan.FFmpeg --source winget
```

After installing FFmpeg, if DyNode is still running, you need to restart DyNode for it to correctly recognize the newly installed FFmpeg path.
:::

### Fullscreen Mode

Press <kbd>F7</kbd> to toggle borderless fullscreen mode.

### Changing the Chart Title

Press <kbd>Ctrl+T</kbd> to change the chart title.

:::tip Want to use Scribble's formatting tags?
Simply include `[_scribble]` anywhere in the title. The title will then be parsed using Scribble's string formatting.
:::

### Changing Chart Difficulty

Press <kbd>Ctrl+O/P</kbd> to change the chart difficulty.
