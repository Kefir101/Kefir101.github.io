function showInput(){
  var username = document.getElementById("usernametext").value;
  var password = document.getElementById("passwordtext").value;
  if(username == '1' && password == 1){
    window.location= "/account.html";
  }else{
    var tag = document.createElement("h3");
    var text = document.createTextNode("Try again!");
    tag.appendChild(text);
    var element = document.getElementById("new");
    element.appendChild(tag);
  }
  //alert(`username is ${username} and password is ${password}`);
}
function changeColor(color){
   document.body.style.backgroundColor = color;
}
function makeBallAndBounce(){
  var canvas = document.querySelector("canvas");
  canvas.width = 400;
  canvas.height = 400;
  var l = canvas.getContext('2d');
  var x = 0;
  var y = 0;
  var radius = 30;
  do {
    x = Math.floor(Math.random() * canvas.width);
    y = Math.floor(Math.random() * canvas.height);
  } while (outOfBounds(x, y, radius, 0, 0, canvas.width, canvas.height));
  var vx = Math.floor(Math.random() * 4);
  var vy = Math.floor(Math.random() * 8);
  move();
  function move() {
    requestAnimationFrame(move);
    l.clearRect(0, 0, canvas.width, canvas.height);
    l.beginPath();
    l.arc(x, y, radius, 0, 2 * Math.PI, false);
    l.fillStyle = 'green';
    l.fill();
    l.strokeStyle = '#003300';
    l.stroke();
    //0 is relative to canvas
    if (radius + x > canvas.width || x - radius < 0)
        vx = -vx;
    if (y + radius > canvas.height || y - radius < 0)
        vy = 0 - vy;
    x += vx;
    y += vy;
  }
  function outOfBounds(centerx, centery, r, rectx, recty, width, height){
    if (x - r < 0 || x + r > width || y + r > height || y - r < 0)
        return true;
    return false;
  }
}
function enteredPopupInput(){
  // var input = document.getElementById("popuptext").value;
  document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      document.getElementById("popup").style.display="none";
    }
  })
}

// console.log(12);            
// let age = 25;
// console.log(age,2019);

// age = 30;
// console.log(age);

// const points = 100;
// console.log(points);

// var sscore = 75; //old way of setting var
// console.log(sscore); 

// let name = 'something';
// console.log(name[2]);
// console.log(name.length);
// //.toUpperCase(); //up/lower do not actually alter variable value
// //.toLowerCase();
// //.indexOf('argument'); like s -> 0
// //.lastIndexOf(e); -> 3
// //.slice(start, end [non inclusive]);
// //.substr(start, end-start (number of characters))
// //.replace('a', 'b') -> replaces first a with b
// //.includes() -> boolean result

// //math operators: + - * / ** (power) % (modulo/remainder), PEMDAS
// //NaN -> math error that doesnt result in number

// const title = 'Arthur';
// const author = 'Mario';
// const likes = 30;

// //concatenation: 'The blog called ' + title + ' by ' + author...;
// //template string: 'The blog called ${title} by ${author}...';

// let html = `
//   <h2>${title}</h2>
//   <p>by ${author}</p>
// `;
// console.log(html);


// let ninjas = ['shaun', 'ryu', 'chun'];
// ninjas[1] = 'ken';
// console.log(ninjas[1]);
// let random = [20, 'hi', 30, 3.35];
// console.log(random.length);
// //array methods
// console.log(random.join(', '));
// console.log(random.indexOf(20));
// console.log(random.concat(['1', 'hi'])); //returns length
// console.log(random.push('there')); //returns length, adds to end
// console.log(random.pop()); //removes end, returns value it popped

// //comparison: == (both numbers AND strings), !=, 
// // >, <, >=, <= (either compares value of number or the 
// //first index of string to see which comes first, any lowercase > any uppercase)
// //loose comparison (different types can still be equal):
// //age == 25 && age == '25' -> true (converts str to num)
// //strict comparison (different types cannot be equal):
// //age === 25 -> true, age === '25' -> false, age !== '25' -> true

// //type conversion
// let score = '100';
// console.log(score + 1); //'1001'
// console.log(typeof score); //string
// score = 100;
// score = Number(score);
// console.log(score + 1); //101
// //Number('astring') -> NaN
// console.log(String(50), typeof String(50));
// console.log(Boolean(100), typeof Boolean(100)); //100 = true, 0 = false
// console.log(Boolean('0'), typeof Boolean('0')); //'0' = true, '' = false
const grade = 'D';
switch(grade){ //uses === not ==
  case 'A':
    console.log('great job!');
    break;
  case 'B':
    console.log('good job!');
    break;
  case 'C':
    console.log('average job!');
    break;
  default:
    console.log('get the whip!')
}
const speak = function(name = 'defaultnameifNOargument'){ //function expression, no hoist though (cant use speak() before function defined)
  console.log(`hi ${name}`);
};
speak();

const display = () => {
  console.log(add2(25));
}
const add2 = value => value+2;
display();
let people =[ ]
people.forEach(function(person, index){
  console.log(person, index); //prints 1, 2, 3
});
//arrow style
people.forEach((person, index) =>{
  console.log(person, index); //prints 1, 2, 3
});
const logPerson = (person, index) => {
  console.log(`${index}: hello ${person}`);
}
people.forEach(logPerson);


const ul = document.querySelector('.ulclass');
let html = ``;
people.forEach(function(person){
  html += `<li style="color: green">${person}</li>`;
});
ul.innerHTML = html;