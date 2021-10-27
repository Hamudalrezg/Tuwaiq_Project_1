$('#login').click(function () {
  let userName = $("#userName").val();
  let pwd = $("#password").val();
  let users = JSON.parse(window.localStorage.getItem('RegisteredUsers'));
  //  console.log(users);
  if (users != null) {
    const currentUser = users.find(({
      UName
    }) => userName === UName);
    // console.log(currentUser);
    if (currentUser && currentUser.UName === userName && currentUser.Upas === pwd) {
      window.location.href = "rooms.html";
    } else {
      // event.preventDefault();
      //show message that please enter correct user name and
      $('#validationMessage').removeClass('hidden');
    }
  } else {
    $('#noUserMessage').removeClass('hidden');

  }
});