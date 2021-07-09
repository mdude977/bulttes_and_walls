var bullet,wall,speed,weight, Def;


function setup() {
  createCanvas(1400,400);

  
  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83))

  bullet = createSprite(50,200,100,10);
  wall = createSprite(1200,200,thickness,height/2);

  bullet.velocityX=speed

  bullet.shapeColor = "blue";
  wall.shapeColor = "White";


  console.log("Speed is "+speed);
  console.log("Weight is "+weight);
}


function draw() {
  background(0);  
 
  if(hasCollided(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

  	console.log("damage : ",+damage)
	if(damage>10)
	{
		wall.shapeColor="red";
		
	}

	

	if(damage<10)
	{
		wall.shapeColor="green";
	}
	
  }


  drawSprites();
 
}

function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}