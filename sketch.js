const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const circle = Matter.Body.circle;

var drops = [];
var maxDrops = 100
function preload(){
    
}

function setup(){
createCanvas(500,800);
engine = Engine.create();
world = engine.world;

for(var i = 0;i<maxDrops; i++){

drops.push(new Drop(random(0,400),random(0,400)));

}
}

function draw(){
background("black")
Engine.update(engine);

for(var i = 0;i<maxDrops; i++){

    drops[i].display();
    
}
}   

