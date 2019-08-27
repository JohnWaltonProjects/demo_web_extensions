document.addEventListener('DOMContentLoaded', function () {

    // const bg = chrome.extension.getBackgroundPage()
    // Object.keys(bg.bears).forEach(function (url) {
    //     const div = document.createElement('div')
    //     div.textContent = `${url}: ${bg.bears[url]}`
    //      document.body.appendChild(div)
    // })

    //CPV LABS
    document.getElementsByName('btnSubmit_x')[0].addEventListener('submit', onsubmit, false)
    function onsubmit() {
        event.preventDefault()

        chrome.tabs.query({currentWindow: true, active: true},
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'hi', copyUser)
            })
    }

    function copyUser(res) {
        username = `${res.username}`
        alert(username)
        // const div = document.createElement('div')
        // div.textContent = `Username: ${res.username}`
        // document.body.appendChild(div)
    }
}, false)

//SHOW USER
document.querySelector('#show').addEventListener('click', onclick, false)
function onclick() {
    chrome.tabs.query({currentWindow: true, active: true},
        function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, 'hi', copyUser)
        })
}

