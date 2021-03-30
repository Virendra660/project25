class Paper{
    constructor(x,y,radius){
        var options = {
            restitution:0.5,
            friction:0.3,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        this.image=loadImage("paper.png");
        World.add(world,this.body)
    }
    display(){
        fill("white")
        imageMode(CENTER);
        image(this.image,0,0,this.radius);
    }
}