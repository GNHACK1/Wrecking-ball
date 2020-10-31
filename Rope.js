class Rope {
constructor(body1, pointB){

    var options ={
        bodyA : body1,
        pointB: pointB,
        stiffness: 0.7,
        length:300

    }
    this.pointB = pointB;
    this.rope = Matter.Constraint.create(options)
    World.add(world, this.rope);
}

attach(body) {
    this.rope.bodyA = body;
  }

fly() {
this.rope.bodyA = null;
}

display(){
    if (this.rope.bodyA) {
        
        var point1= this.rope.bodyA.position
        var point2 = this.pointB;
        push();
        strokeWeight(4);
        stroke(0,0,0);
        line(point2.x, point2.y, point1.x, point1.y);
        pop();
    }
}
}