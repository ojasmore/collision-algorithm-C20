function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(600, 400, 50, 80);
  fixedrect.shapeColor = "yellow";
  fixedrect.debug = true;

  movingrect = createSprite(600,400,80,30);
  movingrect.shapeColor = "yellow";
  movingrect.debug = true;

}

function draw() {
  background(0);
  
  movingrect.x = mouseX;
  movingrect.y = mouseY;

  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && 
    fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 && 
    movingrect.y - fixedrect.y < movingrect.height/2+ fixedrect.height/2 &&
    fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2)
    {
    movingrect.shapeColor = "green";
    fixedrect.shapeColor ="green";
  }
  else
  {
    movingrect.shapeColor =" yellow";
    fixedrect.shapeColor = "yellow";
  }

  drawSprites();
}