let arr = [0x7E,0x30,0x6D,0x79,0x33,0x5B,0x5F,0x70,0x7F,0x7B];
let index = 0;
function setup(){
    createCanvas(50,100);
    frameRate(1);
}
function draw(){
   background(0);
   display(arr[index]);
   index = (index + 1) % arr.length;
    
}

function display(val){
    noFill();
  
    //A
    fill(getColor(val,6));
    rect(10,10,30,5,5,5,5,5);
    //B
    fill(getColor(val,5));
    rect(40,15,5,30,5,5,5,5);
    //C
    fill(getColor(val,4));
    rect(40,50,5,30,5,5,5,5);
    //D
    fill(getColor(val,3));
    rect(10,80,30,5,5,5,5,5);
    //E
    fill(getColor(val,2));
    rect(5,50,5,30,5,5,5,5);
    //F
    fill(getColor(val,1));
    rect(5,15,5,30,5,5,5,5);
    //G
    fill(getColor(val,0));
    rect(10,45,30,5,5,5,5,5);
   
}

function getColor(val,shift){
    let r = 255;
    let g = 0;
    let b = 0;
    let a = 255 * ((val >> shift) & 1);
    return color(r,g,b,a);
}