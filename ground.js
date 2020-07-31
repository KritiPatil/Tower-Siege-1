class Ground{
    constructor(x, y, width, height) {
        var options = {
            isStatic : true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        strokeWeight (2);
        stroke ("white");
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
      }
      show(){
        var angle = this.body.angle;
        push();
        fill ("white");
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
      }
}