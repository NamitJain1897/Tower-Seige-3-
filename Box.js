class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            
            'friction':3.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }
      
      display(){

        var angle = this.body.angle;
        
        if(this.body.speed < 5) {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("green");
        rect(0,0,this.width,this.height);
        pop();
        
        }
        else {
          World.remove(world,this.body);
          this.visibility -= 10;
          tint(255,this.visibility);
        }
        
      }
      score () {
        if(this.visibility <0 && this.visibility >-105) {
          score++;
        }
      }
     
  }