var valid_form_page_urls = ['https://demo.cpvlab.pro/login.php'];
var current_url = window.location.href;
var is_supported = valid_form_page_urls.indexOf(current_url);

//DETECT SUPPORTED

if (is_supported >= 0)
{
  document.body.style.border = 'solid 5px green';
  var form = document.querySelector('form');
  form.style.border = 'solid 5px blue';
  // CPV LABS
  // USERNAME
  var username = document.getElementsByName('txtUsername')[0];
  username.style.border = 'solid 5px blue';
  //  PASSWORD
  var password = document.getElementsByName('txtPassword')[0];
  password.style.border = 'solid 5px blue';
  // SUBMIT BUTTON
  var submit_button = document.querySelector('button[type="submit"]');
  submit_button.style.border = 'solid 5px green';
  // SUBMIT LISTENER
submit_button.addEventListener('click', evt => {
  // FUNCTION ON SUBMIT
  // CLEAN USERNAME
  if (typeof (username.value) != 'undefined' && username.value != null)
  {
    var cleanedUsername = username.value;
  } else {
    var cleanedUsername = null;
  }
  // CLEAN PASSWORD
  if (typeof (password.value) != 'undefined' && password.value != null)
  {
    var cleanedPassword = password.value;
  } else {
    var cleanedPassword = null;
  }
  // SEND USER AS MESSAGE
  //  var user = {message: 'New User Data', username: cleanedUsername, password: cleanedPassword};
  alert('Username: ' + cleanedUsername +"\n\n" + 'Password: ' + cleanedPassword);
  chrome.runtime.sendMessage( {message: 'New User Data', username: cleanedUsername, password: cleanedPassword},
      alert('User Sent'));
})
  // END CPV LABS
  // IS NOT SUPPORTED
} else {
  document.body.style.border = "solid 5px red";
}



//
// document.getElementById('Form1').addEventListener('submit', ev => {
//   alert('submit detected');
//   var formData = new FormData(document.getElementById('Form1'));
//     alert('Form Data not undefined and not null);
// });

//CPVLAB FORM DATA
// if (typeof (is_cpvlab) != 'undefined' && is_cpvlab != null)
// {
//   alert('CPVLABS DETECTED!');
//
// }

//SEND FORM DATA TO BACKGROUND


//PASTE IN THE USER DATA TO FORM
// chrome.runtime.onMessage.addListener(function (request, sender, senderRespsonse) {
  //RECEIVE MESSAGE OF USER DATA FROM BACKGROUND
// })
// -> IF USER DATA EXISTS
// Object.keys(bg.bears).forEach(function (url) {