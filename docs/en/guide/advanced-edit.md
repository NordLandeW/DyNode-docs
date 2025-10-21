# Advanced Features

This page explains the advanced editing features included in DyNode.

## Expressions

:::warning
This is a very early **experimental** feature. It is recommended to back up your project before using it.
:::

Press <kbd>0</kbd> to input an expression.

A valid expression is a meaningful statement composed of a series of operators, numbers, and variables, for example: `a=10+b*c`, `100>90`, etc.

Expressions support the basic arithmetic operators `+,-,*,/,%`, bitwise operators `<<,>>,|,&`, logical operators `&&,||,!`, relational operators `>,<,>=,<=,==,!=`, and the assignment operator `=`.

You can write expressions in a C-like syntax. Some valid expression examples are as follows:

```cpp
a=(10+20)*30     // a becomes 900
b=a              // b becomes 900
b=a=20           // b is assigned (a=20), right-associative
c=10*20/20       // c becomes (10*20)/20, left-associative
```

You can use expressions to batch modify the properties of all notes or selected notes.

The currently supported note property variables are listed in the table below:

| Property |                  Function                  | Unit | Note Type Restriction |
| :------: | :----------------------------------------: | :--: | :---------------------: |
| time     |            The time the note occurs            | ms   |                         |
| pos      |            The position of the note            |      |                         |
| side     | The falling side of the note (0-Front/1-Left/2-Right) |      |                         |
| wid      |             The width of the note              |      |                         |
| len      |            The duration of the note            | ms   |          HOLD           |
| htime    |     The head time of the note (for Hold)     | ms   |          HOLD           |
| etime    |     The tail time of the note (for Hold)     | ms   |          HOLD           |

The expression is computed independently on each note. The computation process is as follows:
* The expression’s variables are initialized based on the note’s properties.
* The expression is evaluated, and the variables may change during computation.
* The final values of the variables are used to update the note’s properties.

In DyNode, multiple expressions are separated by `;` and are executed sequentially. All variables are stored as double‐precision floating-point numbers.

Note that some variables are restricted to certain note types; that is, they only affect specific types of notes. All computations will ignore SUB type notes (the tail notes of HOLD notes). See [Modifying HOLD Properties](#modifying-hold-properties) for details.

Specifically, the falling side property (`side`) will always be taken modulo 3. For example, setting `side` to `1`, `4`, or `-2` is equivalent.

Below are some valid examples of expressions, each on a separate line:

```cpp
wid = wid * 2                       // Double the width of the note
pos = 2.5                         // Set the note position to 2.5
time = time + 10                    // Increase the note time by 10ms (adding delay)

pos = 2 * 2.5 - pos                  // Mirror the note across the center at position 2.5
time = time / 1.5; len = len / 1.5   // Speed up the chart by a factor of 1.5 (divide note times and HOLD durations by 1.5)
a = 20; time = a                    // Define variable a and assign it to time

side = side + 1                     // Moves front notes to the left, left notes to the right, and right notes to the front
pos = (side == 0) * 2 + (side != 0) * pos   // Only changes the position of front notes to 2
side = -side                        // Swaps the left and right side notes
```

### Modifying HOLD Properties

All expression evaluations ignore SUB type notes. Instead, for HOLD type notes there are special property variables available:

| Property |         Function         | Unit |
| :------: | :----------------------: | :--: |
| len      |   The duration of the note   | ms   |
| htime    | The head time of the note   | ms   |
| etime    | The tail time of the note   | ms   |

This means that modifying the `time` property of a HOLD note will not affect its duration; changing `time` effectively moves the entire HOLD note rather than adjusting its head and tail separately.

If you want to modify the head and tail separately, you need to change the `htime` and `etime` properties instead of `time`.

You may notice that these three properties can conflict; that is, if you modify `htime` and `etime`, then `len` would theoretically change. However, during expression evaluation, variables are not bound to each other – a change in one does not automatically update another.

In practice, we do not recommend including two HOLD-related variables in the same expression. The conflict resolution is as follows:
* If both `time` and `htime` are modified, the modification to `htime` takes precedence.
* If both `len` and `etime` are modified, the modification to `len` takes precedence.

Here are some valid examples of modifying HOLD properties:

```cpp
htime = htime + 10; etime = etime - 10       // Increase the head time by 10ms and decrease the tail time by 10ms for all HOLD notes
len = len / 2                                // Halve the duration of all HOLD notes
htime = 100                                  // Set the head time of all HOLD notes to 100ms
htime = 100; len = 100                        // Equivalent to setting time and duration to 100ms
```
