var x;
var y;
var speedx;
var speedy;

var oneY = [0,0];
var result = false;

function setup(){
    createCanvas(700,400);
    background(0);
    x = 0;
    y = 0;

    index = 0;
    speedx = random(-5,5);
    speedy = random(-5,5);
    createElement('br');
    createElement('br');
    button = createButton('Play Again');
    //button.position(19, 19);
    button.mousePressed(resetGame);
}

function draw(){

    background(0);
    fill(255);
    stroke(255);
    strokeWeight(3);
    translate(width/2,height/2);

    ellipse(x,y,10,10);

    fill(125);
    noStroke();
    //var first = rect(width/2-12,oneY,10,100);

    rect(width/2-12,oneY[0],10,100);
    rect(-width/2+2,oneY[1],10,100);


    if(!result){
        move();
        update();
    }

    //update();

}

function move(){

    x = x + speedx;
    y+= speedy;


    if(x > width/2-18 || x < -width/2+18){
        //console.log(oneY[index]+"  "+y);
        //speedx = speedx*-1;
        if(y > oneY[index]-15 && y < oneY[index]+115){
            speedx = speedx*-1;
        }else{
            result = true;
            noLoop();
            //console.log("fail");
        }

    }
    if(y > height/2||y < -height/2){
        speedy*=-1;
    }
}

function update(){


    if(x < 0){
        index = 1;
    }else{
        index = 0;
    }

    if(keyIsPressed == true && keyCode == UP_ARROW){
        oneY[index]-=2;
    }

    if(keyIsPressed == true && keyCode == DOWN_ARROW){
        oneY[index]+=2;
    }
}

function resetGame(){
    x = 0;
    y = 0;

    index = 0;
    speedx = random(-5,5);
    speedy = random(-5,5);
    result = false;
    loop();

}
