## settingspanel.js
hideable UI to change game settings during runtime

## Live Example
https://davidfig.github.io/settingspanel/

## Installation

    npm i settingspanel

# API Reference
<a name="SettingsPanel"></a>

## SettingsPanel
**Kind**: global class  

* [SettingsPanel](#SettingsPanel)
    * [new SettingsPanel([options])](#new_SettingsPanel_new)
    * [.button(text, callback, [options])](#SettingsPanel+button)
    * [.input(label, callback, [options])](#SettingsPanel+input)
    * [.hide()](#SettingsPanel+hide)
    * [.show()](#SettingsPanel+show)
    * [.side(side)](#SettingsPanel+side)

<a name="new_SettingsPanel_new"></a>

### new SettingsPanel([options])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>object</code> |  |  |
| [options.style] | <code>object</code> |  | CSS style to apply to the parent div |
| [options.parent] | <code>object</code> | <code>document.body</code> | where to append div |
| [options.color] | <code>string</code> | <code>&quot;&#x27;white&#x27;&quot;</code> | default foreground |
| [options.background] | <code>string</code> | <code>&quot;&#x27;black&#x27;&quot;</code> | default background |
| [options.open] | <code>boolean</code> | <code>true</code> | show when starting |
| [options.side] | <code>string</code> | <code>&quot;&#x27;right&#x27;&quot;</code> | change side: 'left' or 'right' |

<a name="SettingsPanel+button"></a>

### settingsPanel.button(text, callback, [options])
adds a button with callback

**Kind**: instance method of <code>[SettingsPanel](#SettingsPanel)</code>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | to display |
| callback | <code>function</code> | on button click; if returns a value, then replaces button text with [text + result] |
| [options] | <code>object</code> |  |
| [options.original] | <code>object</code> | original settings for button - sets text as [text + original]; change through callback (see above) |
| [options.color] | <code>string</code> | foreground color |
| [options.background] | <code>string</code> | background color |
| [options.style] | <code>object</code> | CSS for button |

<a name="SettingsPanel+input"></a>

### settingsPanel.input(label, callback, [options])
adds an input panel

**Kind**: instance method of <code>[SettingsPanel](#SettingsPanel)</code>  

| Param | Type | Description |
| --- | --- | --- |
| label | <code>string</code> | text |
| callback | <code>function</code> | on change input |
| [options] | <code>object</code> |  |
| [options.original] | <code>object</code> | original settings for input |
| [options.color] | <code>string</code> | foreground color |
| [options.background] | <code>string</code> | background color |
| [options.style] | <code>object</code> | CSS for button |
| [options.sameLine] | <code>boolean</code> | same line for label and text |
| [options.size] | <code>number</code> | size (number of characters) of input box |

<a name="SettingsPanel+hide"></a>

### settingsPanel.hide()
hides the SettingsPanel

**Kind**: instance method of <code>[SettingsPanel](#SettingsPanel)</code>  
<a name="SettingsPanel+show"></a>

### settingsPanel.show()
shows the SettingsPanel

**Kind**: instance method of <code>[SettingsPanel](#SettingsPanel)</code>  
<a name="SettingsPanel+side"></a>

### settingsPanel.side(side)
change side of panel

**Kind**: instance method of <code>[SettingsPanel](#SettingsPanel)</code>  

| Param | Type | Description |
| --- | --- | --- |
| side | <code>string</code> | 'left' or 'right' |


* * *

Copyright (c) 2017 YOPEY YOPEY LLC - MIT License - Documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)