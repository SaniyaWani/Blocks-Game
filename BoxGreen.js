class BoxGreen {
    constructor(x,y){
     this.body = Bodies.rectangle(x,y,20,20);
     World.add(world, this.body);
    }
    display(){
        var  position=this.body.position;
    rectMode(CENTER);
    fill("green");
    rect(position.x,position.y,20,20);

    }
}