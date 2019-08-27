var username = document.getElementsByName('txtUsername')[0];
var password = document.getElementsByName('txtPassword')[0];

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "Paste User Data") {
            alert('final message recieved but is data here too?')
            alert(request.data.username)
            username.value = request.data.username
            password.value = request.data.password
        }
    }
)
