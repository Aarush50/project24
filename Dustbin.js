class Dustbin{
  constructor(x,y){
      var options={
          isStatic:true
      }
      this.x=x;
      this.y=y;
      this.width=200;
      this.height=100;
      this.angle=0;
      this.thickness=20;
      this.leftbody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,options);
      Matter.Body.setAngle(this.leftbody,this.angle);
      this.rightbody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,options);
      Matter.Body.setAngle(this.rightbody,this.angle);
      this.bottombody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,options);
      World.add(world,this.bottombody);
      World.add(world,this.leftbody);
      World.add(world,this.rightbody);
  }
  display(){
      var pos1=this.leftbody.position;
      var pos2=this.rightbody.position;
      var pos3=this.bottombody.position;
      push();
      translate(pos1.x,pos1.y);
      angleMode(RADIANS);
      rotate(this.angle);
      rectMode(CENTER);
      fill("white");
      rect(0,0,this.thickness,this.height);
      pop();
      push();
      translate(pos2.x,pos2.y);
      angleMode(RADIANS);
      rotate(-1*this.angle);
      rectMode(CENTER);
      fill("white");
      rect(0,0,this.thickness,this.height);
      pop();
      push();
      translate(pos3.x,pos3.y);
      rectMode(CENTER);
      fill("white");
      rect(0,0,this.width,this.thickness);
      pop();
  }
}