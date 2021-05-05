  // var canvas = document.querySelector("canvas");
  // canvas.width = 400;
  // canvas.height = 400;
  // var l = canvas.getContext('2d');
  // var allballs = [];
  // function addBall(){
  //   allballs.push(ball = {
  //     x: Math.floor(Math.random() * canvas.width),
  //     y: Math.floor(Math.random() * canvas.height),
  //     xSpeed: Math.floor(Math.random() * 4),
  //     ySpeed: Math.floor(Math.random() * 8),
  //     radius: 30,
  //   })
  // }
  // function bouncingBalls(){
  //   for(let i = 0; i < allballs.size(); i++){
  //     move(i);
  //   }
  // }
  // function move(i) {
  //   let x = allballs[i].x;
  //   let y = allballs[i].y;
  //   let radius = allballs[i].radius;
  //   requestAnimationFrame(move);
  //   //l.clearRect(0, 0, canvas.width, canvas.height);
  //   l.beginPath();
  //   l.strokeStyle = "black";
  //   l.fillStyle = "green";
  //   l.arc(x, y, radius, 0, Math.PI * 2, false);
  //   l.fill();
  //   l.strokeStyle = '#003300';
  //   l.stroke();
  //   if (radius + x > canvas.width || x - radius < 0)
  //       vx = -vx;
  //   if (y + radius > canvas.height || y - radius < 0)
  //       vy = -vy;
  //   x = x + vx;
  //   y = y + vy;
  // }