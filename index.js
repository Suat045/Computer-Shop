let users = [];
let computers = [];
let categories = [];
let orders = [];
let customers = [];

function onLogin() {
  window.location.href = "login.html";
}

function onSettings() {
  window.location.href = "settings.html";
}

var myComputersButton = document.querySelector("#my-computers-button");
myComputersButton.addEventListener("click", function () {
  window.location.href = "computers.html";
});

var myOrdersButton = document.querySelector("#my-orders-button");
myOrdersButton.addEventListener("click", function () {
  window.location.href = "orders.html";
});

var myShoppingButton = document.getElementById("my-shopping-button");
myShoppingButton.addEventListener("click", function () {
  window.location.href = "shopping.html";
});

var loginButton = document.getElementById("login-button");
var logoutButton = document.getElementById("logout-button");

var userLoggedIn = false;

var loggedInUserId = localStorage.getItem("logged-in-user-id");
if (loggedInUserId == null) {
  userLoggedIn = false;
} else {
  userLoggedIn = true;
}

var showSuccessLoginMessage = localStorage.getItem(
  "show-success-login-message"
);
if (showSuccessLoginMessage != null) {
  document.getElementById("success-logout-alert").style.display = "none";
  localStorage.removeItem("show-success-login-message");

  document.getElementById("success-login-alert").style.display = "block";
  setTimeout(() => {
    document.getElementById("success-login-alert").style.display = "none";
  }, 3000);
}

function showButton() {
  if (userLoggedIn) {
    loginButton.style.display = "none";
    myComputersButton.style.display = "block";
    myOrdersButton.style.display = "block";
    logoutButton.style.display = "block";
    myShoppingButton.style.display = "block";
  } else {
    logoutButton.style.display = "none";
    myComputersButton.style.display = "none";
    myOrdersButton.style.display = "none";
    myShoppingButton.style.display = "none";
    loginButton.style.display = "block";
  }
}

showButton();

function onLogout() {
  setTimeout(() => {
    userLoggedIn = false;
    localStorage.removeItem("logged-in-user-id");
    localStorage.removeItem("logged-in-user-name");
    showButton();
    document.getElementById("success-logout-alert").style.display = "block";
    setTimeout(() => {
      document.getElementById("success-logout-alert").style.display = "none";
    }, 2000);
  }, 1000);
}

