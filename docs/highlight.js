module.exports = function ()
{
    var client = new XMLHttpRequest()
    client.open('GET', 'code.js')
    client.onreadystatechange = function()
    {
        var code = document.getElementById('code')
        code.innerHTML = client.responseText
        require('highlight.js').highlightBlock(code)
    }
    client.send()

    require('fork-me-github')()
}

// for eslint
/* globals window, XMLHttpRequest, document */