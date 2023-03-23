const fallbackColor = '#9ACDE0';
var bgcolor = localStorage.bgcolor || fallbackColor;
document.body.style.backgroundColor = localStorage.bgcolor || '#ffffff'

window.onload = function () {
  let navID = window.location.pathname.split("/")[1];
  if (navID != "main" && navID != "cookieclicker" && navID != "mothersday") {
    // document.getElementById(navID).style.backgroundColor = "#555";
  }
};

function checkInput() {
  var inputusername = document.getElementById("usernametext").value;
  var inputpassword = document.getElementById("passwordtext").value;
  var inputdate = document.getElementById("date").value;
  let possibleLogins = [
    // {
    //   username: "Kefir101Awesome",
    //   password: 101,
    //   date: "2004-01-01",
    // },
    // {
    //   username: "The_Cyber_Shadow",
    //   password: 34,
    //   date: "2005-01-01",
    // },
    // {
    //   username: "Savta",
    //   password: 1945,
    //   date: "1945-01-01",
    // },
    // {
    //   id: "/mothersday.html",
    //   username: "Mom",
    //   password: "loveyou",
    //   date: "1972-05-09"
    {
      username: "memes",
      password: "goodpswd",
      date: "2021-01-01"
    }
  ];
  let correct = false;
  possibleLogins.forEach(login => {
    if ((inputusername == login.username) && (inputpassword == login.password) && (inputdate == login.date)) {
      correct = true;
    }
  });
  if (correct) {
    window.location = "/memes";
  } else if (!correct) {
    var tag = document.createElement("h3");
    var text = document.createTextNode("Try again!");
    tag.appendChild(text);
    var element = document.getElementById("new");
    element.appendChild(tag);
    setTimeout(() => { element.removeChild(tag);; }, 1000);
  }
  //alert(`username is ${username} and password is ${password}`);
}
var stopped = false;
function changeLink() {
  const link = document.querySelector('.song');
  link.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  //link.classList.toggle('classname'); (adds/removes class)
}
var full = "" + window.location.href;
if (!full.includes("127.0.0.1:5500")) {
  document.onkeydown = function (e) {
    console.log(1);
    if (event.keyCode == 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
    }
  }
  //right click inspect
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });
  //middle button scrolling
  document.addEventListener("mousedown", function (e) { if (e.button == 1) { e.preventDefault(); } });
}
