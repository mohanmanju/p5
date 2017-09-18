
function Vechile(x,y){

    this.pos = createVector(random(width),random(height));
    this.vel = p5.Vector.random2D()
    this.acc = createVector();
    this.target = createVector(x,y);
}

Vechile.prototype.behaviors = function(){

    var fy = createVector(mouseX,mouseY);
    fy1 = this.fly(fy);
    fy1.mult(3);
    var seek = this.arrive(this.target);
    seek.mult(1);
    this.applyForce(seek);
    this.applyForce(fy1);
}

Vechile.prototype.applyForce = function(seek){
    this.acc.add(seek);
}

Vechile.prototype.update = function(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);

}

Vechile.prototype.show = function(){
    fill(255);
    strokeWeight(8);
    stroke(255);
    point(this.pos.x,this.pos.y);
}

Vechile.prototype.arrive = function(target){

    var desired = p5.Vector.sub(target,this.pos);
    var dis = desired.mag();
    var speed = 5;
    if(dis<100){
        speed = map(dis,0,100,0,5);
    }

    desired.setMag(speed);

    var steering = p5.Vector.sub(desired,this.vel);
    steering.limit(0.5);
    return steering;
}

Vechile.prototype.fly = function(target){

    var desired = p5.Vector.sub(target,this.pos);
    var dis = desired.mag();
    if(dis<30){

    desired.mult(-1);

    var steering = p5.Vector.sub(desired,this.vel);
    steering.limit(0.5);
    return steering;
    }
    else{
        return createVector(0,0);
    }
}
