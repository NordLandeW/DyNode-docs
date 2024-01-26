# Chart Editing

This page explains the basic elements of chart editing in DyNode.

## Editing Modes

DyNode has five editing modes, which can be switched using the number keys <kbd>1</kbd> to <kbd>5</kbd>.

* Placement Mode: Use number keys <kbd>1</kbd> to <kbd>3</kbd> to place notes. See [Placing Notes](#placing-notes).
* Editing Mode: Use number key <kbd>4</kbd> for editing notes, such as selecting, editing, deleting notes, etc. See [Notes](#notes).
* Preview Mode: Use number key <kbd>5</kbd> to preview the chart. All effects are enabled by default, and all editing features are disabled in this mode.

## Notes

There are three types of notes.

- Note (Tap): Basic single tap notes.
- Chain (Slide): Slide notes that are judged as long as the finger is placed.
- Hold: Notes that are held until the end is judged and then released.

Additionally, in the XML format data storage, there is an extra type:

- Sub: The tail note of a Hold, only the timing data is meaningful.

### Placing Notes

1. Switch to the note type you want to place using number keys <kbd>1</kbd> to <kbd>3</kbd>.
2. Find the position you want to place the note, hold and drag the Note to adjust its length, then release to place.
3. If placing a Hold, continue to select the tail of the Hold and tap to place.

The width of the last manually placed single note will be the _default width_ for the next note placement.

:::center
![Drop a note](drop-a-note.gif =400x)

![Drop_a_hold](drop-a-hold.gif =400x)
:::

### Moving Notes

Drag to move.

To move a Hold note as a whole, hold <kbd>Ctrl</kbd> and drag the head of the Hold when a single Hold is selected. In multi-selection, Hold notes will be moved as a whole by default.

:::center
![Drag a note](drag_note.gif =400x)
:::

### Selecting Notes

Drag to select.

You can hold <kbd>Ctrl</kbd> to multi-select or deselect notes.

:::center
![Multiselect](select_note_2.gif =400x)
:::

### Snapping Notes

Double-click a note.

When snapping multiple selected notes, the double-clicked note becomes the center of snapping.

Click again to place the snapped notes.

:::center
![Attach](double_click.gif =400x)
:::

### Bulk Operations

#### Bulk Move / Snap Notes

Drag / snap the selected notes using the mouse.

#### Bulk Delete Notes

Press <kbd>Backspace</kbd> or <kbd>Delete</kbd> after selecting notes.

#### Bulk Adjust Note Width

After selecting notes, use <kbd>Ctrl</kbd> and the mouse wheel to quickly adjust the width of notes, or use <kbd>Ctrl</kbd> + <kbd>V</kbd> to quickly paste the _default width_.

#### Copy Note Width

After selecting a **single** note, use <kbd>Ctrl</kbd> + <kbd>C</kbd> to set its width as the _default width_.

#### Copy Notes

After selecting notes, press <kbd>Ctrl</kbd> + <kbd>C</kbd>, and the number of copied notes will be displayed in the bottom right corner.

:::center
![Copy](select_note.gif =400x)
:::

#### Paste Notes

After copying notes, press <kbd>Ctrl</kbd> + <kbd>V</kbd>, and place the copied notes as you would normal notes.

By default, the earliest note is used as the center of selection when pasting. If you want to change this center (e.g., use the last note as the center), switch with <kbd>Ctrl</kbd> + <kbd>Left</kbd>/<kbd>Right</kbd>.

Use <kbd>Esc</kbd> to exit pasting mode, or directly switch modes using number keys.

Use <kbd>Up</kbd> or <kbd>Right-click</kbd> to switch the side you want to paste to.

Use <kbd>Ctrl</kbd> + <kbd>1</kbd>/<kbd>2</kbd> to bulk convert the notes you want to paste.

:::center
![Paste](paste_note.gif =400x)
:::

### Multi-Side Selection

Switching the editing side does not cancel the selection of notes, so you can multi-select notes on different sides. For example, after selecting multiple notes on the left side, you can switch to the front and continue to multi-select multiple notes while holding the <kbd>Ctrl</kbd> key.

Notes can still be operated in bulk, such as copying, pasting, snapping, dragging, adjusting width, etc. However, in multi-side selection, the behavior and logic of editing may vary.

:::center
![](multiside-select.gif =400x)
:::

#### Multi-Side Selection Property Binding

By default, when multi-selecting across different sides, all selected notes' properties are linked. If you drag a note on the front, the side notes will also move accordingly.

To avoid this, use <kbd>B</kbd> to unlink the properties. Then, only notes on the current editing side can be dragged.

In [Dual-Side Editing](#dual-side-editing), notes on the left and right sides are not considered different sides for this feature.

This feature is currently only effective when dragging notes.

### Select All Notes

Use <kbd>Ctrl+A</kbd> to select all notes.

:::warning
Selecting more than 500~1000 notes may cause severe performance issues.
:::

### Symmetry / Mirror Notes

After selecting notes, use <kbd>M</kbd> to mirror notes centered on the editing side. Use <kbd>Ctrl+M</kbd> to mirror copy notes.

After selecting **side** notes, use <kbd>R</kbd> to symmetrically move notes to the other side. Use <kbd>Ctrl+R</kbd> to symmetrically copy notes.

### Undo and Redo

Use <kbd>Ctrl</kbd> + <kbd>Z</kbd>/<kbd>Y</kbd> to undo and redo.

## Default Width

The default width is the width set for the **single note** placed.

### Setting Default Width
You can simply change the default width by dragging horizontally (or vertically) when placing a **single note**.

You can also use <kbd>K</kbd> to directly input your desired default width value. It will modify the default width value of the **current editing side**.

You can also copy the width of a **single note** using <kbd>Ctrl+C</kbd> to set it as the default width.

### Setting Default Width Mode

DyNode offers four modes for setting the default width. In Dynamix, the same width setting for the front and side results in half the pixel width for the side notes. For example, with a width of `1.0` for both the front and side, the front note width is `300` pixels, but the side note width is only `150` pixels. This is also reflected in the game's judgment.

Use <kbd>L</kbd> to change the mode for setting the default width. There are four modes, and the default width settings for each mode are separate (in other words, changing the default width in one mode will not affect the default width in any other mode), allowing you to switch modes flexibly based on the situation.

#### Width Consistent
This is DyNode's default mode for setting the default width. In this mode, the default widths of the front and sides are bound in real-time and are completely equal.

:::tip
This is also the default method used by Dynamaker for handling default width settings for the front and side. If you find this feature too complex and unhelpful, you don't need to change the default width mode.
:::

#### Visually Consistent
In this mode, the default widths of the front and sides are bound in real-time, and the side width is always twice that of the front.

For example, if you change the default width to 1.0 on the front, the side width will also change to 2.0 simultaneously, and vice versa.

This mode ensures that the notes placed on all three sides are visually equal in width.

:::tip
Unlike other modes, in this default width mode, pasted/snapped notes will also automatically adjust their width to maintain visual consistency.

:::center
![](visual-consistency.gif =400x)
:::

#### Front/Side Separation
In this mode, the default widths of the front and sides are separate, but the default widths of the left and right sides are still bound in real-time.

In simpler terms, changing the default width on the front will not affect the side, and vice versa.

#### Tri-Side Separation
In this mode, the default widths of all editing sides are separate.

In simpler terms, changing the default width on any side will not affect the other sides.

## Editing Side

### Switching Editing Side

Use <kbd>Up</kbd> or <kbd>Right-click</kbd> drag to switch the editing side.

The lit judgment line represents the side you are editing.

Possible editing sides include:
- Front
- Left
- Right
- [Dual-Side](#dual-side-editing)

:::center
![Switch side](switch_side.gif =400x)
:::

### Dual-Side Editing

Additionally, you can switch to dual-side editing by swiping up with <kbd>Up</kbd> or <kbd>Right-click</kbd>, allowing you to seamlessly edit notes on both left and right sides at the same time.

In this mode, some of the editing interaction logic may change.

### Fading Non-Editing Side Notes

Press <kbd>F</kbd> to hide notes on the non-editing sides.

:::center
![Fade side](side_faded.gif =400x)
:::

### Switching Side Fall Type

After switching to the left or right side, press <kbd>Ctrl</kbd> + <kbd>F</kbd> to change the fall type of that side.

- MULTI: Can place Note, Hold, and Chain types of notes.
- PAD: Can place Note and Hold types of notes.
- MIXER: Can place Chain type of notes, with a slider.

The current version does not strictly limit the placement of notes in these three modes.

## Grid Snapping and Beat Lines

Correctly configuring Timing Points is a prerequisite for enabling vertical grid snapping and beat lines. See the [Timing](timing) page for more details.

### Beat Lines

:::tip
If there are no Timing Points, beat lines will not be displayed.
:::
Use <kbd>↓</kbd> / <kbd>←</kbd> / <kbd>→</kbd> to adjust the opacity of beat lines for the corresponding editing side. There are three levels: 0% / 50% / 100%.

### Beat Line Style

Use <kbd>J</kbd> to change the style of beat lines. There are four styles: Default / Equal Length / Monochrome / Classic.

In Equal Length mode, all beat lines are the same length. In Monochrome mode, the beat lines are colorless.

Classic mode activates both Equal Length and Monochrome modes.

### Beat Subdivision (Group)

Use <kbd>C</kbd> / <kbd>V</kbd> to change the granularity of beat subdivision.

Use <kbd>G</kbd> to switch beat grouping.

Currently supported beat subdivisions include:

- Group A: Based on 1/2, 1/3 subdivisions, including 1/4, 1/8, 1/6, 1/12, etc.
- Group B: Less common subdivisions based on 1/5, 1/7, including 1/10, 1/14, 1/20, etc.

### Custom Beat Subdivision

Use <kbd>`</kbd> to set a custom beat subdivision $1/x$. Here $x$ can be any legitimate (≥1) positive integer.

### Grid Snapping Toggle

Use <kbd>Z</kbd> to toggle vertical (time) grid snapping.

Use <kbd>X</kbd> to toggle horizontal (position) grid snapping.

## Editing Interface

### Playback Preview

Use <kbd>Enter</kbd> to start previewing your chart from the beginning.

This will set your editing mode to Preview Mode. See [Editing Modes](#editing-modes).

### Setting Background Image

Use <kbd>F4</kbd> to set a background image.

Background images can be common image formats, such as JPG/JPEG/PNG files.

### Setting Background Video

Use <kbd>F4</kbd> to import a background video. The imported background video will not play sound and will only be played in [Preview Mode](#editing-modes).

DyNode has certain requirements for the format of imported background videos. We recommend processing and compressing video files before use. You can find detailed methods for handling video files in [this guide](https://osu.ppy.sh/wiki/Guides/Compressing_files#video).

If you process videos with [FFmpeg](https://ffmpeg.org/), you can refer to the following command line:
```bash
ffmpeg -i input -c:v libx264 -crf 20 -preset fast -an -sn -map_metadata -1 -map_chapters -1 -vf scale=-1:720 output.mp4
```

If you have installed FFmpeg and set its installation path to PATH, you can save this command in a text file with a `.bat` extension and execute it.

You should replace `input` in the command with the name of the video file you want to encode (like `video.mp4`). The command will export the converted video file `output.mp4` in the same folder.

:::important
Before setting a background video, ensure you have processed the video file according to the above guidelines.

If you encounter any of the following problems when using background videos, including but not limited to, try saving the project and **restarting the application**. If the problem persists, you can choose to **reset the background** to delete the set images and videos, or try replacing the background video file:

* Specific video import timeout (your video file format may not be supported)
* Timeout for all video imports
* Video stuttering, severe audio-visual desynchronization

:::

### Reset Background

Use <kbd>Ctrl+F4</kbd> to reset all backgrounds, including images and videos.

Resetting the background will not affect files on the disk.

### Switching Between Bar/Time Display

:::tip
Configure Timing to display bars correctly.
:::

Use <kbd>Ctrl+B</kbd> to switch the note display information from milliseconds to bars (Measure Number).

For detailed explanation on bars, refer to [Timing/Time and Measure Number](timing.html#time-and-measure-number).

## Delay Adjustment

You can adjust the delay of music playback and chart notes separately in DyNode.

### Batch Adjust Chart Note Timing

Use <kbd>-/=</kbd> to quickly adjust the timing of the currently edited chart notes forward or backward.

Use <kbd>U</kbd> to manually input this timing for precise adjustment. The unit is milliseconds.

:::note
This feature adjusts the timing of **all existing** notes and Timing Points in the chart.

DyNode will **add** the input timing to the timing of all notes and Timing Points in the chart.

For example, if the original position of a note was 150ms after the start of the music, after adjusting the timing by 30ms using the batch adjustment feature, all notes' positions will be shifted forward by 30ms. For this note, its new position after the adjustment would be 180ms after the start of the music.

This feature can be used to adjust the chart's delay on actual devices.
:::

### Device Music Playback Delay Adjustment

Use <kbd>Ctrl + -/=</kbd> to quickly adjust the delay of music playback on the device.

:::note
This delay is added to the inherent MP3 delay `FMOD_MP3_DELAY` and will be saved as a configuration in DyNode.

This configuration only affects the delay of music playback in DyNode itself, **and will not affect the exported chart results**.

You can find more detailed explanations in [Timing](timing) and [Configuration](configuration).
:::

## Toolbar

Use <kbd>Tab</kbd> to toggle the display of the top toolbar.

### Music / Hit Sound

Adjust the music volume and hit sound effect volume using the top toolbar.

Use <kbd>Ctrl+H</kbd> to enable/disable hit sounds.

### Background Brightness

Adjust the background brightness using the top toolbar.

### Disable Pitch Shift

:::warning
This is an experimental feature.
:::

Use the disable pitch shift option to prevent the music from changing pitch with speed.

## Other

### Fullscreen Mode

Use <kbd>F7</kbd> to switch to borderless fullscreen.

### Change Chart Title

Use <kbd>Ctrl+T</kbd> to change the chart title.

:::tip Want to use Scribble format tags?
Add `[_scribble]` anywhere in the title to use Scribble's format tags, and the title will be parsed as a Scribble string.
:::
