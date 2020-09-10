class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {

        var posi = this.body.position;
        var angle = this.body.angle;

        push();
        translate(posi.x, posi.y);
        imageMode(CENTER);
        rotate(angle);
        fill("white");
        noStroke();
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

}