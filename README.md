# 🪄 Client-infrastructure design system 
> A design system developed by the infrastructure team includes a set of guidelines, principles, and tools aimed at building scalable and maintainable CSS. This system, built on Sass, follows the 7-1 way architecture pattern, enabling developers to create consistent and cohesive user interfaces using predefined functions, variables, mixins, and components. It helps reduce code duplication, increase productivity, and facilitate collaboration among team members. Also, as a developer, you can set all the tokens variables for the design system in the new project in accordance with the architecture mentioned above, or write the mixins and functions you need.
---

## 📑 Table of Contents

- [🪄 Client-infrastructure design system](#-client-infrastructure-design-system)
  - [📑 Table of Contents](#-table-of-contents)
  - [:wrench: Installation](#wrench-installation)
  - [⛏️ What is 7-1 way architecture?](#️-what-is-7-1-way-architecture)
  - [🧩 Extending the config](#-extending-the-config)
    - [Colors](#colors)
    - [Themes](#themes)
    - [Elevation](#elevation)
    - [Fonts](#fonts)
    - [Sizes](#sizes)
    - [Shapes](#shapes)
    - [Spaces](#spaces)
    - [Strokes](#strokes)
    - [Typography](#typography)
    - [Variables](#variables)
    - [Z-Index](#z-index)
    - [Breakpoint](#breakpoint)
  - [🎁 What facilities does the system design provide you?](#-what-facilities-does-the-system-design-provide-you)
    - [🛠️ Functions](#️-functions)
      - [Color](#color)
        - [Color Function usage](#color-function-usage)
      - [ColorByShade](#colorbyshade)
        - [colorByShade Function Usage](#colorbyshade-function-usage)
      - [Remify](#remify)
        - [Remify Function Usage](#remify-function-usage)
      - [Shape](#shape)
        - [Shape Function Usage](#shape-function-usage)
      - [Shaper](#shaper)
        - [Shaper Function Usage](#shaper-function-usage)
      - [Size](#size)
        - [Size Function Usage](#size-function-usage)
      - [Sort map](#sort-map)
        - [Sort map Function Usage](#sort-map-function-usage)
      - [Space](#space)
        - [Space Function Usage](#space-function-usage)
      - [Stroke](#stroke)
        - [Stroke Function Usage](#stroke-function-usage)
      - [Z-Index](#z-index-1)
        - [Z-Index Function Usage](#z-index-function-usage)
    - [🪄 Mixins](#-mixins)
      - [Elevation](#elevation-1)
        - [Elevation mixin Usage](#elevation-mixin-usage)
      - [State Layer](#state-layer)
        - [stateLayer Function Usage](#statelayer-function-usage)
      - [ThemeScope](#themescope)
        - [ThemeScope Function Usage](#themescope-function-usage)
      - [Border](#border)
        - [Border Function Usage](#border-function-usage)
      - [Breakpoint](#breakpoint-1)
        - [Breakpoint Function Usage](#breakpoint-function-usage)
      - [Dimension](#dimension)
        - [Dimension Function Usage](#dimension-function-usage)
      - [Divider](#divider)
        - [Divider Function Usage](#divider-function-usage)
      - [Flex](#flex)
        - [Flex Function Usage](#flex-function-usage)
      - [Placeholder](#placeholder)
        - [Placeholder Function Usage](#placeholder-function-usage)
      - [Position](#position)
        - [Position Function Usage](#position-function-usage)
      - [Pseudo](#pseudo)
        - [Pseudo Function Usage](#pseudo-function-usage)
      - [Scrollbar](#scrollbar)
        - [Scrollbar Function Usage](#scrollbar-function-usage)
      - [Typography](#typography-1)
        - [Typography Function Usage](#typography-function-usage)
    - [🧩 Placeholders](#-placeholders)
      - [Truncate](#truncate)
        - [Truncate placeholder Usage](#truncate-placeholder-usage)
      - [Hide-scrollbar](#hide-scrollbar)
        - [Hide-scrollbar placeholder Usage](#hide-scrollbar-placeholder-usage)


## :wrench: Installation

```bash
# Yarn:
yarn add @infra/scss-design-system

# npm:
npm install @infra/scss-design-system

# pnpm:
pnpm add @infra/scss-design-system
```




## ⛏️ What is 7-1 way architecture?

The 7-1 architecture in Sass is a well-structured method for organizing CSS code. It divides the codebase into seven distinct folders, plus a main file, making it easier to maintain and scale. Here's a brief summary of each part:


- **Abstracts** : This directory doesn't contain actual styles but focuses on functions and mechanisms that assist in defining other styles. It can be likened to a "utils" directory, housing tools that contribute to the overall styling strategy.
- **Vendors** : Vendors hold third-party stylesheets used in the project. Any CSS files from external libraries and frameworks should be included here, keeping them separate from the project's custom styles.
- **Base** : The Base directory contains the boilerplate styles applied globally throughout the application. This includes default CSS resets and typography styles that provide a consistent foundation for the entire project.
- **Layout** : Layout encompasses styles for different parts of the site's structure, such as headers, footers, navbars, and more. This directory helps maintain a cohesive layout across the application.
- **Components** : Components house styles related to specific UI elements or components, such as buttons, form styles, profile pictures, cards, and other modular pieces. This separation ensures reusable and maintainable styling for individual components.
- **Pages** : The Pages directory contains page-specific styles. Each page (login, home, about, etc.) can have its dedicated styles, making it easier to manage and locate relevant styling rules.
- **Themes** :Themes store different styles required for each theme in the project. This directory allows for the easy organization and switching of styles based on different themes, enhancing the project's visual flexibility.

Main file (typically main.scss): This file imports all the other files and compiles them into a single stylesheet but in our design system it kept base.scss which import base folder.

Also we have utils file which import **abstract**, **components**, **vendors**. 

The 7-1 architecture promotes better organization, modularity, and reusability of code, making it easier to manage and scale large projects.

Our final folder structure is: 
```
.
├── design-system
│   ├── abstract
│   │   ├── configs
│   │   ├── functions
│   │   ├── mixins
│   │   ├── placeholder
│   │   ├── variables
│   │   └── index.scss
│   ├── base
│   ├── components
│   ├── themes
│   ├── vendors
│   ├── main.scss
└   └── utils.scss
```

<div style="padding: 15px; margin: 40px 0; border:1px solid #ffc517; border-radius:5px">
💡 What's main.scss and utils.scss?

The **main.scss** file needs to be included in the project's **main.js**      file, while the **utils.scss** file, which contains functions, mixins, etc., should be included in the file that handles the design system configuration.

The reason for separating these files is to ensure that when the project is built if a page contains multiple components that have their styles, the definitions for items inside **main.scss** for example **fonts** and **themes**, ...   are not repeated for each component.


```bash
// @/main.js 
// Your code

import "@packages/design-system/main.scss";
```

```bash
// @/assets/config.scss 
// Your code

import "../../../packages/design-system/utils.scss";
```
</div>



Based on the above explanations, as the project developer, you should adhere to the 7-1 architecture mentioned above with some modifications. The structure of the design system will be as follows.

```
.
├── styles
│   ├── abstract
│   │   ├── functions (Optional)
│   │   ├── mixins (Optional)
│   │   ├── placeholder (Optional)
│   │   ├── variables
│   │   └── index.scss
│   ├── base
│   ├── components
│   ├── themes
│   ├── vendors
│   ├── main.scss
└   └── config.scss
```

Now, to set up the design system configuration, simply replace the values of the color, font, and other variables according to the Figma provided by the design team.

After defining all the existing variables in variables folders, use all the written files within the configuration file. If needed, you can also define new mixins, functions, and placeholders tailored to the new project. By adhering to the principles of reusability, you can create a merge request the newly written items to the infrastructure team. They will review and add them if your request approved in the design system package, making them available to the entire client team.

## 🧩 Extending the config
Items that can be defined in the configuration file are as follows:
💡**Note:** If an item is not assigned a value, the default value will be used.

### Colors
💡Note: You can see the color tokens agreed between the client team and product design through the relevant link. [Figma](https://www.figma.com/design/rgJIiRrbpspJiJLYbpyDxJ/Part-Design-System---2.0.1?node-id=7879-9681)

```bash
// define color pallettes

$config-colors: (
   primary: (
    10: #162356,
    20: #002389,
    ... ,
    95: #f0efff,
    98: #fbf8ff
  ),
  secondary: (
    10: #36001d,
    20: #53122e,
    ... ,
    95: #ffe9ee,
    98: #fff7f7
  ),
  ...
);
```
<div style="margin: 50px 0; " name="spacer" />


### Themes
The theme configuration, you can set values for various tokens to ensure consistency across different themes, such as light and dark modes. This allows your design system to adapt to different environments while maintaining a cohesive look and feel. Below is the configuration code for setting up themes:
```bash
$config-themes: (
  light: (
    primary: colorByShade(primary, 40),
    on-primary: colorByShade(pure-white),
    primary-container: colorByShade(primary, 90),
    ...
  ),
  dark: (
    primary: colorByShade(primary, 80),
    on-primary: colorByShade(primary, 20),
    primary-container: colorByShade(primary, 30),
    ...
  ),
);

```

<div style="margin: 50px 0; " name="spacer" />


### Elevation
The elevation configuration, you should use the colors specified in the style guide. Remember that according to the sample code below, you have to configure the settings for all three Elvition modes: color, shadow, and glow.
```bash
$config-elevation: (
colors: (
    lowest: color(surface-container-lowest),
    low: color(surface-container-low),
    normal: color(surface-container),
    high: color(surface-container-high),
    highest: color(surface-container-highest),
  ),
  shadows: (
    lowest: 1px 1px 4px 0px color(elevation-shadow),
    low: 1px 2px 7px 0px color(elevation-shadow),
    normal: -1px 4px 12px -2px color(elevation-shadow),
    high: -1px 8px 20px -1px color(elevation-shadow),
    highest: -2px 16px 24px -8px color(elevation-shadow),
  ),
  glows: (
    lowest: 0px 0px 4px 0px color(elevation-glow),
    low: 0px 0px 7px 0px color(elevation-glow),
    normal: 0px 0px 12px -2px color(elevation-glow),
    high: 0px 0px 16px -1px color(elevation-glow),
    highest: 0px 0px 24px -4px color(elevation-glow),
  ),
); 

```
<div style="margin: 50px 0; " name="spacer" />


### Fonts
Similar to the previous sections, you can define the font configuration for your project using the following setup. This approach ensures consistent application of font styles across your design system.

💡Note: In the upcoming second phase of the design system, you'll be able to import necessary fonts directly into your project without needing to manually configure them as shown below.
```bash
$config-fonts: (
  yekan-bakh: (
    thin: (
      font-weight: 100,
      src: url("src/assets/font-path")
    ),
    light: (
      font-weight: 300,
      src: url("src/assets/font-path")
    ),
    ...,
    medium: (
      font-weight: 500,
      src: url("src/assets/font-path")
    ),
    ...,
  )
);
```

<div style="margin: 50px 0; " name="spacer" />

### Sizes
The sizes configuration defines a range of standardized size values that can be used consistently across your design system

```bash
$config-sizes: (
  3x-small: 16px,
  2x-small: 20px,
  x-small: 24px,
  small: 28px,
  medium: 32px,
  large: 40px,
  x-large: 48px,
  2x-large: 56px,
  3x-large: 64px
);
```
<div style="margin: 50px 0; " name="spacer" />


### Shapes
The shape configuration, the following settings define the border-radius values used throughout your design system. These values ensure consistency in the appearance of elements like buttons, cards, and other components that require rounded corners. Below is the configuration code for setting up shapes:

```bash
$config-shapes: (
  root: 6px,
  sm: 3px,
  md: 12px,
  lg: 18px,
  xl: 24px,
  pill: 360px,
  circle: 50%,
);

```

<div style="margin: 50px 0; " name="spacer" />

### Spaces
The spaces configuration defines a base unit for spacing within your design system. This unit can be used to create consistent margins, padding, and gaps between elements, ensuring a uniform and well-structured layout.

```bash
$config-spacer: 4px;
```

<div style="margin: 50px 0; " name="spacer" />

### Strokes
The strokes configuration defines various thickness levels for borders and lines used in your design system. These predefined stroke widths ensure consistency and clarity in visual elements such as borders, dividers, and outlines.

```bash
$config-strokes: (
  narrow: 1px,
  semi-narrow: 1.5px,
  medium: 2px,
  thick: 4px,
  heavy: 10px,
);
```

<div style="margin: 50px 0; " name="spacer" />


### Typography
The typography configuration defines font styles for different text elements across your design system. This setup allows you to maintain consistent text appearance, including font sizes and weights, for various contexts and screen sizes.

💡Note: The keys (default, small) in typography must be the same as the keys defined in [config-breakpoints](#breakpoint).

```bash
$config-typography: (
  default: (
    ...,
    body-large: (
      font-size: 14px,
      font-weight: 400
    ),
    ...,
  ),
  small: (
    ...,
    body-large: (
      font-size: 12px,
      font-weight: 400
    ),
    ...,
  )
);
```

<div style="margin: 50px 0; " name="spacer" />

### Variables
The variables section allows you to define custom values for your design system. For instance, setting $config-rem to 20 means that rem units will be based on this value:

```bash
$config-rem: 20;
```
Define any additional variables as needed for your project to ensure consistency and flexibility in your design.

<div style="margin: 50px 0; " name="spacer" />

### Z-Index
The z-index configuration defines predefined stacking order values for various elements in your design system. These values determine the layering of elements to manage their visibility and overlap.

```bash
$config-zIndex: (
  hide: -1,
  base: 0,
  masked: 100,
  mask: 200,
  sticky: 300,
  fixed: 400,
  overlay: 500,
  loader: 600,
  modal: 700,
  dropdown: 800,
  notification: 900,
  tooltip: 950,
  above-all: 1000000
)
```
These z-index values help maintain proper stacking order and visual hierarchy in your project.

<div style="margin: 50px 0; " name="spacer" />

### Breakpoint
The breakpoint configuration, you should define the breakpoints using the sizes specified in your style guide. The breakpoints allow your design system to adapt to different screen sizes, ensuring a responsive and consistent user experience across various devices. Below is the configuration code for setting up breakpoints:

```bash 
$config-typography-breakpoint-mapper: (
  medium: default,
  small: small,
);


$config-breakpoints: (
  small: 320px,
  compact: 600px,
  medium: 840px,
  expanded: 1200px,
  large: 1600px,
);
```
**config-breakpoints** This variable can be changed based on the provided devices that are designed, which in most projects only provide two sizes desktop and mobile.

<div style="margin: 50px 0; " name="spacer" />


## 🎁 What facilities does the system design provide you?
In this section, we provide some useful mixins, functions, and placeholders, which are explained below, at first we have a overview on functions: 

<div style="margin: 50px 0; " name="spacer" />

### 🛠️ Functions
According to the reviews and studies done below, a list of the most used functions is written and ready to be used by the client team.

#### Color 
 The **`color`** function is a utility function designed to retrieve color values based on provided parameters. It supports both named CSS variables and theme-specific colors.

**Parameters:**
```bash
/**
 * @function color
 * @param {String} $color (default: "") - The name of the color to be retrieved. If `is-hex-color` is false, this should correspond to a CSS variable name.
 * @param {String} $theme (default: "") - The name of the theme from which the color should be retrieved. This is required if `$is-hex-color` is true.
 * @param {Boolean} $is-hex-color (default: false) - A flag indicating whether the `$color` is a named CSS variable (`false`) or a hexadecimal color from a theme (`true`).
 */

 @function color($color: "", $theme: "", $is-hex-color: false) {
 ...
}
```


The final value that the value of the specified color. This can be either a CSS variable (if **`is-hex-color`** is false) or a hexadecimal color value from the specified theme (if **`is-hex-color`** is true).

##### Color Function usage
There's two way to use this function: 

```bash
// First and simple
color: color("primary"); 
// or same as before
color: var(--primary);

// Second which have theme and is-hex-color 
color: color("primary", $theme: "light", $is-hex-color: true);
```

<div style="margin: 50px 0; " name="spacer" />


#### ColorByShade 
The **`colorByShade`** function is a utility function designed to retrieve color values and specific shades of colors from a predefined color palette.

**Parameters:**

```bash
/**
 * @function color
 * @param {String} $color (default: "") - The name of the color to be retrieved. This should correspond to a key in the predefined color palette.
 * @param {String} $shade (default: "") - The shade of the color to be retrieved. This should correspond to a key in the color's shade map.
 */

@function colorByShade($color: "", $shade: "") {
 ...
}
```

The final value is the specified shade of the color if **`$shade`** is provided, otherwise, the color does not have a shade, specifying a shade is not necessary.

##### colorByShade Function Usage
Now you can use use this function like this:

```bash
// Retrieving a specific shade of a color
$primary: colorByShade("primary", 10);
```
<div style="margin: 50px 0; " name="spacer" />








<div style="margin: 50px 0; " name="spacer" />

#### Remify
The **`remify`** function is a utility designed to convert pixel values to rem units. This function ensures consistent sizing across different screen resolutions by converting px, em, rem, and unitless values to rem based on the root font size.

💡 Note that remify is primarily used to maintain a scalable and responsive design. It takes into account the current root font size and ensures that all values are correctly converted to rem units for consistency.

**Parameters:**
```bash
/**
 * @function remify
 * @param {Number} $value - The value to be converted. This should be in `px`, `em`, `rem`, or unitless.
 * @return {Number} - The equivalent value in `rem` units.
 */

@function remify($value) {
  ...
}
```
##### Remify Function Usage
Here's how you can use the remify function:

```bash
// Convert 16px to rem
$value-in-rem: remify(16px);

// Convert 1.5em to rem
$value-in-rem: remify(1.5em);

// Use rem value directly (returns the same value)
$value-in-rem: remify(1rem);

// Convert unitless value (e.g., 16) to rem
$value-in-rem: remify(16);
```
This utility helps in maintaining a consistent and scalable design by ensuring all size values are converted to rem, making it easier to manage responsive designs.


<div style="margin: 50px 0; " name="spacer" />

#### Shape
The `shape` function is a utility designed to retrieve predefined shape values from your design system. Shapes typically define the border-radius for various UI elements, ensuring consistent application of rounded corners across your project.

This function simplifies accessing shape values by referencing a key within a predefined map of shapes. If the provided key does not exist in the shape map, the function will generate an error, ensuring that only valid shape keys are used.

**Parameters:**
```bash 
/**
 * @function shape
 * @param {String} $key - The key representing the desired shape. This should match a key within the shapes map.
 * @return {Number | String} - The corresponding value (e.g., border-radius) for the specified shape key.
 */
@function shape($key) {
    ...
}
```

💡Note: The shape function is particularly useful for maintaining consistency in design elements that require rounded corners, such as buttons, cards, and containers. By using predefined shape tokens, you can ensure that the design remains cohesive across different components.

##### Shape Function Usage
Here's how you can use the shape function:

```bash
// Retrieve the border-radius for a medium shape
$medium-radius: shape(md);

// Apply the shape value to a button's border-radius
.button {
    border-radius: shape(md);
}

// Attempting to use an invalid shape key will result in an error
$invalid-radius: shape(invalid-value); // This will trigger an error: "Invalid shape: invalid-value."

```


<div style="margin: 50px 0; " name="spacer" />


#### Shaper
The `shaper` function is a utility that calculates and returns a border-radius value based on a multiplier. It uses the sm shape value from your design system and scales it according to the multiplier provided. This function ensures consistent scaling of border-radius values throughout your project, while still allowing flexibility in design.

**Parameters:**
```bash
/**
 * @function shaper
 * @param {Number} $multiplier - A positive number that will multiply the sm shape value to determine the final border-radius.
 * @return {Calc} - The calculated border-radius value based on the sm shape and the multiplier.
 */
@function shaper($multiplier: 1) {
  ...
}
```

💡 Note: The shaper function is particularly useful for scaling border-radius values proportionally. It ensures that all rounded corners maintain a consistent ratio across different elements in your design.

##### Shaper Function Usage
ere's how you can use the shaper function:

```bash
// Apply the sm shape value directly (no scaling)
$border-radius: shaper(1); // Equivalent to shape(sm)

// Apply a scaled border-radius value by multiplying the sm shape
$border-radius: shaper(2); // Equivalent to shape(sm) * 2

// Use the shaper function in a CSS rule
.card {
    border-radius: shaper(1.5); // Scales the sm shape by 1.5 times
}

// Attempting to use an invalid multiplier will result in an error
$invalid-radius: shaper(-1); // This triggers an error: "-1 must be a positive number."
```

<div style="margin: 50px 0; " name="spacer" />


#### Size
The `size` function is a utility that retrieves predefined size values from your design system. These sizes typically correspond to various dimensions used in your UI components, such as widths, heights. By using the size function, you can ensure that your project consistently applies standardized dimensions, enhancing the uniformity and scalability of your design.

This function works by referencing a key from the sizes map defined in your design system configuration. If the provided key does not exist within the map, the function will throw an error, ensuring that only valid size keys are used.


**Parameters:**
```bash
/**
 * @function size
 * @param {String} $key - The key representing the desired size. This should correspond to a valid key in the sizes map.
 * @return {Number | String} - The corresponding value (e.g., width, height, padding, margin) for the specified size key.
 */
@function size($key) {
  ...
}
```
💡 Note: The size function ensures consistency across your project by enforcing the use of standardized sizes. This is particularly useful for maintaining a cohesive design language across different components and screen sizes.

##### Size Function Usage
Here's how you can use the size function:

```bash
// Apply the size value to a button's padding
.button {
    padding: size(small);
}

// Use the size function in other CSS properties
.container {
    width: size(large);
    height: size(medium);
}

// Attempting to use an invalid size key will result in an error
$width: size(invalid-size); // This triggers an error: "width: invalid-size."
```

<div style="margin: 50px 0; " name="spacer" />


#### Sort map

**Parameters:**

##### Sort map Function Usage

<div style="margin: 50px 0; " name="spacer" />


#### Space
The `space` function is a utility designed to calculate and return spacing values based on a predefined spacer unit. This function is useful for applying consistent spacing across your design, such as margins, paddings, or gaps between elements. By using the space function, you ensure that your spacing is uniform and adheres to the design system's spacing unit.

This function takes a multiplier as a parameter, which scales the base spacer unit defined in your design system. If the provided multiplier is not a positive number, the function will produce an error to maintain consistency.

**Parameters:**
```bash
/**
 * @function space
 * @param {Number} $step - A positive number that scales the base spacer unit. This multiplier determines the final spacing value.
 * @return {Calc} - The calculated spacing value based on the base spacer unit and the provided multiplier.
 */

@function space($step: 0.5) {
 ...
}
```

💡 Note: The space function helps maintain consistent and proportional spacing throughout your design. By using a standardized base unit, you ensure that all spacing is coherent and adheres to your design system.

##### Space Function Usage
```bash
// Apply the spacing value to an element's margin
.box {
    margin: space(2); // Multiplies the base spacer unit by 2
}

// Use the space function for padding and gaps
.container {
    padding: space(0.75); // Multiplies the base spacer unit by 0.75
    gap: space(1); // Multiplies the base spacer unit by 1
}

// Attempting to use a non-positive multiplier will result in an error
padding: space(-1); // This triggers an error: "-1 must be a positive number."

```


<div style="margin: 50px 0; " name="spacer" />


#### Stroke
The `stroke` function is a utility designed to retrieve predefined stroke values from your design system. These strokes typically define border thicknesses or line widths used in various UI components. By using the stroke function, you ensure that all strokes are consistently applied according to your design system's specifications.

This function works by referencing a key from the strokes map. If the provided key does not exist in the map, the function will throw an error, ensuring that only valid stroke keys are used.

**Parameters:**

```bash 
/**
 * @function stroke
 * @param {String} $key - The key representing the desired stroke value. This should correspond to a valid key in the strokes map.
 * @return {Number | String} - The corresponding stroke value (e.g., border-width) for the specified key.
 */
@function stroke($key) {
   ...
}
```
💡 Note: The stroke function ensures consistency in the application of border or line widths, helping maintain a uniform design language across your project.

##### Stroke Function Usage
Here's how you can use the stroke function:

```bash
// Retrieve the stroke value for a predefined key
$medium-stroke: stroke(medium);

// Apply the stroke value to a border width
.box {
    border-width: stroke(thick);
}

// Use the stroke function for various UI components
.button {
    border-width: stroke(semi-narrow); // Applies a semi-narrow border
}

// Attempting to use an invalid stroke key will result in an error
$invalid-stroke: stroke(nonexistent); // This triggers an error: "Invalid stroke: nonexistent."
```
The `stroke` function simplifies the application of consistent border or line widths throughout your design, ensuring that all strokes adhere to your design system's standards.

<div style="margin: 50px 0; " name="spacer" />


#### Z-Index
The `zIndex` function is a utility designed to retrieve predefined z-index values from your design system. These values are crucial for managing the stacking order of elements on your webpage, ensuring that components are layered correctly and consistently. By using the zIndex function, you can maintain a structured and predictable layering of UI elements.

This function references a key from the z-index map defined in your design system. If the provided key does not exist in the map, the function will produce an error, ensuring that only valid z-index keys are used.


**Parameters:**
```bash
/**
 * @function zIndex
 * @param {String} $key - The key representing the desired z-index value. This should correspond to a valid key in the z-index map.
 * @return {Number} - The corresponding z-index value for the specified key.
 */
@function zIndex($key) {
    ...
}
```
💡 Note: The zIndex function ensures that all stacking contexts are applied consistently across your project, helping to manage the visibility and overlap of elements effectively.

##### Z-Index Function Usage
Here's how you can use the zIndex function:

```bash
// Apply the z-index value to a modal
.modal {
    z-index: zIndex(modal);
}

// Use the zIndex function for various layered components
.dropdown {
    z-index: zIndex(dropdown); // Ensures the dropdown is above other elements
}

// Attempting to use an invalid z-index key will result in an error
z-index: zIndex(invalid-zIndex); // This triggers an error: "Invalid z-index: invalid-zIndex."
```
The zIndex function simplifies the management of stacking order in your design system, ensuring consistent and correct layering of UI elements.

<div style="margin: 50px 0; " name="spacer" />


### 🪄 Mixins
According to the reviews and studies done below, a list of the most used mixins is written and ready to be used by the client team.
 

#### Elevation
The **`elevation`** mixin is a versatile utility designed to apply elevation styles to elements. It supports setting background colors, shadows, and glows based on predefined elevation levels. 
Each type of elevation (colors, shadows, and glows) has 5 predefined levels: lowest, low, normal, high, and highest. If your final design requires different values from the default, you need to provide the existing tokens.

💡Note that to add an Elevation to an element, you can use this mixin in three modes, only the color type which is the default mode, the color and shadow mode, or the final mode of using color and glow.
Never use shadow and glow modes at the same time, only one of these two modes can be used with color.

**Parameters:**
```bash
/**
 * @mixin elevation
 * @param {String} $color-level - The elevation level for the background color. This should correspond to a key in the elevation colors map (e.g., "lowest", "low", "normal", "high", "highest").
 * @param {String} $effect-level (default: null) - The elevation level for the effect (shadow or glow). This should correspond to a key in the elevation shadows or glows map (e.g., "lowest", "low", "normal", "high", "highest"). This parameter is optional.
 * @param {String} $type (default: null) - The type of elevation effect to apply. Expected values are "shadow" or "glow". This parameter is required if `$effect-level` is provided.
 */

 @mixin elevation($color-level, $effect-level: null, $type: null) {
 ...
}

```

##### Elevation mixin Usage
There's three way to use this mixin: 

```bash
// First and simple, it just set a color elevation.
@include elevation("lowest"); 

// Second, set a shadow and color  for desire element.
@include elevation("low","normal","shadow"); 


// Third, set a glow  and color for desire element. 
@include elevation("high","highest","glow");
```


<div style="margin: 50px 0; " name="spacer" />

#### State Layer
The **`stateLayer`**  mixin is a utility that provides a mechanism to apply a themed state layer to an element, typically used for hover or focus effects. It leverages the themes defined in the application and applies the corresponding background color to the state layer.

Also this function depends on two function(getThemes,color) and mixin(themeScope).

**Parameters:**
```bash
/**
 * @mixin StateLayer
 * @param {String} $layer (default: "") - The specific layer for which the state color needs to be applied. This is usually a string that corresponds to a color definition in the theme.
 * @param {String} $pseudo-class (default: "hover") - The pseudo-class to apply the state layer to. Default is hover.
 */

 @mixin StateLayer($layer: "", $pseudo-class: "hover") {
 ...
}
```

##### stateLayer Function Usage
```bash
 @include stateLayer(hover-state-layer, 'hover');
```



<div style="margin: 50px 0; " name="spacer" />


#### ThemeScope
The **`themeScope`** mixin is a utility designed to apply styles within the context of a specific theme. It targets elements based on a data attribute that identifies the current theme. This mixin is particularly useful for managing theme-specific styles in a structured and scalable way.

**Parameters:**
```bash
/**
 * @mixin color
 * @param {String} $theme (default: "") - The name of the theme to apply the styles to. This should correspond to the value of the data-theme attribute used in your HTML.
 * @param {String} $scope (default: "&") - The CSS selector scope within which the theme-specific styles should be applied. The default value is &, which refers to the current context where the mixin is called.
 */

 @mixin themeScope($theme: "", $scope: "&") {
 ...
}
```

##### ThemeScope Function Usage
As you see above in stateLayer mixin we can use this mixin like that.
Other example:
```bash 
@include themeScope('light') {
    background-color: color(on-primary);
    color:  color(primary);
}
```

<div style="margin: 50px 0; " name="spacer" />

#### Border
The `border` mixin is a utility for applying consistent border styles across different elements in your design system. It allows you to set the border width, type, and color for specific directions (e.g., top, bottom, left, right) or all sides of an element. By using this mixin, you can ensure that borders are applied uniformly, adhering to your design specifications.

The mixin provides flexibility by allowing you to specify the direction of the border (e.g., top, right, bottom, left, horizontal, vertical, or all), the border width, the border style, and the border color. If an invalid direction is provided, the mixin will throw an error, ensuring only valid directions are used.

**Parameters:**
```bash
/**
 * @mixin border
 * @param {String} $direction - The direction of the border. Options include `all`, `horizontal`, `vertical`, `top`, `right`, `bottom`, `left`.
 * @param {String} $width - The width of the border (default: 1px).
 * @param {String} $type - The type of the border (default: solid).
 * @param {String} $color - The color of the border (default: currentColor).
 */
@mixin border($direction: all, $width: 1px, $type: solid, $color: currentColor) {
  ...
}
```
💡 Note: The border mixin ensures that borders are applied consistently, maintaining the visual integrity of your design.
##### Border Function Usage

```bash
// Apply a solid border on all sides
.box {
    @include border(all, 2px, solid, black);
}

// Apply a dashed border only at the top
.box {
    @include border(top, 3px, dashed, blue);
}

// Apply a border to the left side only
.box {
    @include border(left, 1px, solid, color(on-primary);
}

// Attempting to use an invalid direction will result in an error
.invalid-box {
    @include border(invalid, 2px, solid, green); // This triggers an error: "Invalid direction: invalid."
}

```

<div style="margin: 50px 0; " name="spacer" />



#### Breakpoint


**Parameters:**



##### Breakpoint Function Usage


<div style="margin: 50px 0; " name="spacer" />



#### Dimension
The `dimension` mixin is a utility for setting the width and height of elements in your design system. It allows you to define both dimensions with a single mixin, streamlining the process of applying consistent sizes across your project.

You can specify custom values for the width and height or use the default auto values. This mixin is particularly useful for ensuring that elements are sized according to your design specifications while maintaining flexibility for various layout needs.

**Parameters:**
```bash
/**
 * @mixin dimension
 * @param {String|Number} $width - The width of the element (default: auto).
 * @param {String|Number} $height - The height of the element (default: auto).
 */
@mixin dimension($width: auto, $height: auto) {
...
}
```
💡 Note: The dimension mixin is ideal for setting dimensions in a clean, concise manner, ensuring that your elements adhere to the intended design layout.

##### Dimension Function Usage
```bash
// Set a fixed width and height for an element
.box {
    @include dimension(100px, 200px);
}

// Set only the width, while keeping the height auto
.box {
    @include dimension(150px);
}

// Set only the height, while keeping the width auto
.box {
    @include dimension(auto, 300px);
}

// Use auto for both width and height
.box {
    @include dimension();
}
```

The dimension mixin simplifies the process of applying consistent width and height values to elements, ensuring that your design remains cohesive and easy to manage.


<div style="margin: 50px 0; " name="spacer" />



#### Divider
The `divider` mixin is a utility designed to create horizontal or vertical dividers. It allows you to easily define the direction, size, and color of the divider, providing a consistent way to separate content in your design.

This mixin enables you to specify whether the divider should be horizontal or vertical, set the thickness (size) of the divider, and choose its color. If an invalid direction is provided, the mixin will throw an error, ensuring that only valid directions are used.

**Parameters:**
```bash
/**
 * @mixin divider
 * @param {String} $direction - The direction of the divider (`horizontal` or `vertical`).
 * @param {String|Number} $size - The thickness of the divider (default: 1px).
 * @param {String} $color - The color of the divider (default: currentColor).
 */
@mixin divider($direction: horizontal, $size: 1px, $color: currentColor) {
  ...
}
```
💡 Note: The divider mixin is useful for creating visual separation between sections of content, ensuring consistency across your layout.

##### Divider Function Usage
Here's how you can use the divider mixin:

```bash
// Create a horizontal divider with default size and color
.horizontal-divider {
    @include divider(horizontal);
}

// Create a vertical divider with custom size and color
.vertical-divider {
    @include divider(vertical, 2px, gray);
}

// Create a thicker horizontal divider
.thick-horizontal-divider {
    @include divider(horizontal, 4px, black);
}

// Attempting to use an invalid direction will result in an error
.invalid-divider {
    @include divider(diagonal, 1px, color(on-primary)); // This triggers an error: "Invalid direction: diagonal."
}
```
The divider mixin streamlines the process of adding horizontal or vertical dividers to your design, ensuring that they are applied consistently and according to your design specifications.

<div style="margin: 50px 0; " name="spacer" />



#### Flex
The `flex` mixin is a utility for easily applying common flexbox properties to elements. It provides a quick way to control the layout direction, wrapping behavior, alignment, and justification of flex items, while also offering the option to use either flex or inline-flex display types.

This mixin simplifies the process of setting up a flex container, making it easier to create flexible and responsive layouts.

**Parameters:**
```bash
/**
 * @mixin flex
 * @param {String} $direction - The flex direction (`row`, `column`, etc.) (default: row).
 * @param {String} $wrap - The flex wrapping behavior (`nowrap`, `wrap`, etc.) (default: nowrap).
 * @param {String} $align - The alignment of flex items (`flex-start`, `center`, etc.) (default: flex-start).
 * @param {String} $justify - The justification of flex items (`flex-start`, `center`, etc.) (default: flex-start).
 * @param {Boolean} $is-inline - Whether to use `inline-flex` (default: false).
 */
@mixin flex($direction: row, $wrap: nowrap, $align: flex-start, $justify: flex-start, $is-inline: false) {
  ...
}
```
💡 Note: The flex mixin is ideal for creating flexible and responsive container layouts with minimal code.

##### Flex Function Usage
Here's how you can use the flex mixin:

```bash
// Create a basic flex container with default properties
.flex-container {
    @include flex();
}

// Create a flex container with a column layout and centered items
.flex-column-centered {
    @include flex(column, nowrap, center, center);
}

// Create an inline flex container with wrapped items
.inline-flex-container {
    @include flex(row, wrap, flex-start, flex-start, true);
}

// Create a flex container with justified content
.flex-justified {
    @include flex(row, nowrap, flex-start, space-between);
}

```
The flex mixin allows you to quickly set up a flex-box layout with customizable properties, ensuring your designs are responsive and easy to manage.

<div style="margin: 50px 0; " name="spacer" />



#### Placeholder
The `placeholder` mixin is a utility designed to apply consistent styles to placeholder text across different browsers. It ensures that your placeholder styles are applied uniformly, regardless of the browser being used, by targeting various browser-specific pseudo-elements.

This mixin is useful for customizing the appearance of placeholder text in form inputs, making sure the styles you define are consistent across all major browsers.
**Parameters:**

```bash
/**
 * @mixin placeholder
 * This mixin does not take any parameters directly. Instead, it applies styles to all relevant placeholder pseudo-elements.
 * The styles to be applied are passed as `@content`.
 */
@mixin placeholder {
  ...
}
```
💡 Note: The placeholder mixin ensures that the custom styles you define for placeholder text are applied across different browsers, improving the consistency of your form input designs.

##### Placeholder Function Usage
Here's how you can use the placeholder mixin:

```bash
// Apply a custom color to placeholder text
.input-placeholder {
    @include placeholder {
        color: gray;
    }
}

// Apply multiple styles to placeholder text
.custom-placeholder {
    @include placeholder {
        color: #aaa;
        font-style: italic;
        opacity: 0.7;
    }
}

// Apply different styles based on the browser (if needed)
.browser-specific-placeholder {
    @include placeholder {
        color: blue;
    }
}
```

<div style="margin: 50px 0; " name="spacer" />



#### Position
The `position` mixin is a versatile utility for setting an element's position and offset values. It allows you to easily position elements using standard CSS properties and provides additional options for centering elements along a specific axis or both axes.

This mixin is helpful when you need to position elements in a precise location on the page, whether it's aligning to edges or centering within a parent container.

**Parameters:**
```bash
/**
 * @mixin position
 * @param {String} $position - The CSS position value (e.g., `absolute`, `relative`, `fixed`).
 * @param {Number|String} $top - The `top` offset value.
 * @param {Number|String} $right - The `right` offset value.
 * @param {Number|String} $bottom - The `bottom` offset value.
 * @param {Number|String} $left - The `left` offset value.
 * @param {String|null} $axis - Optionally specify `horizontal`, `vertical`, or `both` to center along that axis.
 */
@mixin position($position: absolute, $top: 0, $right: 0, $bottom: 0, $left: 0, $axis: null) {
  ...
}
```
💡 Note: The axis parameter enables centering an element along the horizontal, vertical, or both axes, simplifying complex positioning tasks.

##### Position Function Usage
Here's how you can use the position mixin:

```bash
// Position an element absolutely with specific offsets
.element-absolute {
  @include position(absolute, $top: 10px, $left: 20px);
}

// Center an element horizontally
.element-center-horizontal {
  @include position($axis: "horizontal");
}

// Center an element vertically
.element-center-vertical {
  @include position($axis: "vertical");
}

// Center an element both horizontally and vertically
.element-center-both {
  @include position($axis: "both");
}

// Use fixed positioning with custom offsets
.element-fixed {
  @include position(fixed, $bottom: 20px, $right: 10px);
}

```
The position mixin streamlines the process of positioning elements on a page, offering a flexible approach to both standard and centered positioning scenarios.

<div style="margin: 50px 0; " name="spacer" />




#### Pseudo
The `pseudo` mixin is designed to create and style pseudo-elements (::before or ::after) with customizable content, positioning, and other styles. This mixin simplifies the process of adding pseudo-elements to your CSS, allowing you to set their position and apply additional styles using the @content block.

This mixin is particularly useful for adding decorative elements, backgrounds, or other enhancements to your design without altering the HTML structure.
**Parameters:**
```bash
/**
 * @mixin pseudo
 * @param {String} $location - Specifies the pseudo-element (`before` or `after`).
 * @param {String} $content - The content to be displayed in the pseudo-element.
 * @param {String} $position - The CSS position value (e.g., `absolute`, `relative`, `fixed`) for the pseudo-element.
 * @param {Number|String} $top - The `top` offset value for the pseudo-element.
 * @param {Number|String} $right - The `right` offset value for the pseudo-element.
 * @param {Number|String} $bottom - The `bottom` offset value for the pseudo-element.
 * @param {Number|String} $left - The `left` offset value for the pseudo-element.
 * @param {String|null} $axis - Optionally specify `horizontal`, `vertical`, or `both` to center the pseudo-element along that axis.
 */
@mixin pseudo(
  $location: before,
  $content: "",
  $position: absolute,
  $top: 0,
  $right: 0,
  $bottom: 0,
  $left: 0,
  $axis: null
) {
  ...
}
```

💡 Note: The @content block within the mixin allows for additional custom styles to be applied directly to the pseudo-element.

##### Pseudo Function Usage
Here's how you can use the pseudo mixin:

```bash
// Add a ::before pseudo-element with custom content and styles
.element-with-before {
  @include pseudo(before, $content: "Hello", $top: 10px, $left: 10px) {
    color: color(on-primary);
    font-weight: bold;
  }
}

// Add a ::after pseudo-element centered horizontally
.element-with-after {
  @include pseudo(after, $content: "", $axis: "horizontal") {
    width: 50%;
    height: 2px;
    background-color: color(on-primary);
  }
}

// Use pseudo-element with absolute positioning and no additional content
.element-with-pseudo {
  @include pseudo($location: before, $position: absolute, $top: 0, $left: 0) {
    width: 100%;
    height: 100%;
    background-color: color(primary);
  }
}

```

<div style="margin: 50px 0; " name="spacer" />




#### Scrollbar
The `scrollbar` mixin is a utility for customizing the appearance of scrollbar in web applications. It allows you to define the size, colors, and border-radius of the scrollbar and its components, ensuring a consistent and visually appealing user interface. This mixin is particularly useful for enhancing the look and feel of scrollbar, which can often be overlooked in web design.


**Parameters:**
```bash
/**
 * @mixin scrollbar
 * @param {Number|String} $width - The width of the scrollbar.
 * @param {Number|String} $height - The height of the scrollbar.
 * @param {Color} $scroll-default-color - The default color of the scrollbar thumb.
 * @param {Color} $scroll-hover-color - The color of the scrollbar thumb when hovered.
 * @param {Color} $scroll-track-color - The background color of the scrollbar track (default: transparent).
 * @param {Number|String} $border-radius - The border-radius of the scrollbar thumb (default: 0).
 */
@mixin scrollbar(
  $width: 0.5rem,
  $height: 1rem,
  $scroll-default-color,
  $scroll-hover-color,
  $scroll-track-color: transparent,
  $border-radius: 0
) {
  ...
}
```
💡 Note: The mixin primarily targets WebKit-based browsers (e.g., Chrome, Safari), as they allow for the customization of scrollbar styles using the -webkit-scrollbar pseudo-elements.

##### Scrollbar Function Usage
Here's how you can use the scrollbar mixin:

```bash
// Customize the scrollbar for an element with specific colors and dimensions
.custom-scrollbar {
  @include scrollbar(
    $width: 8px,
    $height: 8px,
    $scroll-default-color: #ccc,
    $scroll-hover-color: #888,
    $scroll-track-color: #f0f0f0,
    $border-radius: 4px
  );
}

// Apply a minimalist scrollbar style with a transparent track
.minimal-scrollbar {
  @include scrollbar(
    $width: 6px,
    $height: 6px,
    $scroll-default-color: #444,
    $scroll-hover-color: #222,
    $scroll-track-color: transparent,
    $border-radius: 2px
  );
}

// Add a thick scrollbar with a prominent color change on hover
.thick-scrollbar {
  @include scrollbar(
    $width: 12px,
    $height: 12px,
    $scroll-default-color: #999,
    $scroll-hover-color: #555,
    $scroll-track-color: #ddd,
    $border

```
The scrollbar mixin provides a simple and effective way to style scrollbars, enhancing the overall user experience by making them blend seamlessly with your design.
<div style="margin: 50px 0; " name="spacer" />


#### Typography
The `typography` mixin is designed to apply responsive typography styles based on different breakpoints in your project. It allows you to specify a typography style by name, and the mixin automatically adjusts the typography settings across various breakpoints. This ensures that your text remains consistent and responsive, adapting seamlessly to different screen sizes.
**Parameters:**
```bash
/**
 * @mixin typography
 * @param {String} $name - The name of the typography style to apply.
 */
@mixin typography($name) {
  ...
}
```
💡 Note: The typography mixin works in conjunction with the breakpoint and typography configurations defined in your project. It relies on maps to fetch the appropriate typography settings for each breakpoint.

##### Typography Function Usage
Here's how you can use the typography mixin:

```bash
// Apply the 'body-large' typography style across breakpoints
body {
  @include typography('body-large');
}

// Apply a custom typography style named 'header' across breakpoints
h1 {
  @include typography('header');
}

```

 How It Works:

 1- Typography Map Lookup: The mixin first retrieves the typography and breakpoint configurations from your project. These are stored as maps.

 2- Breakpoint Sorting: The mixin sorts the breakpoints according to the order specified in the typography-breakpoint-mapper.

 3- Responsive Typography Application: The mixin iterates over each breakpoint, applying the corresponding typography styles for the given $name.

 4- Error Handling: If an invalid typography name or breakpoint is provided, the mixin will throw an error, ensuring that you catch any issues during development.



This mixin allows you to define and apply responsive typography styles easily, ensuring that your text adapts gracefully to different screen sizes and resolutions.
<div style="margin: 50px 0; " name="spacer" />





### 🧩 Placeholders
According to the reviews and studies done below, a list of the most used placeholders is written and ready to be used by the client team.

#### Truncate
The `truncate` placeholder is a utility for managing text overflow within a container. It ensures that text that extends beyond the available width is visually truncated with an ellipsis (...). This is particularly useful for cases where you want to maintain a clean layout without compromising on readability.

##### Truncate placeholder Usage
How It Works:

1- `overflow: hidden;`: Hides any text that exceeds the bounds of the container.
2- `white-space: nowrap;`: Prevents the text from wrapping to the next line.
3- `text-overflow: ellipsis;`: Adds an ellipsis to indicate that the text is truncated.

Here's how you can use the truncate mixin:

```bash
// Apply text truncation to a button
.button {
  @extend %truncate;
  width: 150px; // Set a fixed width to see truncation effect
}

// Apply text truncation to a label
.label {
  @extend %truncate;
  max-width: 200px; // Set a max-width to handle long text
}
```

This placeholder helps maintain a clean and consistent design by handling overflow text in a straightforward and efficient manner.


#### Hide-scrollbar
The `hide-scrollbar` placeholder provides a simple way to hide scrollbars from an element without affecting its ability to scroll. This can be useful in designs where scrollbars are visually distracting or unnecessary, but you still want the content to be scrollable.

##### Hide-scrollbar placeholder Usage
How It Works:

1- `-ms-overflow-style: none;`: Hides the scrollbar in Internet Explorer and Edge browsers.
2- `scrollbar-width: none;`: Hides the scrollbar in Firefox.
3- `&::-webkit-scrollbar { display: none; }` : Hides the scrollbar in WebKit-based browsers like Chrome and Safari.

Here's how you can use the hide-scrollbar mixin:

```bash
// Hide scrollbar on a container while keeping content scrollable
.container {
  @extend %hide-scrollbar;
  overflow: auto; // Ensure the element remains scrollable
  height: 200px;  // Set a fixed height to enable scrolling
}

```
This placeholder ensures that your content remains accessible and scrollable while removing the visual clutter of scrollbars.