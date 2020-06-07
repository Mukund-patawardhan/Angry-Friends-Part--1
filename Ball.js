class Ball{
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':9.0,
          'density':5.0,
          'gravity':-100000000.0
      }
      this.body = Bodies.rectangle(x, y,30,30, options);
      this.width = 30;
      this.height = 30;
      this.image=loadImage("Friend--10.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      fill("black");
      stroke("black");
      ellipse(pos.x,pos.y, this.width);
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,70,70);
      pop();
    }
  };