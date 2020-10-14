var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(800,400);
  bullet = createSprite(50, 200, 50, 20);
  bullet.shapeColor = color(255,255,255);

  thickness = Math.round(random(22,83));
  wall = createSprite(700,200,thickness,200);
  wall.shapeColor = color(80,80,80);

  speed = Math.round(random(223,331));
  weight = Math.round(random(30,52));
  
  bullet.velocityX = speed;
}

function draw() {
  background(0);  
  if(isTouching(wall, bullet)){
    var damage = 0.5 * weight * speed * speed/thickness * thickness * thickness
    bullet.velocityX = 0;
    bullet.x = (wall.x - wall.width/2) - bullet.width/2;
    if (damage>=10){
       bullet.shapeColor = color(255,0,0);
    }
    if(damage<10){
      bullet.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
function isTouching(object1, object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2){
    return true;
  }
  else {
    return false;
  }
}