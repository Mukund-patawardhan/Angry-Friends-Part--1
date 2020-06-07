class Friend{
  constructor(x, y,num) {
    var options = {
        'restitution':1.0,
        'friction':9.0,
        'density':0.8,
        'gravity':1.0
    }
    this.body = Bodies.rectangle(x, y,60,60, options);
    this.width =60;
    this.height = 60;
    World.add(world, this.body);
    this.number=num;
    this.image=loadImage("Friend--"+ this.number + ".png");
    this.Visiblity=255;
    
    
  }
  display(){
    push();
    
    if(gameState===1){
      var pos =this.body.position;
    rectMode(CENTER);
    noFill();
    noStroke();
    rect(pos.x, pos.y, this.width, this.height);
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, 60, 60);
    }
    if (gameState==2){
    if(this.body.speed < 8  ){
      var pos =this.body.position;
    rectMode(CENTER);
    noFill();
    noStroke();
    rect(pos.x, pos.y, this.width, this.height);
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, 60, 60);
     }else{
       World.remove(world, this.body);
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       imageMode(CENTER);
       image(this.image, this.body.position.x, this.body.position.y, 60, 60);
     }
    }
    console.log(this.body.speed);
    pop();
  }
  
}