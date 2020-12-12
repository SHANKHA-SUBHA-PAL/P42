class Umbrella{

constructor(x,y,r){

var options ={

isStatic : true

}

this.body = Bodies.circle(x,y,r,options);
this.r = r
World.add(world,this.body);
this.image = loadAnimation(
".../Walking Frame/walking_1.png" ,
".../Walking Frame/walking_2.png" ,
".../Walking Frame/walking_3.png ",
".../Walking Frame/walking_4.png",
".../Walking Frame/walking_5.png" ,
".../Walking Frame/walking_6.png" ,
".../Walking Frame/walking_7.png ",
".../Walking Frame/walking_8.png");

}

display(){

var pos = this.body.position;
push()
translate(pos.x,pos.y);
imageMode(CENTER);
image(this.image, pos.x,pos.y,this.r);
ellipseMode(CENTER);
ellipse(pos.x,pos.y,this.r,this.r);
pop()

}
}