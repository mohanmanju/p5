var x;
var y;
var speedx;
var speedy;

function setup(){
    createCanvas(600,400);
    background(0);
    x = 0;
    y = 0;
    speedx = random(-5,5);
    speedy = random(-5,5);
}

function draw(){
    background(0);
    fill(255);
    stroke(255);
    strokeWeight(3);
    translate(width/2,height/2);
    //rect(100,50,200,100);
    ellipse(x,y,10,10);
    x = x + speedx;
    y+= speedy;
    if(x > width/2 || x < -width/2){
        speedx = speedx*-1;
    }
    if(y > height/2||y < -height/2){
        speedy*=-1;
    }



}
