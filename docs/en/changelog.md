# Changelog

This page contains detailed explanations and guidelines for version updates of DyNode.

## [v0.1.13](https://github.com/NagaseIori/DyNode/releases/tag/v0.1.13) (2024-01-23)

This version includes new features and bug fixes.

### New Features

* Added the functionality of modifying and correcting Timing. See [Timing/Modify Timing Point](guide/timing.html#modify-timing-point) and [Timing/Timing Correction](guide/timing.html#timing-correction).
* Now supports multi-selection of notes on different sides and batch operations on them. See [Chart Editing/Multi-Selection on Different Sides](guide/edit.html#multi-selection-on-different-sides).
* Now supports editing notes on both left and right sides simultaneously. See [Chart Editing/Dual Side Editing](guide/edit.html#dual-side-editing).
* Switching between bar number/time display now shows accurate bar numbers. See [Timing/Time and Bar Numbers](guide/timing.html#time-and-bar-numbers).
* In the visually consistent default width mode, pasted/attached notes will automatically adjust their width.
* Supported import of .dy chart format.
* Settings for particle effects are now saved in the project.
* Holding <kbd>Shift</kbd> now accelerates the adjustment speed of <kbd>A/D</kbd>.
* Adjusting the width when pasting notes will not reset the note's width.
  * You can still use <kbd>Ctrl+V</kbd> to manually reset it.
* Now, holding the <kbd>Alt</kbd> key displays all note information.
* Added a threshold for triggering width adjustment when placing notes.
  * To avoid accidental adjustments to note width when placing notes.

### Localization

* Supplemented/improved English translation.

### Bug Fixes and Improvements

* Fixed incorrect I/O clearance caused by low frame rates.
* Added import warnings for early version Dynamaker chart formats and fixed related crash issues.
* Corrected and improved various transition animations.
  * Avoided unnecessary transitions.
  * Corrected some unnatural flickering.
* Fixed some multilingual errors.
* Some other improvements.

### Feature Removal

* Removed the option to manually modify Bar settings.
  * Removed global Bar/Offset settings.
  * Removed prompt messages after overwriting Bar settings.

### Documentation

* Documentation will now be automatically cached locally and accessible offline.
* You can now search the documentation online from the top right corner of the page.
* Several entries have been updated and corrected.

## [v0.1.12.5](https://github.com/NagaseIori/DyNode/releases/tag/v0.1.12.5) (2024-01-03)

This version includes some bug fixes.

* Fixed the issue of Chain type note textures missing pixels.
* Transition animations will now be consistent across different frame rates.
  * Excluding particle animations.
* Fixed potential issues with video playback.
* Gamemaker Runtime updated to v2023.11.1.160.
  * This update brings some bug fixes and efficiency improvements.

## [v0.1.12.4](https://github.com/NagaseIori/DyNode/releases/tag/v0.1.12.4) (2023-11-24)

This version includes some bug fixes and feature changes.

### Bug Fixes

* Fixed the issue where the English left bracket `[` did not display correctly in titles.
* Fixed the problem where DyCore.dll could not load properly on old systems, preventing the game from starting.
* Fixed the crash issue after using `Ctrl+C` in copy mode.
* Fixed potential crash issues related to video playback.
* Fixed the issue where IO was not cleared correctly when the window lost focus due to high time thresholds.
* Removed the libfilesystem extension to try and fix some issues it caused.

### Feature Changes

* The default transparency of the beat lines for new projects is now set to 50%, 0%, 0% (front, left side, right side).
* The beat line transparency settings of a project will now be saved.
* Optimized the Mixer's handling of multi-presses.
* The feature of exporting to Dynamaker-modified has been separated to the shortcut <kbd>Ctrl+F5</kbd>.
* A highlight color indicator for the center point of drag when multi-selecting Notes is now displayed.
* Fixed the issue of priority selection of drag center point when multi-selecting Notes.
* Position highlights for notes on both sides will now be displayed simultaneously.

## [v0.1.12.3](https://github.com/NagaseIori/DyNode/releases/tag/v0.1.12.3) (2023-09-05)

This version includes some bug fixes and new features.

### Bug Fixes

* Attempted to fix a crash issue caused by deleting notes.
* Fixed the problem where the music volume was reset after the music finished playing.
* Fixed the issue where background light effects sometimes remained static.

### Visual Improvements

* Refined the layout and visual adjustments of the scoreboard to make it more similar to the original Dynamix.
* Improved the text display in the TAB toolbar.

### New Features

* Notes at the same time will now be highlighted by squares.
* You can now double-click to snap notes.
  * The note that is double-clicked acts as the center for snapping.
    ![Double Click Snap](guide/double_click.gif)
* Error correction feature now replaces the millisecond rounding function.
  * By default, consecutive notes within 2ms error will be aligned to the earliest position among these notes.
* Added a disable pitch shift **(Experimental)** option to the TAB toolbar.
  :::warning
  The current stage of the disable pitch shift option significantly increases sound latency and may have many underlying issues.
  :::
* Project-related files will now be copied to the project directory on project save and will default to using relative paths to read files.
  * These related files include music, background, and video files.
  :::warning
  This version of the project file will break compatibility with lower versions. Please backup project files accordingly before updating.
  :::

### Miscellaneous

* Gamemaker Runtime updated to version 2023.6.

## [v0.1.12.2](https://github.com/NagaseIori/DyNode/releases/tag/v0.1.12.2) (2023-07-05)

This version contains some bug fixes.

* Removed an external library, thereby fixing some issues it caused, such as:
  * OBS unable to capture DyNode screen through game recording.
  * Clicking on the game screen when a dialog box appears slows down the game response.
  * DyNode in the foreground being recognized as a background application by Windows.
  * Some unexplained stuttering issues.
* Fixed the "NOTE DELETE ERROR" bug that caused the game to terminate.
* Gamemaker Runtime updated to 2023.6.

## [v0.1.12.1](https://github.com/NagaseIori/DyNode/releases/tag/v0.1.12.1) (2023-06-17)

This version fixes a major issue in v0.1.12 that could cause the exported chart to be unreadable.

* Fixed an issue with the XML parser that could cause exported charts to be unreadable.
  * The issue was due to the order of attributes in the XML Declaration's first line being incorrect, where the correct format should be `<?xml version="1.0" encoding="UTF-8"?>`, but DyNode's XML parser might output it as `<?xml encoding="UTF-8" version="1.0"?>`.
  * This issue could have been occurring since version `v0.1.11.5`.
  * Removed the encoding attribute from the XML Declaration.
* Slightly increased the brightness of Hold notes.

## [v0.1.12](https://github.com/NagaseIori/DyNode/releases/tag/v0.1.12) (2023-06-11)

The main changes in DyNode v0.1.12 compared to v0.1.11 are as follows.

### New Features

* Added three new beatline styles, see [Chart Editing/Beatline Styles](guide/edit#beatline-styles).
* The color of the note center squares is now closer to the original Dynamaker.
* Added a delay adjustment feature, see [Chart Editing/Delay Adjustment](guide/edit#delay-adjustment).
* Added a top toolbar and functions for adjusting volume/background brightness, see [Chart Editing/Toolbar](guide/edit#toolbar).
* Added the ability to set custom beat subdivisions, see [Chart Editing/Custom Beat Subdivision](guide/edit#custom-beat-subdivision).
* Added experimental feature: Expressions. See [Advanced Features/Expressions](guide/advanced-edit#expressions).
* Added English/Traditional Chinese language support.
  * Thanks to @Jmakxd for providing English/Traditional Chinese translations.
* The editing interface's timeline will now automatically move to the time period where undo/redo occurred.
* Added an upper limit to the number of undo operations (3000).

### Bug Fixes

* Fixed the issue where out-of-bounds warnings were not triggered correctly during undo/redo.
* Fixed the problem where video background transparency was not calculated correctly.
* Fixed the issue where the particle system was not reset when reloading configurations.
* Fixed the problem where setting global Bar did not work.
* Fixed potential crashes caused by undoing.
* Fixed the issue where the scroll wheel moved the chart at different speeds under different refresh rates.
* Fixed the crash when importing/exporting xml if no notes existed on either side.
* Fixed the problem where SUB notes might not be deleted when deleting Hold notes.
* Fixed the issue where Holds would not display as expected under certain conditions.
* Fixed the problem of background gradient animations being static before the start of the song.
* Corrected the wrong count of note statistics.
* Fixed the issue where beatlines did not display correctly under negative Bar numbers.

### Visual Improvements

* Now, the boundaries of Hold notes do not overlap with each other.
  * Reworked the note drawing process.
* Increased the transparency of the title.
* Reduced the brightness of the Hold note background.

### Performance Improvements

* Beatlines will now not be drawn when unnecessary.
* Other performance improvements.

### Miscellaneous

* Added an "About" page.
* The stream speed setting will now be saved in the project.
* You can use <kbd>Ctrl+F6</kbd> to randomize the chart (0.1.11.1.4.1).
* Added a limitation on the width of notes (>$0.01$).
* Gamemaker Runtime version updated to 2023.4.

