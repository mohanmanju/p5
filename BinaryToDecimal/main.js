
class circle{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.start = false;
    }

    show(){
        if(this.state){
            fill(255);
        }else{
            fill(0);
        }
        ellipse(this.x,this.y,20,20);
    }

    toggle(x,y){
        var x = dist(x,y,this.x,this.y);
        if(x < 10){
            this.state = !this.state;
           
        }
    }
}

let circles = []
let decimal;
let sum;
function setup(){
    createCanvas(400,50);
    background(50);
   
    decimal = createDiv('');
    for (var i=0; i < 8 ; i++){
        circles.push(new circle(i*25+25,20));
    }
}
function draw(){
    for (var i=0; i < 8 ; i++){
        circles[i].show();
    }
    
    decimal.html(convert());

}

function mousePressed(){
    for (var i=0; i < 8 ; i++){
        circles[i].toggle(mouseX,mouseY);
    }
}

function convert(){
    var sum = 0;
    for (var i=0; i < 8 ; i++){
        var temp = circles[8 - i -1].state ? 1 : 0;
        //console.log("temp",temp);
        sum += temp * pow( 2 , i);
    }
    return sum;
}