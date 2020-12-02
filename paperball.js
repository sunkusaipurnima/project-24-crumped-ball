class PaperBall{
    constructor(x,y,r){
        var options={
            restitution:0.1,
            friction:0.5,
            isStatic:false,
            density:0.1
        }
        this.body= Bodies.circle(x,y, r,options);
        this.width=width;
        this.height=height;
        this.r = r;

        World.add(world,this.body);

    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        fill(0,255,0);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

}