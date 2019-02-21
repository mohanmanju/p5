let w = 20;
let c;
let grids = [];
let row,col;
let current;
let followUpNeighbour = []
class cell{
    constructor(x,y){
        this.x = x ;
        this.y = y ;
        this.sides = [true,true,true,true];
        this.visited = false;
    }

    show(){
        stroke(255);
        var x = this.x * w;
        var y = this.y * w;
        if(this.sides[0] == true){
        line(x,y,x + w,y);}
        if(this.sides[1] == true){
        line(x + w,y,x +w ,y + w);}
        if(this.sides[2] == true){
        line(x+w,y+w,x ,y+w);}
        if(this.sides[3] == true){
        line(x,y+w,x ,y);}

        if(this.visited){
            fill(255,0,255,50);
            noStroke();
            rect(this.x*w,this.y*w,w,w);
        }
    }

    index(i,j){
        if(i< 0 || j < 0|| i > row-1||j>col-1){
            return -1;
        }
        return j +i *row;
    }
    heightLight(){
        fill(0,0,255,100);
            noStroke();
            rect(this.x*w,this.y*w,w,w);
    }
    checkNeighbour(){
        var neighbour = [];

        var top = grids[this.index(this.x,this.y-1)];
        var right = grids[this.index(this.x+1,this.y)];
        var bottom = grids[this.index(this.x,this.y+1)];
        var left = grids[this.index(this.x-1,this.y)];

        if( top && top.visited == false){
            neighbour.push(top);
        }
        if( right && right.visited == false){
            neighbour.push(right);
        }
        if( bottom && bottom.visited == false){
            neighbour.push(bottom);
        }
        if( left && left.visited == false){
            neighbour.push(left);
        }
        //followUpNeighbour.push(grids[this.index(this.x,this.y)]);
        if(neighbour.length > 0 ){
            var rnd = floor(random(0,neighbour.length));
            neighbour[rnd].visited = true;
            return neighbour[rnd];
               
        }
       
        //print(grids);
    }
   
    
}

function setup(){
    createCanvas(400,400);
    background(125);
    row = height / w;
    col = width / w;
    for(var i=0;i<row;i++){
        for(var j=0; j<col; j++){
            grids.push(new cell(i,j));
        }
    }
    //fill(50);
    current = grids[0];
    current.visited = true;
    //frameRate(10);
}

function checkDirection(current,next){

    var xdiff = current.x - next.x;
    var ydiff = current.y - next.y;
    if(xdiff > 0){
        current.sides[3] = false;
        next.sides[1] = false;
    }
    else if(xdiff < 0){
        current.sides[1] = false;
        next.sides[3] = false;
    }
    if(ydiff < 0){
        current.sides[2] = false;
        next.sides[0] = false;
    }else if(ydiff > 0){
        current.sides[0] = false;
        next.sides[2] = false;
    }
   
}

function draw(){
    background(125);
    for(var i = 0; i<grids.length;i++){
        grids[i].show();
    }
    
    var next = current.checkNeighbour();
    current.heightLight();
    
    if(next){
        followUpNeighbour.push(current);
        checkDirection(current,next);
   
        current = next;
        
    }else if(followUpNeighbour.length>0){
        current = followUpNeighbour.pop();
    }
    
}