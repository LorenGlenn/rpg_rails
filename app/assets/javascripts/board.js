var context;
var rightKey = false;
var leftKey = false;
var upKey = false;
var downKey = false;
var block_x;
var block_y;
var block_h = 50;
var block_w = 50;
var p = 0;
var setup_x=[];
var setup_y=[];
var enemies_x=[];
var enemies_y=[];
var potion_x=[];
var potion_y=[];
var potion = new Image();
potion.src = 'http://i.imgur.com/FeNHEVB.png';
var img = new Image();
img.src = 'http://i.imgur.com/ZIZ1wdA.jpg';
var enemies = new Image();
enemies.src = 'http://i.imgur.com/yznzu6I.png';
var player_image = new Image();


function randomize(a,b) {
  for (var i = 0; i < 200; i++) {
    var x = Math.floor((Math.random()* 24))*50;
    var y = Math.floor((Math.random()* 16))*50;
    a.push(x);
    b.push(y);
  }
}


function init() {
  player_image = new Image();
  player_image.src = sprite
  context = $('#canvas')[0].getContext('2d');
  WIDTH = $('#canvas').width();
  HEIGHT = $('#canvas').height();
  block_x = 0;
  block_y = 0;
  drawBoard()
  randomize(setup_x,setup_y)
  randomize(enemies_x, enemies_y)
  setInterval('draw()', 100);
}
function clearCanvas() {
  context.clearRect(0,0,WIDTH,HEIGHT);
}

function drawBoard(){
    for (var x = 0; x <= 1200; x += 50) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, 800 + p);
    }


    for (var x = 0; x <= 800; x += 50) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(1200 + p, 0.5 + x + p);
    }

    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = 'brown'
}


function draw() {
  context.fillStyle = 'black'

  clearCanvas();
  randomize(setup_x,setup_y)
  randomize(enemies_x, enemies_y)
  randomize(potion_x, potion_y)

  for (var i = 0; i < 150; i++) {
    context.drawImage(img,setup_x[i],setup_y[i],50,50)

  }
  for (var i = 0; i < 50; i++) {
    context.drawImage(enemies,enemies_x[i],enemies_y[i],50,50)

  }
  for (var i = 0; i < 10; i++) {
    context.drawImage(potion,potion_x[i],potion_y[i],50,50)

  }
  drawBoard();
  if (rightKey) block_x += 50;
  else if (leftKey) block_x -= 50;
  if (upKey) block_y -= 50;
  else if (downKey) block_y += 50;

  if (block_x <= 0) block_x = 0;
  if ((block_x + block_w) >= WIDTH) block_x = WIDTH - block_w;
  if (block_y <= 0) block_y = 0;
  if ((block_y + block_h) >= HEIGHT) block_y = HEIGHT - block_h;
  // if(block_x == 100) block_x -=50;

  for (var i = 0; i < 200; i++) {
    if(block_x == setup_x[i] && block_y == setup_y[i]) {
      if (rightKey) block_x -= 50;
      else if (leftKey) block_x += 50;
      if (upKey) block_y += 50;
      else if (downKey) block_y -= 50;
    }
  }

  context.drawImage(player_image, block_x,block_y,block_w,block_h);

}

function onKeyDown(evt) {
  if (evt.keyCode == 39) rightKey = true;
  else if (evt.keyCode == 37) leftKey = true;
  if (evt.keyCode == 38) upKey = true;
  else if (evt.keyCode == 40) downKey = true;
}

function onKeyUp(evt) {
  if (evt.keyCode == 39) rightKey = false;
  else if (evt.keyCode == 37) leftKey = false;
  if (evt.keyCode == 38) upKey = false;
  else if (evt.keyCode == 40) downKey = false;
}

$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);
