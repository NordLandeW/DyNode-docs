# Timing

This page explains the concepts of Timing and Timing Points in DyNode.

## Timing Point

A Timing Point contains information about a song’s offset, BPM, and meter.

* **offset:** The offset (in milliseconds) for the first beat of the Timing Point. In simple terms, if a Timing Point has an offset of 100, then its first beat appears 100ms after the song starts.
* **BPM** (Beats Per Minute): Measures the speed of the music.
* **meter:** Refers to the time signature of the music. Common examples include 4/4 (four beats per measure) and 3/4 (three beats per measure). Here, the meter is represented by an integer `x`, which corresponds to `x/4` time.

A song may contain multiple BPM and meter changes. Timing Points allow you to segment the song into parts with different BPMs, making it easier to create charts with tempo or time signature changes.

The vertical grid (beat lines) in the editor is based on the configured Timing.

:::tip "What is Timing? I still don't understand!"

Simply put, if a song starts at **100ms** with a tempo of **180 BPM** in 4/4 time, then the Timing is:
```
offset: 100
BPM: 180
meter: 4
```

If at **3000ms** the song changes to **2023 BPM** in 3/4 time, then the Timing is:
```
offset: 3000
BPM: 2023
meter: 3
```

Using these two Timing Points in a single song allows you to easily segment parts with different speeds!

:::

## Editing Timing

### Adding a Timing Point

There are three ways to add a Timing Point in DyNode.

* Press <kbd>Y</kbd> to manually add a Timing Point by sequentially entering the offset, BPM, and meter values.
* Press <kbd>T</kbd> to copy the last Timing Point’s time to the selected Note’s time. This can facilitate adjustments of beat positions and timing when importing charts from Dynamaker.
* Press <kbd>F2</kbd> to import all Timing Points from an .osu file. This will overwrite any existing Timing Points.

:::tip
When using <kbd>Y</kbd> to add a Timing Point, if you first select a single Note, its time will be used as the offset.
:::

### Modifying a Timing Point

To modify a Timing Point, place and select a Note at the desired time and press <kbd>Y</kbd>. Then, input the new offset, BPM, and meter values as prompted.

### Timing Correction

After modifying a Timing Point’s offset or BPM, notes placed within that Timing section may no longer align with the beat lines, causing them to be out of sync with the music. If this occurs, you can use the Timing Correction function to adjust the notes.

This function will automatically prompt you to perform a Timing Correction (if there are notes that can be corrected) after you modify the offset or BPM of a Timing Point.

The function has its limits. If the correction result is incorrect, you can always undo the changes.

:::tip Additional Information on Timing Correction
The function calculates the measure number for notes in the Timing section (from the current Timing Point’s offset to the next Timing Point’s offset) based on the original BPM, and then computes new absolute times based on the new BPM while preserving the original measure count.

If the offset is also changed, the notes’ times will be adjusted by the offset difference.

Warnings may occur if, during correction, some notes are modified into a neighboring Timing section that was not intended to be corrected. This typically happens if:
* The BPM is reduced by too large an amount, causing notes to fall into a later Timing section.
* The offset is reduced too much, causing the current and previous Timing sections to swap or creating more complex situations.
:::

### Deleting a Timing Point

Place and select a Note at the time where you wish to delete a Timing Point, then press <kbd>Ctrl+Delete</kbd> to remove the Timing Point at that time.

### Manual Editing

You can directly edit the project’s .dyn file. The .dyn file stores Timing Points in JSON format, so you can manually edit the Timing Point information.

Example JSON for a Timing Point:

```json
{
    "beatLength": 324.324324324324,
    "meter": 4,
    "time": 419
}
```

In this example, `beatLength` represents the length of one beat (in milliseconds), `meter` is the time signature, and `time` is the offset.

For example, converting from `beatLength` to BPM: $1 / 324.324324324324 * 1000 * 60 \approx 185$.

After editing, you must manually reload the project. See the [File Formats](file-formats.md) page for details.

### Undo/Redo

Use <kbd>Ctrl+Z</kbd> / <kbd>Ctrl+Y</kbd> to undo or redo your changes to the Timing.

