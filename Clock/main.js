let degreeSec = 0;
let degreeMin = 0;
let degreeHrs = 0;
function setup(){
    createCanvas(500,500);
    background(0);
    angleMode(DEGREES);
    frameRate(1);
    let hr = hour();
    let min = minute();
    let sec = second();
    console.log(hr);
    console.log(min);
    console.log(sec);
}

function draw(){
    background(0);
    noFill();
    translate(250,200);
    rotate(-90);
    stroke(255,0,0);
    strokeWeight(5);
    let hr = hour();
    let min = minute();
    let sec = second();
    
    sec = map(sec,0,60,0,360);
    min = map(min,0,60,0,360);
    hr = map(hr,0,24,0,360);
    push();
    rotate(sec);
    line(0,0,70,0);
    pop();
    arc(0,0, 200, 200, 0, sec);
    stroke(0,255,0);
    push();
    rotate(min);
    line(0,0,60,0);
    pop();
    arc(0,0, 185, 185, 0, min);
    stroke(0,0,255);
    push();
    rotate(hr);
    line(0,0,40,0);
    pop();
    arc(0,0, 170, 170, 0, hr);
}