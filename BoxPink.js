class BoxPink {
    constructor(x,y){
        var option={
            isStatic:false
        }
     this.body = Bodies.rectangle(x,y,20,20,option);
     World.add(world, this.body);
    }
    display(){
      var  position=this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(position.x,position.y,20,20);

    }
}