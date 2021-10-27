function User(FName, UName, Uemail, Upas) {
   this.FName = FName;
   this.UName = UName;
   this.Uemail = Uemail;
   this.Upas = Upas;
}

$('#signup').click(function () {
   let FName = $("#firstName").val();
   let UName = $("#username").val();
   let Uemail = $("#emil").val();
   let Upas = $("#password").val();
   if (FName === "" || UName === "" || Uemail === "" || Upas === "") {
      $('#validationMessage').removeClass('hidden');
      // event.preventDefault();
   } else {
      let newUser = new User(FName, Uemail, UName, Upas);
      let selectedUsers = JSON.parse(window.localStorage.getItem('RegisteredUsers'));
      console.log(selectedUsers);

      if (selectedUsers == null) {
         let a = [];
         a.push(newUser);
         console.log(newUser);
         window.localStorage.setItem('RegisteredUsers', JSON.stringify(a));
         window.location.href = ("signin.html")
      } else {
         selectedUsers.push(newUser);
         window.localStorage.setItem('RegisteredUsers', JSON.stringify(selectedUsers));
         window.location.href = ("signin.html")
      }
   }
})