function addObjects() {
  // Users added

  users.push({
    id: 1,
    name: "User-1",
    phone: "055-555-55-55",
    username: "u1",
    password: "p1",
  });
  users.push({
    id: 2,
    name: "User-2",
    phone: "055-555-55-55",
    username: "u2",
    password: "p2",
  });
  users.push({
    id: 3,
    name: "User-3",
    phone: "055-555-55-55",
    username: "u3",
    password: "p3",
  });
  users.push({
    id: 4,
    name: "User-4",
    phone: "055-555-55-55",
    username: "u4",
    password: "p4",
  });
  users.push({
    id: 5,
    name: "User-5",
    phone: "055-555-55-55",
    username: "u5",
    password: "p5",
  });
  users.push({
    id: 6,
    name: "User-6",
    phone: "055-555-55-55",
    username: "u6",
    password: "p6",
  });

  // Add categories
  categories.push({ id: 1, name: "Acer" });
  categories.push({ id: 2, name: "Asus" });
  categories.push({ id: 3, name: "HP" });
  categories.push({ id: 4, name: "Dell" });
  categories.push({ id: 5, name: "Lenovo" });
  categories.push({ id: 6, name: "Apple" });
  categories.push({ id: 7, name: "Toshiba" });
  categories.push({ id: 8, name: "Samsung" });
  categories.push({ id: 9, name: "Sony" });
  categories.push({ id: 10, name: "LG" });

  // Add computers

  computers.push({
    id: 1,
    name: "Acer-1",
    price: 1500,
    description: "Acer-1 description",
    isNew: "true",
    imagePath: "images/acer.jpg",
    userId: 1,
    categoryId: 1,
  });
  computers.push({
    id: 2,
    name: "Acer-2",
    price: 1500,
    description: "Acer-2 description",
    isNew: "true",
    imagePath: "images/acer.jpg",
    userId: 1,
    categoryId: 1,
  });
  computers.push({
    id: 3,
    name: "Acer-3",
    price: 1500,
    description: "Acer-3 description",
    isNew: "false",
    imagePath: "images/acer.jpg",
    userId: 1,
    categoryId: 1,
  });
  computers.push({
    id: 4,
    name: "Acer-4",
    price: 1500,
    description: "Acer-4 description",
    isNew: "true",
    imagePath: "images/acer.jpg",
    userId: 1,
    categoryId: 1,
  });
  computers.push({
    id: 5,
    name: "Acer-5",
    price: 1500,
    description: "Acer-5 description",
    isNew: "false",
    imagePath: "images/acer.jpg",
    userId: 1,
    categoryId: 1,
  });
  computers.push({
    id: 6,
    name: "Acer-6",
    price: 1500,
    description: "Acer-6 description",
    isNew: "true",
    imagePath: "images/acer.jpg",
    userId: 1,
    categoryId: 1,
  });
  computers.push({
    id: 7,
    name: "Acer-7",
    price: 1500,
    description: "Acer-7 description",
    isNew: "true",
    imagePath: "images/acer.jpg",
    userId: 1,
    categoryId: 1,
  });
  computers.push({
    id: 8,
    name: "Acer-8",
    price: 1500,
    description: "Acer-8 description",
    isNew: "false",
    imagePath: "images/acer.jpg",
    userId: 1,
    categoryId: 1,
  });
  computers.push({
    id: 9,
    name: "Acer-9",
    price: 1500,
    description: "Acer-9 description",
    isNew: "true",
    imagePath: "images/acer.jpg",
    userId: 1,
    categoryId: 1,
  });
  computers.push({
    id: 10,
    name: "Acer-10",
    price: 1500,
    description: "Acer-10 description",
    isNew: "false",
    imagePath: "images/acer.jpg",
    userId: 1,
    categoryId: 1,
  });

  var idCounter = 40;
  for (let i = 1; i <= idCounter; i++) {
    computers.push({
      id: i,
      name: "Asus-" + i,
      price: 1800,
      description: "Asus-" + i + " description",
      isNew: "true",
      imagePath: "images/asus.png",
      userId: 2,
      categoryId: 2,
    });
  }

  var idCounter = 40;
  for (let i = 1; i <= idCounter; i++) {
    computers.push({
      id: i,
      name: "HP-" + i,
      price: 1800,
      description: "HP-" + i + " description",
      isNew: "true",
      imagePath: "images/hp.png",
      userId: 2,
      categoryId: 3,
    });
  }

  var idCounter = 40;
  for (let i = 1; i <= idCounter; i++) {
    computers.push({
      id: i,
      name: "Dell-" + i,
      price: 1800,
      description: "Dell-" + i + " description",
      isNew: "true",
      imagePath: "images/del1234.jpg",
      userId: 4,
      categoryId: 4,
    });
  }

  var idCounter = 40;
  for (let i = 1; i <= idCounter; i++) {
    computers.push({
      id: i,
      name: "Lenovo-" + i,
      price: 1800,
      description: "Lenovo-" + i + " description",
      isNew: "true",
      imagePath: "images/lenovo.png",
      userId: 4,
      categoryId: 5,
    });
  }

  // Add customer
  customers.push({id:1, name: 'Customer-1',address: 'Customer-1 address', phone: '055-845-5595', email: 'customer1@gmail.com'});
  customers.push({id:2, name: 'Customer-2',address: 'Customer-2 address', phone: '055-845-5595', email: 'customer2@gmail.com'});
  customers.push({id:3, name: 'Customer-3',address: 'Customer-3 address', phone: '055-845-5595', email: 'customer3@gmail.com'});
  customers.push({id:4, name: 'Customer-4',address: 'Customer-4 address', phone: '055-845-5595', email: 'customer4@gmail.com'});
  customers.push({id:5, name: 'Customer-5',address: 'Customer-5 address', phone: '055-845-5595', email: 'customer5@gmail.com'});
}

addObjects();

function loadDataFromLocalStorage() {
  var userString = localStorage.getItem("users");
  var categoriesString = localStorage.getItem("categories");
  var computerString = localStorage.getItem("computers");
  var customerString = localStorage.getItem('customers');

  if (userString == null) {
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    users = JSON.parse(userString);
  }

  if (categoriesString == null) {
    localStorage.setItem("categories", JSON.stringify(categories));
  } else {
    categories = JSON.parse(categoriesString);
  }

  if (computerString == null) {
    localStorage.setItem("computers", JSON.stringify(computers));
  } else {
    computers = JSON.parse(computerString);
  }

  if(customerString == null){
    localStorage.setItem('customers',JSON.stringify(computers));
  } else{
    customers = JSON.parse(customerString);
  }
}

loadDataFromLocalStorage();


console.log('All computers count: '+computers.length);
console.log('All users count: '+users.length);

function onClearLocalStorage(){
  localStorage.removeItem('users');
  localStorage.removeItem('categories');
  localStorage.removeItem('computers');
  localStorage.removeItem('basketComputers');
  localStorage.removeItem('orders');
  localStorage.removeItem('customers');
  localStorage.removeItem('order-customer');
  localStorage.removeItem('logged-in-user-id');
  window.location.reload();
}

