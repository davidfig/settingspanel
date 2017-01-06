// SettingsPanel - a debug panel for changing game settings
// hideable UI to change game settings during runtime

let _id = 1;

class SettingsPanel
{
    /**
     * @param {object} [options]
     * @param {object} [options.style] CSS style to apply to the parent div
     * @param {object} [options.parent=document.body] where to append div
     * @param {string} [options.color='white'] default foreground
     * @param {string} [options.background='black'] default background
     * @param {boolean} [options.open=true] show when starting
     * @param {string} [options.side='right'] change side: 'left' or 'right'
     */
    constructor(options)
    {
        options = options || {};
        this.div = document.createElement('div');
        if (options.parent)
        {
            options.parent.appendChild(this.div);
        }
        else
        {
            document.body.appendChild(this.div);
        }
        this.div.id = 'SettingsPanel #' + _id++;
        this.color = options.color || 'white';
        this.background = options.background || 'black';
        const styles = {
            'position': 'fixed',
            'color': this.color,
            'bottom': 0,
            'zIndex': 100,
            'textAlign': 'center',
            'opacity': 0.85
        };
        this._topSetup();
        this._setStyles(this.div, styles, options.style);
        this.side(options.side);
        this.open = typeof options.open !== 'undefined' ? options.open : true;
    }

    /**
     * adds a button with callback
     * @param {string} text to display
     * @param {function} callback on button click; if returns a value, then replaces button text with [text + result]
     * @param {object} [options]
     * @param {object} [options.original] original settings for button - sets text as [text + original]; change through callback (see above)
     * @param {string} [options.color] foreground color
     * @param {string} [options.background] background color
     * @param {object} [options.style] CSS for button
     */
    button(text, callback, options)
    {
        options = options || {};
        const div = document.createElement('div');
        this.div.appendChild(div);
        div.callback = callback;
        div.addEventListener('click', this._buttonCallback.bind(div));
        div.addEventListener('touchstart', this._buttonCallback.bind(div));
        div.innerHTML = text + (options.original ? options.original : '');
        div.text = text;
        const styles = {
            'background': this.background,
            'padding': '1em',
            'borderBottom': '1px white solid',
            'cursor': 'pointer',
            'userSelect': 'none'
        };
        if (options.background)
        {
            styles['background'] = options.background;
        }
        if (options.color)
        {
            styles['color'] = options.color;
        }
        this._setStyles(div, styles, options.style);
        return div;
    }

    _buttonCallback()
    {
        if (this.callback)
        {
            const result = this.callback();
            if (typeof result !== 'undefined')
            {
                this.innerHTML = this.text + result;
            }
        }
    }

    /**
     * adds an input panel
     * @param {string} label text
     * @param {function} callback on change input
     * @param {object} [options]
     * @param {object} [options.original] original settings for input
     * @param {string} [options.color] foreground color
     * @param {string} [options.background] background color
     * @param {object} [options.style] CSS for button
     * @param {boolean} [options.sameLine] same line for label and text
     * @param {number} [options.size] size (number of characters) of input box
     */
    input(text, callback, options)
    {
        options = options || {};
        const div = document.createElement('div');
        this.div.appendChild(div);
        const styles = {
            'background': this.background,
            'padding': '1em',
            'borderBottom': '1px white solid',
            'cursor': 'pointer',
            'userSelect': 'none'
        };
        if (options.background)
        {
            styles['background'] = options.background;
        }
        if (options.color)
        {
            styles['color'] = options.color;
        }
        this._setStyles(div, styles, options.style);
        const label = document.createElement(options.sameLine ? 'span' : 'div');
        div.callback = callback;
        div.appendChild(label);
        label.innerHTML = text;
        div.input = document.createElement('input');
        div.appendChild(div.input);
        div.input.style.fontSize = '1em';
        div.input.style.textAlign = 'right';
        div.input.style.padding = 0;
        div.input.style.background = this.background;
        div.input.style.color = 'white';
        if (options.size)
        {
            div.input.style.width = options.size + 'em';
        }
        div.input.defaultValue = typeof options.original !== 'undefined' ? options.original : null;
        div.input.onchange = this._inputCallback.bind(div);
        return div;
    }

    /**
     * input callback function with value
     * @private
     */
    _inputCallback()
    {
        this.callback(this.input.value);
    }

    /**
     * sets styles
     * @private
     * @param {object} div
     */
    _setStyles(div, styles1, styles2)
    {
        for (const style in styles1)
        {
            div.style[style] = styles1[style];
        }
        if (styles2)
        {
            for (const style in styles2)
            {
                div.style[style] = styles2[style];
            }
        }
    }

    /**
     * sets up arrow
     * @private
     */
    _topSetup()
    {
        const div = this.top = document.createElement('div');
        this.div.appendChild(div);
        const styles = {
            'margin': 'auto 0',
            'color': this.background,
            'fontSize': '150%',
            'cursor': 'pointer'
        };
        this._setStyles(div, styles);
        div.addEventListener('click', this._toggleTop.bind(this));
        div.addEventListener('touchstart', this._toggleTop.bind(this));
        this._topShow();
        div.innerHTML = this.open ? '&#9650;' : '&#9660;';
    }

    /**
     * shows top arrow
     * @private
     */
    _topShow()
    {
        this.top.innerHTML = this.open ? '&#9660;' : '&#9650;';
    }

    /**
     * hides the SettingsPanel
     */
    hide()
    {
        this.open = false;
        this.div.style.bottom = -(this.div.offsetHeight - this.top.offsetHeight) + 'px';
        this._topShow();
    }

    /**
     * shows the SettingsPanel
     */
    show()
    {
        this.open = true;
        this.div.style.bottom = 0;
        this._topShow();
    }

    /**
     * toggle top when pressed
     * @private
     */
    _toggleTop()
    {
        this.open = !this.open;
        if (this.open)
        {
            this.show();
        }
        else
        {
            this.hide();
        }
    }

    /**
     * change side of panel
     * @param {string} side - 'left' or 'right'
     */
    side(side)
    {
        if (side === 'left')
        {
            this.div.style.left = 0;
            this.div.style.right = null;
        }
        else
        {
            this.div.style.left = null;
            this.div.style.right = 0;
        }
    }
}

module.exports = SettingsPanel;