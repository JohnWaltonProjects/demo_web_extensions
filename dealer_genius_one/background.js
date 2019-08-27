chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === 'New User Data')
        {
            alert('new user data!' );
            user = {username: request.username, password: request.password};
        }
        if (request.message === "Paste User Data")
        {
            alert('recieved')
            alert('Paste User Data')
            alert('sending message to content injection')
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {message: request.message, data: user})
            })
        }
        alert('data recieved for User: ' + user.username)

        // sendResponse({username: "usernameeee"});
    }
)
