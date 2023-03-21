var myCanvas, width, height, canvasData, scale = 1, ctx, size, initialSquareSize;

window.onload = function() {
    var myCanvas = document.getElementById("graphcanvas");
    // myCanvas.width = screen.availWidth;
    // myCanvas.height = screen.availHeight;
    initialSquareSize = screen.availHeight/12;
    height = screen.availHeight;
    width = screen.availWidth - screen.availWidth % initialSquareSize;

    setCanvasSize(myCanvas, screen.availWidth, screen.availHeight);
    
    myCanvas.addEventListener('wheel', zoom)
    ctx = myCanvas.getContext("2d");
    canvasData = ctx.getImageData(0, 0, width, height);

    // ctx.translate(0.5, 0.5);
    drawLines(0, 0, initialSquareSize, 1, 1);     
    labelLines();
};  

function graphFunction(){
  let functionString = document.getElementById("functioninput").value;
  if(functionString.length == null || functionString.length < 3) return;
  if(functionString.substring(0, 1) == "y" && functionString.substring(1, 2) == "="){
    ctx.strokeStyle = "rgb(255, 0, 0)";
    ctx.fillStyle = "rgb(255, 0, 0)";
    ctx.lineWidth = 4;
    let func = functionString.substring(2);
    if(func == "x"){
      for (let x = 0; x <= width; x += 1) {
        for (let y = 0; y <= height; y += 1) {
          let xval = map(x, 0, width, -width/initialSquareSize/2, width/initialSquareSize/2);
          let yval = map(y, 0, height, height/initialSquareSize/2, -height/initialSquareSize/2);
          if(Math.abs(xval-yval) < 0.05){
            // drawPixel(x, y, 255, 0, 0, 255);
            // updateCanvas();
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    }else if(func.substring(0, 2) == "x^"){
      for (let x = 0; x <= width; x += .1) {
        for (let y = 0; y <= height; y += .1) {
          let xval = map(x, 0, width, -width/initialSquareSize/2, width/initialSquareSize/2);
          let yval = map(y, 0, height, height/initialSquareSize/2, -height/initialSquareSize/2);
          if(Math.abs(xval ** func.substring(2) - yval) < 0.01){
            // drawPixel(x, y, 255, 0, 0, 255);
            // updateCanvas();
            ctx.fillRect(x, y, 1, 1);
          }
        }
      }
    }
  }
}
function drawLines(startX, startY, squareSize, lineWidth, index) {  
  // if(index == 1) ctx.translate(0, -squareSize/2);
  if(index > 2) return;
  ctx.lineWidth = lineWidth;
  const color = map(squareSize, initialSquareSize, 0, 1, 0.02);
  ctx.strokeStyle = `rgba(0, 0, 0, ${color})`;
  console.log(`Line Width: ${Math.round(lineWidth * 100)/100}, Scale: ${Math.round(scale * 100)/100}, Color: ${Math.round(color * 100)/100}`);
  // console.log(`Square Size: ${Math.round(squareSize * 100)/100}, Line Width: ${Math.round(lineWidth * 100)/100}, Scale: ${Math.round(scale * 100)/100}, Color: ${Math.round(color * 100)/100}`);
  for (let x = startX; x <= width; x += squareSize) {
    if(index > 1 && (x % (squareSize*4)) == 0) continue;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = startY; y <= height; y += squareSize) {
    if(index > 1 && (y % (squareSize*4)) == 0) continue;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  // ctx.translate(-lineWidth/2, -lineWidth/2);
  drawLines(squareSize/4, squareSize/4, squareSize/4, lineWidth*0.9, index+1);
}
function labelLines(){
  const fontSize = 30;
  ctx.font = `${fontSize}px Arial`;
  for (let x = 0; x <= width; x += initialSquareSize) {
    for (let y = 0; y <= height; y += initialSquareSize) {
      if(x == width/2 && y == height/2){
        ctx.fillText("0", x-fontSize/1.33, y+fontSize);
      }else if(x == width/2){
        let yval = Math.round(map(y, 0, height, height/initialSquareSize/2, -height/initialSquareSize/2));
        ctx.fillText(yval, x-fontSize, y+fontSize/3);
      }else if(y == height/2){
        let xval = Math.round(map(x, 0, width, -width/initialSquareSize/2, width/initialSquareSize/2));
        ctx.fillText(xval, x-fontSize/4, y+fontSize);
      }
    }
  }
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width/2, 0);
  ctx.lineTo(width/2, height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, height/2);
  ctx.lineTo(width, height/2);
  ctx.stroke();
}
function zoom(event) {
  event.preventDefault();
  // let prevScale = scale;
  // scale += event.deltaY * -0.01;
  // scale = Math.max(1, scale);
  // if(prevScale != scale){
  //   myCanvas.style.transform = `scale(${scale})`;
  //   initialSquareSize = 80/scale;
  //   ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  //   console.log("-------zoomed--------------");
  //   draw(0, 0, initialSquareSize, 1/scale, 1); 
  // }
}
function map(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
function setCanvasSize(canvas, width, height) {
  var ratio = window.devicePixelRatio, style = canvas.style;
  style.width  = '' + (width  / ratio) + 'px';
  style.height = '' + (height / ratio) + 'px';
  canvas.width  = width;
  canvas.height = height;
}
// function drawPixel (x, y, r, g, b, a) {
//   var index = (x + y * width) * 4;
//   canvasData.data[index + 0] = r;
//   canvasData.data[index + 1] = g;
//   canvasData.data[index + 2] = b;
//   canvasData.data[index + 3] = a;
// }
// function updateCanvas() {
//   ctx.putImageData(canvasData, 0, 0);
// }