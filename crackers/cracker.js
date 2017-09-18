var vec= []

var many = []

function setup(){

    createCanvas(700,600);
    background(0);
    //vec = new Vechile(20,20);
    //vec.vel = createVector(0,random(-7,-10));
    //vec.pos = createVector(100,height);

}

function draw(){

    if(random(1)<0.1){
        var temp = new Vechile(10,10);
        temp.vel = createVector(0,random(-7,-10));
        temp.pos = createVector(random(width),height);
        vec.push(temp);
    }
    background(0,45);

    for(var i = vec.length-1;i>=0;i--){

        vec[i].applyForce(createVector(0,0.1));
        vec[i].update();
        vec[i].show();
        if(vec[i].vel.y>=0){
            many.push(new piece(vec[i].pos.x,vec[i].pos.y));
            vec.pop(vec[i]);
        }

    }

    for(var i = many.length-1;i>=0;i--){
        many[i].show();
    }
    //console.log(vec.length);




}
