class Drop{

constructor(x,y,radius){

var options ={

isStatic:false,
friction:0.1

}

this.body = Bodies.circle(x,y,radius,options); 
this.radius = radius;
World.add(world, this.body); 
}
update(){

this.body.setPosition(random(20,480),random(50,100));

}

display(){

    var pos = this.body.position;
    push()
    translate(pos.x,pos.y);
    ellipseMode(CENTER);
    strokeWeight(3);
    fill("blue"); 
    ellipse(0,0,this.radius); 
    pop()

}
}