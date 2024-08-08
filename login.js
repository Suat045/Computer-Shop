var usernameElement = document.getElementById("username");
var passwordElement = document.getElementById("pass");

var loginErrorAlertElement = document.getElementById("login-error-alert");
var loginSuccessAlertElement = document.getElementById("login-success-alert");

var users = [];
var usersString = localStorage.getItem('users');
if(usersString != null){
    users = JSON.parse(usersString);
}

function onLogin(event){
    event.preventDefault();
    var username = usernameElement.value ;
    var password = passwordElement.value;

    var userLoggedIn = false;

    for(let i = 0; i <users.length;i++){
        const u = users[i];
        if(u.username === username && u.password === password){
            userLoggedIn = true;
            localStorage.setItem('logged-in-user-id',u.id);
            localStorage.setItem('logged-in-user-name',u.username);
        }
    }

    if(userLoggedIn == true){
        localStorage.setItem('show-success-login-message','');
        loginSuccessAlertElement.innerHTML = 'Information is true';
        loginErrorAlertElement.style.display = 'none';
        loginSuccessAlertElement.style.display = 'block';
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    } else{
        localStorage.removeItem('logged-in-user-id');
        localStorage.removeItem('logged-in-user-name');
        showLoginErrorMessage();
    }
}

function showLoginErrorMessage(){
    loginErrorAlertElement.innerHTML = 'Information is not true';
    loginErrorAlertElement.style.display = 'block';
}