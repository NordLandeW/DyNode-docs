# Timing

This page introduces concepts related to Timing and Timing Points in DyNode.

## Timing Point

Timing Points contain information such as offset, BPM (Beats Per Minute), and meter for a track.

* offset: The offset value for the first beat of the Timing Point, measured in milliseconds. In layman's terms, if a Timing Point's offset is 100, then its first beat will occur 100ms after the start of the song.
* [BPM](https://en.wikipedia.org/wiki/Tempo): Beats Per Minute, a measure of the tempo of music.
* [Meter](https://en.wikipedia.org/wiki/Time_signature): Refers to the pattern of beats in music. Common examples include 4/4 time (one measure with four quarter notes) and 3/4 time (one measure with three quarter notes). Here, the meter is an integer `x`, indicating `x/4` time.

A track may have multiple BPMs and meters. Using Timing Points, you can segment different time sections of a track to more conveniently make charts with variable meters or BPMs.

The vertical grid (beatlines) in the editor is based on the set Timing.

:::tip "What is Timing? I still don't understand!"

To put it simply, if a song runs at **180 BPM** in **4/4 time** from **100ms**, then the corresponding Timing would be:
```
offset: 100
BPM: 180
meter: 4
```

If the song runs at **2023 BPM** in **3/4 time** from **3000ms**, then the corresponding Timing would be:
```
offset: 3000
BPM: 2023
meter: 3
```

Incorporate these two Timings as Timing Points into the same track, and you can easily segment the variable speed sections of a track!

:::

## Editing Timing

### Adding a Timing Point

There are three ways to add a Timing Point in DyNode.

* Press <kbd>Y</kbd> to manually add a Timing Point and sequentially enter offset, BPM, and meter to directly add a Timing Point.
* Press <kbd>T</kbd> to copy the last Timing Point in time to your selected Note. This can facilitate the adjustment of the starting beat position of the chart and the timing when importing a chart from Dynamaker.
* Press <kbd>F2</kbd> to import all Timing Points from an .osu file. This will overwrite previous settings.

:::tip
When using <kbd>Y</kbd> to add a Timing Point, you can first select a **single** Note, then use the <kbd>Y</kbd> key, which will directly use the selected Note's time as the offset.
:::

### Modifying a Timing Point

Place a Note at the time point where you want to modify a Timing Point and select it, then press <kbd>Y</kbd> to modify the Timing Point's information. Enter the corresponding formatted string to modify the Timing Point's offset, BPM, and meter.

### Timing Correction

After modifying the offset or BPM of a Timing Point, the notes placed under that Timing may not align with the beatlines, and the issue of notes not matching the music rhythm may still not be resolved. If you encounter this problem, you can try to use the Timing correction feature.

This feature will automatically ask you whether to perform Timing correction after you modify the offset or BPM of a Timing Point (if there are notes that can be corrected).

The range of errors that this feature can correct has limits. If the correction results are incorrect, you can always undo the changes.

:::tip Additional Information on Timing Correction
This feature calculates the [measure number](#time-and-measure-number) of notes in the Timing area (the area of a Timing Point is from its offset to the next Timing Point's offset) relative to the original Timing. After modifying the BPM, it calculates the new absolute time based on the original measure number.

If the offset also changes, the notes will then be increased by the amount of offset change.

During the correction process, there may be situations where notes enter other unmodified Timing areas after modification and a warning message pops up. This means the correction results may not be correct and require careful examination. This warning typically appears in the following two cases:
* The BPM decreases significantly, causing notes to enter a later Timing area.
* The offset decreases significantly, causing the current and previous Timing areas to swap or other more complex situations.
:::

### Deleting a Timing Point

Place a Note at the time point where you want to delete a Timing Point and select it, then press <kbd>Ctrl+Delete</kbd> to delete a Timing Point at that time.

### Manual Editing

You can directly edit the project's .dyn file. The .dyn file stores Timing Points information in JSON format, so you can directly edit the Timing Points information in the .dyn file.

```json
{
    "beatLength": 324.324324324324,
    "meter": 4,
    "time": 419
}
```

Above is a sample of the Timing Point json format, where `beatLength` represents the length of one beat (in milliseconds), `meter` represents the meter, and `time` represents the offset.

The conversion from `beatLength` to `BPM`, as in the example above, is: $1 / 324.324324324324 * 1000 * 60 = 185$.

After editing, you need to manually reopen the project file. See [File Formats](file-formats) page for more details.

### Undo/Redo

Use <kbd>Ctrl + Z/Y</kbd> to undo and redo changes you make to Timing.

## Importing Timing

### Importing Timing from Osu File

DyNode supports directly importing Timing Points information from [osu file format v14](https://osu.ppy.sh/wiki/Client/File_formats/Osu_%28file_format%29) (.osu) files. This means you can use the official chart editors provided by osu! or osu!lazer for timing. See [Chart Import](import.html#import-osu-charts) for more.

### Importing Timing from Dynamaker

You can choose to import complete BPM information from Dynamaker or Dynamaker-modified without additional correction work.

## Time and Measure Number

Similar to Dynamaker's Bar, DyNode can also display the measure number of notes in various ways. In DyNode, the measure number represents the exact measure of time, which is related to the BPM and Meter of the current Timing. For example, if the current Timing's meter is $3/4$, then the measure number $13+\frac{1}{3}=13.333\dots$ is at a time after the 13th measure by one quarter note, as the measure is divided into three quarter notes.

On the right side of the front beatline, a number like `X --- Y/4` describes the current time as being after the $X$th measure and at the $Y$th quarter note.

In the top right corner of the note information, a number like `X + Y/Z (D)` describes the measure number of the note after the last grid snap as $X + \frac{Y}{Z}$, with $D$ describing the note as a $D$th note. This information is only accurate in certain situations.

:::tip About Z, D Parameters, and Measure Number
In some cases, $Z\neq D$ because a measure is not necessarily four quarter notes long (four beats); it can also be three quarter notes long (three beats). If the current Timing is in triple time (three quarter notes per beat), and you want to place a 16th note (beat snap divisor of $1/4$, $D=16$), then 12 16th notes are equal in length to one measure ($Z=12$). The $Z$ parameter indicates how many $D$th notes are contained in a measure.
:::

In DyNode, the start of a Timing Point will always be a new measure, even if the previous measure has not completely ended.

You can use [Switch Between Bar/Time Display](edit.html#switching-between-bar-time-display) to change the time information in the upper left corner of the note to an exact measure number in real number form $X + \frac{Y}{Z}$.

## Dynamaker and Bar

The concept of Bar used in Dynamaker facilitates direct editing in measures in Dynamaker.

Similar to osu!, most of DyNode's logic is based on absolute time, such as chart playback, reading, and exporting. In this way, DyNode can provide flexible editing methods and tools.

During chart import or export, DyNode fully handles the conversion from time to Bar, so there's no need to worry about compatibility issues.

DyNode still displays measures and measure numbers, but they may differ from the Bar concept used in Dynamaker.

## Delay with MP3 and WAV Formats

DyNode has minimized the delay from music to chart as much as possible, but there is still some inherent delay between MP3 and WAV formats.

MP3 format is notoriously unsuitable for game development situations requiring high precision in music delay and connection. One reason might be that the encoder used to encode audio files adds a certain amount of silence to the original audio segment, depending on the situation.

> **Why is a decoded MP3 longer than the original .wav file?**
> 
> Because LAME (and all other MDCT based encoders) add padding to the beginning and end of each song. For an explanation of why, see the questions below.
> 
> LAME embeds the amount of padding in the ancillary data of the first frame of the MP3 file. (LAME INFO tag). The LAME decoder will use this information to remove the leading padding of an MP3 file.
> 
> Modifications to the decoder so that it will also remove the trailing padding have not yet been made.
> 
> https://lame.sourceforge.io/tech-FAQ.txt
> 
> FMOD doesn’t chop the start off .mp3 decodes, a format which has inherent latency in it.
> 
> ----brett, FMOD CEO

For more discussions on this issue in the FMOD community, see: [https://qa.fmod.com/t/fmod-add-air-on-tracks/12073](https://qa.fmod.com/t/fmod-add-air-on-tracks/12073)

Regarding the delay problem in charts, the delay from music to chart in Dynamite and osu! is similar, whereas DyNode's delay from music to chart for .mp3 files is generally around 30-60ms (thus, importing a chart from .osu without adding delay might result in noticeable audio-sync issues). DyNode does not have a particularly good solution for this, and previously, DyNode provided an option to add a 64ms delay for .osu files by default (in version 0.1.4.1 and earlier), leading to a general 64ms delay issue in Dynamite charts.

For how you should now resolve this issue, DyNode offers two solutions:

- When using .mp3 files, DyNode defaults to a 60ms delay for FMOD to play the music. This may vary on different devices, so you can also edit this delay in config.json (or turn it off entirely). You only need to change the value of `FMOD_MP3_DELAY` in config.json (in milliseconds), see [Configuration](configuration.md).
- Use .wav files to reduce chart editing delays.
