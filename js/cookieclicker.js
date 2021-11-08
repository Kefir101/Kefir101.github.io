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