const highlight = require('./highlight')
const SettingsPanel = require('..')

function test()
{
    // initializes the Settings Panel
    const panel = new SettingsPanel({ background: 'rgb(50,50,50)' })

    // create a button that changes its own color on callback and increments a counter on the button
    let count = 0
    const button = panel.button('change button background: ', function () { button.style.background = randomColor(); return count++; })

    // create an input panel that changes the test text in the middle of the page
    const text = number()
    panel.input('red ',
        function (value)
        {
            text.innerHTML = value
        }, { original: text.innerHTML, color: 'red' })

    // creates a toggle button that changes the opacity of red
    panel.button('red is visible: ',
        function ()
        {
            if (text.style.opacity === '1')
            {
                text.style.opacity = '0.2'
                return 'no'
            }
            else
            {
                text.style.opacity = '1'
                return 'yes'
            }
        }, { original: 'yes', background: 'rgb(150,0,0' })

    let right = true
    panel.button('side of panel: ',
        function ()
        {
            right = !right
            panel.side(right ? 'right' : 'left')
            return right ? 'right' : 'left'
        }, { original: 'right', background: 'rgb(0,0,150)' })

    // create a button with instruction text that does nothing when pressed
    panel.button('<b>Instructions for panels</b>:' +
        '<br>* change background of the button' +
        '<br>* change the red value' +
        '<br>* make red visible/invisible' +
        '<br>* change    the side of the panel' +
        '<br>* press the triangle to minimize this panel', null, { style: { textAlign: 'left', background: 'green' } })

    // create and style test text
    function number()
    {
        const number = document.createElement('div')
        document.body.appendChild(number)
        number.innerHTML = rand(1000)
        number.style.fontSize = '300%'
        number.style.position = 'fixed'
        number.style.left = number.style.top = '50%'
        number.style.color = 'red'
        number.style.opacity = 1
        return number
    }

    // random functions

    function randomColor()
    {
        return 'rgb(' + rand(255) + ',' + rand(255) + ',' + rand(255) + ')'
    }

    function rand(max)
    {
        return Math.floor(Math.random() * max)
    }
}

window.onload = () => {
    highlight()
    test()
}