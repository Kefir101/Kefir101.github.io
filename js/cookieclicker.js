var cookies = 0;
var startClicking = false;
function clicked() {
  cookies++;
  if(!startClicking){
    startClicking = true; //doesnt affect value in addTime for some reason
    addTime()
  }
  var element = document.getElementById("cookiep2");
  element.innerHTML = "Cookies: " + cookies;
}
var sec = 0;
function addTime() {
  if (startClicking) {
    sec++;
    var newHTML = "Cookies clicked per second: " + Math.round(cookies / sec);
    cpstimer.innerHTML = newHTML; //how???
    setTimeout("addTime()", 1000);
  }
}