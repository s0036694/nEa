let car;
let tileMap;
let tileSize = 50
let track;
let wall;




function setup() {
  createCanvas(500, 500);
  background(250)
  
  
  car = new Sprite(100,70,50,50)
  car.color = 'blue';
  
  wall = new Group();
  wall.w = tileSize
  wall.h = tileSize
  wall.collider = 'static'
  
  track = new wall.Group()
  track.tile = 't'
  track.color = 'black'
  
  
  tileMap = new Tiles(
  [ "........................",
    "........................",
    "........................",
    "...wwwwwwwwwwww.........",
    "...w......s...ww........",
    "...w......sc...ww.......",
    "...w......s.....ww......",
    "...w....wwwwww....w.....",
    "...w....w....www..ww....",
    "...w....w......ww..w....",
    "...w....w.......w..ww...",
    "...ww...w........w..w...",
    "....w...w........w..ww..",
    "....ww..w........w...w..",
    ".....w..ww.......w...w..",
    ".....w...w.......w...w..",
    ".....w...w.......w...ww.",
    ".....w...ww......w....w.",
    ".....w....ww.....w....w.",
    ".....ww....wwwwwww....w.",
    "......w..............ww.",
    "......www..........www..",
    "........wwwwwwwwwwww....",
    "........................",
    
      ],
   0,0,tileSize,tileSize)
}

function draw() {
  background(250);
  drawTileMap();
  carMovement();
  car.display();
}




function carMovement(){
  if (kb.pressing('left')) car.vel.x = -5;
  else if (kb.pressing('right')) car.vel.x = 5;
  else car.vel.x = 0;
  
  if (kb.pressing('up')) car.vel.y = -5
  else if(kb.pressing('down'))car.vel.y = 5
  else car.vel.y = 0
  
  car.update();
}




function drawTileMap() {
  for (let row = 0; row < tileMap.length; row++) {
    for (let col = 0; col < tileMap[row].length; col++) {
      let tile = tileMap[row][col];
      let x = col * tileSize;
      let y = row * tileSize;
      
      if (tile === 'G') {
        fill(0, 255, 0); 
      } else if (tile === 'b') {
        fill(139, 69, 19); 
      } else if (tile === 't') {
        fill(0); 
      } else if (tile === 'S') {
        fill(255); 
      }
      
      noStroke();
      rect(x, y, tileSize, tileSize);
    }
  }
}


class Sprite {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vel = createVector(0, 0);
    this.color = 'blue';
  }
  
  update() {
    this.x += this.vel.x;
    this.y += this.vel.y;
  }
  
  display() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }
}