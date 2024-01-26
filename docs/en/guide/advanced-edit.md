# Advanced Features

This page explains the advanced editing features included in DyNode.

## Expressions

:::warning
This is a very early **experimental** feature, which may **frequently change** in the next few versions, and it is recommended to **backup** your project before using it.
:::

Use <kbd>0</kbd> to enter expressions.

A valid expression is a meaningful sequence of operators, numbers, and variables, such as `a=10+b*c`, `100>90`, etc.

Expressions support basic arithmetic operators `+,-,*,/,%`, bitwise operators `<<,>>,|,&`, logical operators `&&,||,!`, relational operators `>,<,>=,<=,==,!=`, assignment `=`, etc.

You can intuitively write expressions in a syntax similar to C language. Here are some examples of valid expressions:

```cpp
a=(10+20)*30     // a=900
b=a              // b=900
b=a=20           // b=(a=20), right associative
c=10*20/20       // c=(10*20)/20, left associative
```

Expressions can be used to batch modify properties of all/selected notes.

The current supported property variables are as follows:

| Property |        Function       | Unit | Note Limit |
| :------: | :-------------------: | :--: | :--------: |
|  time    | Time of the note      |  ms  |            |
|  pos     | Position of the note  |      |            |
|  wid     | Width of the note     |      |            |
|  len     | Duration of the note  |  ms  |   HOLD     |
| htime    | Time of note's head   |  ms  |   HOLD     |
| etime    | Time of note's tail   |  ms  |   HOLD     |

The calculation of expressions for each note is independent. The process of expression calculation can be summarized as follows:
* Initialize the variables of the expression based on the properties of the note.
* Calculate the expression, changing the variables in the process.
* Read the variables of the expression and modify the properties of the note based on the changes.

In DyNode, input expressions are separated by `;` and are executed in order. The storage type for variables is double-precision floating-point numbers.

Specifically, some variables have note limits, meaning they only take effect on certain types of notes. All calculations of expressions ignore SUB-type notes (HOLD tail notes), see [Modification of HOLD Properties](#modification-of-hold-properties).

Here are some valid examples of expressions, where one line represents an example:

```cpp
wid=wid*2                   // Double the width of the note
pos=2.5                     // Set the position of all notes to 2.5
time=time+10                // Add 10ms to the time of notes (add note delay)

pos=2*2.5-pos               // Symmetry of notes across the centerline of the screen (screen centerline position is 2.5)
time=time/1.5;len=len/1.5   // 1.5x speed for the chart (divide all note times by 1.5, all HOLD durations by 1.5)
a=20;time=a                 // Define variable a, and assign a to time
```

### Modification of HOLD Properties

All calculations of expressions ignore SUB-type notes. Instead, there are some special property variables for HOLD-type notes.

| Property |        Function       | Unit |
| :------: | :-------------------: | :--: |
|  len     | Duration of the note  |  ms  |
| htime    | Time of note's head   |  ms  |
| etime    | Time of note's tail   |  ms  |

This means that when you modify the `time` property of a HOLD, it actually does not change the duration of the HOLD. In other words, modifying `time` means moving the HOLD as a whole rather than modifying the head and tail separately.

If you want to modify the head and tail separately, you need to modify the `htime` and `etime` properties, not the `time` property.

You may notice that these three properties can conflict. For example, if you modify `htime` and `etime`, then `len` should theoretically change as well, but variables are not bound during expression calculation.

In practice, we do not recommend having two variables related to HOLD properties in the same expression. DyNode handles conflicts of HOLD property-related variables as follows:
* If `time` and `htime` properties are modified simultaneously, the modification of `htime` will override the modification of `time`.
* If `len` and `etime` properties are modified simultaneously, the modification of `len` will override the modification of `etime`.

Here are some valid examples of expressions for modifying HOLD properties:

```cpp
htime=htime+10;etime=etime-10       // Add 10ms to the head and subtract 10ms from the tail of all HOLD notes
len=len/2                           // Halve the duration of all HOLDs
htime=100                           // Modify the head time of all HOLD notes to 100
htime=100;len=100                   // Equivalent to time=100;len=100
```
