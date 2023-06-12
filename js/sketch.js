const fallbackColor = '#9ACDE0';
document.body.style.backgroundColor = localStorage.bgcolor || fallbackColor;

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
}
var stopped = false;
function changeLink() {
  const link = document.querySelector('.song');
  link.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
}
var full = "" + window.location.href;
if (!full.includes("127.0.0.1:5500")) {
  document.onkeydown = function (e) {
    let ctrl = e.ctrlKey, shift = e.shiftKey;
    if (e.key == 123 || (ctrl && shift && ('ICJ'.contains(e.key))) || (ctrl && e.key == 'U'.charCodeAt(0))) {
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
