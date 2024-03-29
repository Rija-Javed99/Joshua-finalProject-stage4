var backgroundImage;
var bg;
var astronaut, astronautImg;
var spaceship, spaceship1,spaceship3,spaceship4,spaceship5;
var spaceshipGroup
var score
var planet1,planet2,planet3, planet, planetGroup;
var explosion;
var edges;


function preload(){
backgroundImage=loadImage("images/bg3.jpg")
astronautImg=loadAnimation("images/astronaut1.png","images/astronaut2.png","images/astronaut3.png","images/astronaut4.png","images/astronaut5.png","images/astronaut6.png","images/astronaut7.png","images/astronaut8.png","images/astronaut9.png");
spaceship1=loadImage("images/spaceship1.png")
spaceship3=loadImage("images/spaceship3.png")
spaceship4=loadImage("images/spaceship4.png")
spaceship5=loadImage("images/spaceship5.png")
planet1=loadImage("images/planet1.png")
planet2=loadImage("images/planet2.png")
planet3=loadImage("images/planet3.png")
explosion= loadAnimation("images/EXPLOSION1.png","images/EXPLOSION2.png","images/EXPLOSION3.png","images/EXPLOSION4.png", "images/EXPLOSION5.png","images/EXPLOSION6.png");
}

function setup() {
  createCanvas(700,300);
  edges=createEdgeSprites();

 bg=createSprite(600,-30.1500,1010)
 bg.addImage(backgroundImage)
 bg.scale=1;
 bg.velocityX=-3

 astronaut = createSprite(70,250, 40,70);
 astronaut.addAnimation("running", astronautImg)
 astronaut.scale=0.3

 planetGroup=createGroup();
 spaceshipGroup=createGroup();
 score=0
}

function draw() {
 background(255);

 if(bg.x <10){
  bg.x = 400;
}

  spawnSpaceships();
  spawnPlanets();

  drawSprites();


text("Score: "+ score, 580,50);

}






function spawnSpaceships(){
  if (frameCount % 100 === 0){
    var spaceship = createSprite(600,random(40,240),10,40);
    spaceship.velocityX = -6
    
     
     var rand = Math.round(random(1,5));
     switch(rand) {
       case 1: spaceship.addImage(spaceship1);
               break;
       case 2: spaceship.addImage(spaceship5);
               break;
       case 3: spaceship.addImage(spaceship3);
               break;
       case 4: spaceship.addImage(spaceship4);
               break;
               case 5: spaceship.addImage(spaceship5);
               break;  
       default: break;
     }
    
           
     spaceship.scale = 0.4;
     spaceship.lifetime = 300;
  
     spaceshipGroup.add(spaceship);
  }
 }
 function spawnPlanets(){
  if (frameCount % 173 === 0){
    var planet = createSprite(600,random(40,240),10,40);
    planet.velocityX = -6
    
     
     var rand = Math.round(random(1,3));
     switch(rand) {
               case 1: planet .addImage(planet1);
               break;
               case 2: planet .addImage(planet2);
               break;
               case 3: planet .addImage(planet3);
               break;
       
       default: break;
     }
    
           
     planet .scale = 0.4;
     planet.lifetime = 300;
  
     planetGroup.add(planet );
  }
 }
