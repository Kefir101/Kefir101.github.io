var bgcolor = localStorage.bgcolor || fallbackColor;
document.body.style.backgroundColor = localStorage.bgcolor || '#ffffff'

document.getElementById(window.location.pathname.split("/").pop()).style.backgroundColor = "#555";

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
    window.location = "/memes.html";
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
var cookies = 0;
var startClicking = true;
function clicked() {
  cookies++;
  startClicking = true; //doesnt affect value in addTime for some reason
  var element = document.getElementById("cookiep2");
  element.innerHTML = "Cookies: " + cookies;
}
var sec = 0;
function addTime() {
  if (startClicking) {
    sec++;
    var newHTML = "Cookies clicked per second: " + Math.round(cookies / sec);
    // cpstimer.innerHTML = newHTML; //how???
    setTimeout("addTime()", 1000);
  }
}

function changeColor(color) {
  document.body.style.background = color;
  localStorage.bgcolor = color;
}
var stopped = false;
function changeLink() {
  const link = document.querySelector('.song');
  link.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  //link.classList.toggle('classname'); (adds/removes class)
}
function disable() {
  let p5 = document.getElementById('p5');
  p5.src = "random.js";
  let h1 = document.getElementById('h1');
  h1.class = "game";
}
function undo() {
  if (stopped) {
    start();
  } else if (!stopped) {
    stop();
  }
}
function stop() {
  stopped = true;
  noLoop();
}
function start() {
  stopped = false;
  loop();
}

function setButtonColor() {
  let doc = document.getElementsByClassName("btn");
  for (let i = 0; i < document.querySelectorAll('.btn').length; i++) {
    doc[i].style.backgroundColor = doc[i].id;
  }
}

window.onload = function () {
  setButtonColor();
  addTime();
};
var full = "" + window.location.href;
if (!full.includes("http://127.0.0.1:5500/")) {
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
}
//right click inspect
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
//middle button scrolling
document.addEventListener("mousedown", function (e) { if (e.button == 1) { e.preventDefault(); } });

// const CODE = (code) => {
//   code.setup = () => {
//     code.createCanvas(1000, 500);
//   };
//   code.draw = () => {
//     code.background(255);
//     code.rect(100,100,50,50);
//   };
// };
// let codeCanvas = newp5(code);
