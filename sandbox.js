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
function changeLink(){
  const link = document.querySelector('.song');
  link.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  //link.classList.toggle('classname'); (adds/removes class)
}
// let allballs = [];
// let canvas = document.querySelector("canvas");
// canvas.width = 400;
// canvas.height = 400;
// let l = canvas.getContext('2d');
// function balls(){
//   for(let i = 0; i < 5; i++){
//     allballs.push(ball = {
//       x: Math.floor(Math.random() * canvas.width),
//       y: Math.floor(Math.random() * canvas.height),
//       xSpeed: Math.floor(Math.random() * 4),
//       ySpeed: Math.floor(Math.random() * 8),
//       radius: 30,
//     })
//     console.log(allballs.forEach(console.log(ball.x)))
//     makeBallAndBounce(i);
//   }
//   //allballs.forEach(makeBallAndBounce());
// }
// function makeBallAndBounce(i){
//   let l = canvas.getContext('2d');
//   // let x = Math.floor(Math.random() * canvas.width);
//   // let y = Math.floor(Math.random() * canvas.height);
//   l.clearRect(0, 0, canvas.width, canvas.height);
//   do {
//     ball.x = Math.floor(Math.random() * canvas.width);
//     ball.y = Math.floor(Math.random() * canvas.height);
//   } while (outOfBounds(x, y, radius, 0, 0, canvas.width, canvas.height));
//   move();
//   function move() {
//     requestAnimationFrame(move);
//     //l.clearRect(0, 0, canvas.width, canvas.height);
//     l.beginPath();
//     l.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, false);
//     l.fillStyle = 'green';
//     l.fill();
//     l.strokeStyle = '#003300';
//     l.stroke();
//     //0 is relative to canvas
//     for(let j = 0; j < 5; j++){
//       let jball = allballs[j];
//       if(i != j){
//         console.log(ball.x, ball.y, jball.x, jball.y);
//         if(findDist(ball.x, ball.y, jball.x, jball.y) <= radius){
//           let tempballxSpeed = findVelocity(x, y, jball.x, jball.y, ball.xSpeed, ball.ySpeed, jball.xSpeed, jball.ySpeed, "v1x");
//           let tempballySpeed = findVelocity(x, y, jball.x, jball.y, ball.xSpeed, ball.ySpeed, jball.xSpeed, jball.ySpeed, "v1y");
//           let tempjballxSpeed = findVelocity(x, y, jball.x, jball.y, ball.xSpeed, ball.ySpeed, jball.xSpeed, jball.ySpeed, "v2x");
//           let tempjballySpeed = findVelocity(x, y, jball.x, jball.y, ball.xSpeed, ball.ySpeed, jball.xSpeed, jball.ySpeed, "v2y");
//           ball.xSpeed = tooSmall(tempballxSpeed);
//           ball.ySpeed = tooSmall(tempballySpeed);
//           jball.xSpeed = tooSmall(tempjballxSpeed);
//           jball.ySpeed = tooSmall(tempjballySpeed);
//           ball.xSpeed = tempballxSpeed;
//           ball.ySpeed = tempballySpeed;
//           jball.xSpeed = tempjballxSpeed;
//           jball.ySpeed = tempjballySpeed;
//         }
//       }
//     }
//     if (radius + x > canvas.width || x - radius < 0)
//         ball.xSpeed = -ball.xSpeed;
//     if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0)
//         ball.ySpeed = -ball.ySpeed;
//     ball.x += ball.xSpeed;
//     ball.y += ball.ySpeed;
//   }
//   function outOfBounds(centerx, centery, r, rectx, recty, width, height){
//     if (x - r < 0 || x + r > width || y + r > height || y - r < 0)
//         return true;
//     return false;
//   }
// }
// function tooSmall(x){
//   if(Math.abs(x) <= 1E-5){
//       return 0;
//   }
//   return x;
// }
// function findangles(xSpeed, ySpeed){
//   let angle = 0;
//   if(xSpeed < 0) {
//       angle = PI + atan(ySpeed/xSpeed);
//   }else if (xSpeed > 0 & ySpeed >= 0){
//       angle = atan(ySpeed/xSpeed);
//   }else if (xSpeed > 0 && ySpeed < 0){
//       angle = 2*PI + atan(ySpeed/xSpeed);
//   }else if (xSpeed == 0 && ySpeed == 0){
//       angle = 0;
//   }else if(xSpeed == 0 && ySpeed >= 0){
//       angle = PI/2;
//   }else{
//       angle = (1.5*PI);
//   }
//   //find balance between #of hits till it breaks off and cons of momentum
//   //larger the multiple (1000), the more accurate momentum is but less hits till it breaks, smaller vice versa
//   //return (float) (Math.round(angle*180/PI)*PI/180);
//   return Math.round(angle*1000*180/PI)/1000*PI/180;
// }
// function findVelocity(x1, y1, x2, y2, xSpeed1, ySpeed1, xSpeed2, ySpeed2, speed){
//   let xDist = x1 - x2;
//   let yDist = y1 - y2;
//   let phi = findangles(xDist, -yDist);
//   if(xDist == 0){
//       phi = PI/2;
//   }else{
//       phi = atan(-yDist/xDist);
//   }
//   let v1 = Math.sqrt((xSpeed1**2) + (ySpeed1**2));
//   let v2 = sqrt((xSpeed2**2) + (ySpeed2**2));
//   let theta1 = findangles(xSpeed1, -ySpeed1);
//   let theta2 = findangles(xSpeed2, -ySpeed2);
//   let velocity = 0;
//   switch (speed) {
//       case "v1x":
//           velocity = (v2 * cos(theta2 - phi) * cos(phi)) + (v1 * sin(theta1 - phi) * cos((float) (phi + (PI * 0.5))));
//           break;
//       case "v1y":
//           velocity = -((v2 * cos(theta2 - phi) * sin(phi)) + (v1 * sin(theta1 - phi) * sin((float) (phi + (PI * 0.5)))));
//           break;
//       case "v2x":
//           velocity = (v1 * cos(theta1 - phi) * cos(phi)) + (v2 * sin(theta2 - phi) * cos((float) (phi + (PI * 0.5))));
//           break;
//       case "v2y":
//           velocity = -((v1 * cos(theta1 - phi) * sin(phi)) + (v2 * sin(theta2 - phi) * sin((float) (phi + (PI * 0.5)))));
//   }
//   return velocity;
// }
// function findSlope(x1, y1, x2, y2){
//   let xDist = x1 - x2;
//   let yDist = y1 - y2;
//   return yDist/xDist;
// }
// function findDist(x1, y1, x2, y2){
//   let xDist = x1 - x2;
//   let yDist = y1 - y2;
//   let dist = Math.sqrt(xDist * xDist + yDist * yDist);
//   return dist;
// }
// function enteredPopupInput(){
//   // var input = document.getElementById("popuptext").value;
//   document.addEventListener("keyup", function(event) {
//     if (event.keyCode === 13) {
//       document.getElementById("popup").style.display="none";
//     }
//   })
// }

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
// const grade = 'D';
// switch(grade){ //uses === not ==
//   case 'A':
//     console.log('great job!');
//     break;
//   case 'B':
//     console.log('good job!');
//     break;
//   case 'C':
//     console.log('average job!');
//     break;
//   default:
//     console.log('get the whip!')
// }
// const speak = function(name = 'defaultnameifNOargument'){ //function expression, no hoist though (cant use speak() before function defined)
//   console.log(`hi ${name}`);
// };
// speak();

// const display = () => {
//   console.log(add2(25));
// }
// const add2 = value => value+2;
// display();
// let people =[ ]
// people.forEach(function(person, index){
//   console.log(person, index); //prints 1, 2, 3
// });
// //arrow style
// people.forEach((person, index) =>{
//   console.log(person, index); //prints 1, 2, 3
// });
// const logPerson = (person, index) => {
//   console.log(`${index}: hello ${person}`);
// }
// people.forEach(logPerson);


// const ul = document.querySelector('.ulclass');
// let html = ``;
// people.forEach(function(person){
//   html += `<li style="color: green">${person}</li>`;
// });
// ul.innerHTML = html;