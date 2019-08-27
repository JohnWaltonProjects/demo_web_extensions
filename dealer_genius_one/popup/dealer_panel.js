var paste  = document.getElementById('paste');
paste.addEventListener('click', ev => {
  alert('click det ected')
  chrome.runtime.sendMessage( {message: "Paste User Data"}, function (response) {
    alert('message away! PASTE UYSER DATA')
  })
})

// GET SUPPORT BUTTON  & FORM
document.getElementById('get-support').addEventListener('click', ev => {
  //REMOVES ELE
  document.getElementById('get-support').parentNode.removeChild(document.getElementById('get-support'))
  //REMOVES CLASS HIDDEN
  document.getElementById('support').classList.remove('hidden')
})

//SEND MSG TO INJECT TO COPY USER DATA (SEND DATA TO BACKGROUND)
// document.getElementById()
//
// chrome.tabs.query({currentWindow: true, active: true},
//     function (tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, copyUser)
//     })