
let x = 0;
let y = 0;
let shift = 0;
function setup(){
    createCanvas(400,400);
    background(0);
}

function draw(){
    
    stroke(255);
    
    //  console.log(random(1));
    if(random(1)<0.5){
       
        line(x,y,x+10,y+10);
    }else{
        
        line(x,y+10,x+10,y);
    }
    rotate(PI/10);
    //line(100,100,150,150);
    x += 10;
    if(x>width){
        x = 0;
        y += 10;
    }
    if(y > height){
        x = 0;
        y = 0;
        background(0);
    }
    
}