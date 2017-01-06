const SettingsPanel = require('../settingspanel/settingspanel.js');

// initializes the Settings Panel
const panel = new SettingsPanel({background: 'rgb(50,50,50)'});

// create a button that changes its own color on callback
const button = panel.button('change background', function() { button.style.background = randomColor(); });

// create an input panel that changes the test text in the middle of the page
const text = number();
panel.input('red ', function(value) { text.innerHTML = value; }, {original: text.innerHTML});

// create a button with instruction text that does nothing when pressed
panel.button('<b>Instructions</b>:<br>* change the red input<br>* press the change background button<br>* press the triangle to minimize this panel', null, {style: {textAlign: 'left', background: 'green'}});

// create and style test text
function number()
{
    const number = document.createElement('div');
    document.body.appendChild(number);
    number.innerHTML = rand(1000);
    number.style.fontSize = '300%';
    number.style.position = 'fixed';
    number.style.left = number.style.top = '50%';
    number.style.color = 'red';
    return number;
}

// random functions

function randomColor()
{
    return 'rgb(' + rand(255) + ',' + rand(255) + ',' + rand(255) + ')';
}

function rand(max)
{
    return Math.floor(Math.random() * max);
}

window.onload = require('./highlight-code.js');