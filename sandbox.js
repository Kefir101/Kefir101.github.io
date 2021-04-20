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

function showInput(){
  var username = document.getElementById("usernametext").value;
  var password = document.getElementById("passwordtext").value;
  if(username == 'The_Cyber_Shadow' && password == 34){
    window.location= "/account.html";
  }else{
    alert('WRONG! Try again')
  }
  //alert(`username is ${username} and password is ${password}`);
}