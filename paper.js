class Paper { 
    constructor(x,y){
    
    var options = {
        isStatic: false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
    }
    
    this.body = Matter.Bodies.circle(x, y, 5, [options], [50]);
    World.add(world,this.body);
    this.width = 20;
    this.height = 20;
    }
    
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(rgb(255,225,225))
        ellipse(pos.x,pos.y,this.width,this.height);
    }
    }