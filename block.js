class Block{
    constructor(x, y, width, height, color) {
        var options = {
          'isStatic': false,
            'restitution':0.8,
            'friction':1.0,
            'density':0.2
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
        this.color = color;
      }
      show(){
        var angle = this.body.angle;
        push();
        fill (this.color);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
      }
}