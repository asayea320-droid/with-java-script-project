
function showSection(id) {
  document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}



function toggleMenu() {
  let nav = document.getElementById("navMenu");
  nav.style.display = (nav.style.display === "flex") ? "none" : "flex";
}


let users = [];



function register() {
  let name = document.getElementById("rname").value;
  let email = document.getElementById("remail").value;
  let pass = document.getElementById("rpass").value;

  users.push({name, email, pass});

  document.getElementById("regMsg").textContent =
    "Registered Successfully " + name;
}



function login() {
  let email = document.getElementById("user").value;
  let pass = document.getElementById("pass").value;
 let found = users.find(u => u.email === email && u.pass === pass);

  if(found) {
    document.getElementById("loginMsg").textContent =
      "Welcome " + found.name;
  } else {
    document.getElementById("loginMsg").textContent =
      "Invalid login";
  }
}



let students = [];

function addStudent() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;

  students.push({name,id});
  

  let li = document.createElement("li");
  li.textContent = name + " (" + id + ")";
  document.getElementById("studentList").appendChild(li);

  document.getElementById("total").textContent = students.length;
}

function apply() {
  let name = document.getElementById("appName").value;
  document.getElementById("msg").textContent =
    name + " Applied Successfully";
}


function addBook() {
  let book = document.getElementById("book").value;

  let li = document.createElement("li");
  li.textContent = book;
  document.getElementById("bookList").appendChild(li);
}
function addcourse() {
  let courseName=document.getElementById("course").value;

          if(courseName ==="")  return;
       let li = document.createElement("li");
        li.textContent = courseName;
       document.getElementById("course").appendChild(li);
       document.getElementById("course").value ="";

}



  