var userFullNameElement = document.getElementById("user-fullname");
var userPhoneElement = document.getElementById("user-phone");
var usernameElement = document.getElementById("username");
var passwordElement = document.getElementById("password");

var userExistsErrorAlertElement = document.getElementById(
  "user-exists-error-alert"
);
var userCreatedAlertElement = document.getElementById("user-created-alert");

var users = [];
var usersString = localStorage.getItem("users");
if (usersString != null) {
  users = JSON.parse(usersString);
}

function onCreateAccount(event) {
  event.preventDefault();

  var userFullname = userFullNameElement.value;
  var userPhone = userPhoneElement.value;
  var username = usernameElement.value;
  var password = passwordElement.value;

  var usernameExists = false;

  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    if (user.username == username) {
      usernameExists = true;
      break;
    }
  }

  if (usernameExists == true) {
    userExistsErrorAlertElement.innerHTML = "This user was taken";
    userExistsErrorAlertElement.style.display = "block";
    setTimeout(() => {
      userExistsErrorAlertElement.style.display = "none";
    }, 1500);
  } else {
    var userId = 0;
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.id > userId) {
        userId = user.id;
      }
    }

    userId++;

    var user = {};
    user.id = userId;
    user.name = userFullname;
    user.phone = userPhone;
    user.username = username;
    user.password = password;
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    userCreatedAlertElement.innerHTML = "User successfully created!";

    userCreatedAlertElement.style.display = "block";
    setTimeout(() => {
      userCreatedAlertElement.style.display = "none";
    }, 2000);
  }
}
