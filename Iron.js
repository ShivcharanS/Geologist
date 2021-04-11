class Iron{
    constructor(x,y,width,height){
        var options = {
           "restitution" : 0.8,
           "friction" : 3,
           "density" : 30
        }
        this.body = Bodies.rectangle(x,y,width,height)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        var ironpos = this.body.position
        var ironangle = this.body.angle
        push()
        translate(ironpos.x,ironpos.y)
        rotate(ironangle)
        rectMode(CENTER)
        strokeWeight(4)
        stroke("black")
        fill(255)
        rect(0,0,this.width,this.height)
        pop()
    }
}