## Importing Timing

### Importing from an Osu File

DyNode supports importing Timing Points directly from an [osu file format v14](https://osu.ppy.sh/wiki/en/Client/File_formats/Osu_%28file_format%29) (.osu). This means you can use osu! or osu!lazer’s official chart editor for timing. See [Chart Import](import.md#importing-osu-charts) for details.

### Importing from Dynamaker

You can choose to import complete BPM information from Dynamaker or Dynamaker-modified without extra timing adjustments.

## Time and Bar Numbers

Similar to Dynamaker’s concept of Bar, DyNode can display the precise measure number of a note in various ways. In DyNode, the measure number represents the exact measure based on the note’s time, which is determined by both the BPM and the meter of the current Timing. For example, if the current Timing is in 3/4 time, then a note at measure 13+\(1/3\) corresponds to a position one quarter note past measure 13, since the measure is divided into three equal parts.

On the upper right of the front beat line, a notation like `X --- Y/4` indicates that the current time is at the Y-th quarter note after measure X.

In the upper right corner of the note information, a notation like `X + Y/Z (D)` indicates that after the last grid snap, the note is at measure number $X + \frac{Y}{Z}$, where $D$ denotes that the note is a D-th note. This information is only accurate under certain conditions.

:::tip About the Z and D Parameters and Measure Numbers
Sometimes $Z \neq D$ because a measure does not necessarily contain four quarter notes (in 4/4 time); it might contain three quarter notes (in 3/4 time). For instance, if the current Timing is in 3/4 time and you place 16th notes (with a beat subdivision of 1/4, so $D=16$), then 12 such 16th notes will equal one full measure (i.e. $Z=12$). The parameter $Z$ indicates how many D-th notes make up a measure.
:::

In DyNode, the start of a Timing Point always marks the beginning of a new measure, even if the previous measure has not completely finished.

You can use [Toggle Bar/Time Display](edit.md#toggling-between-bar-number-and-time-display) to switch the note information in the upper left from a time value to an exact measure number expressed as a real number $X + \frac{Y}{Z}$.

## Dynamaker and Bar

The concept of Bar in Dynamaker facilitates editing charts in terms of measure numbers.

Like osu!, most of DyNode’s logic is based on absolute time (for playback, reading, and exporting charts). This allows DyNode to offer flexible editing modes and tools.

During chart import or export, DyNode fully handles the conversion between time and Bar, so you do not need to worry about compatibility issues.

Although DyNode still displays measures and measure numbers, they may differ from Dynamaker’s Bar concept.

## MP3 and WAV Format Delays

DyNode has minimized the delay between the music and the chart as much as possible, but there is still some delay with MP3 files compared to WAV files.

It is well known that MP3 is not ideal for situations requiring precise synchronization due to potential padding added during encoding.

> Why is a decoded MP3 longer than the original .wav file?
> 
> Because LAME (and all other MDCT based encoders) add padding to the beginning and end of each song. For an explanation, see the questions below.
>
> LAME embeds the amount of padding in the ancillary data of the first frame of the MP3 file (LAME INFO tag). The LAME decoder uses this information to remove the leading padding. Modifications to also remove trailing padding have not yet been made.
>
> [https://lame.sourceforge.io/tech-FAQ.txt](https://lame.sourceforge.io/tech-FAQ.txt)

> FMOD doesn’t chop the start off .mp3 decodes, a format which has inherent latency in it.
> 
> ----brett, FMOD CEO

For further discussion on this FMOD issue, see: 

[https://qa.fmod.com/t/fmod-add-air-on-tracks/12073](https://qa.fmod.com/t/fmod-add-air-on-tracks/12073)

Regarding solutions, we suggest the following:

* You can use the `FMOD_MP3_DELAY` option in the [Configuration](configuration.md) file to set a delay for music playback. For example, setting it to `60` will play the music 60ms earlier. The default is `0`.
* You can also use the shortcut <kbd>Ctrl + -/=</kbd> to adjust the global music delay in DyNode.
* Use WAV format files instead of MP3 for chart editing.
* Avoid using DyNode versions earlier than 0.1.5.
