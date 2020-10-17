class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling1 = loadImage("sprites/sling1.png") 
        this.sling2 = loadImage("sprites/sling2.png") 
        this.sling3 = loadImage("sprites/sling3.png")
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200, 30)
        image(this.sling2, 170, 30)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48, 22, 8);
            if (pointA.x<200) {
                strokeWeight (8);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 17, pointB.y + 3);
                image(this.sling3,pointA.x - 20, pointA.y); 
            }
            else{
                strokeWeight (4);
                line(pointA.x + 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 20, pointA.y, pointB.x + 17, pointB.y + 3);
                image(this.sling3,pointA.x - 20, pointA.y);
            }
            pop();
        }
    }
    
}