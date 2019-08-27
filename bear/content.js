// alert('grrr.');

// Sender Response
chrome.runtime.onMessage.addListener(function (request, sender, senderResponse) {
    alert(request);
    // const re = new RegExp('bear', 'gi')
    // const matches = document.documentElement.innerHTML.match(re)
    const textUsername = document.getElementsByName('textUsername')[0].innerText
    senderResponse({username: textUsername})
})

// const re = new RegExp('bear', 'gi')
// const matches = document.documentElement.innerHTML.match(re)
// chrome.runtime.sendMessage({
//     url: window.location.href,
//     count: matches.length
// })