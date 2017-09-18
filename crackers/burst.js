

function piece(x,y,color){

    var after = []
    for(var i=0;i<10;i++){
        var temp = new Vechile(10,10);
        temp.pos = createVector(x,y);
        temp.vel = p5.Vector.random2D();
        temp.vel.mult(random(1,5));
        temp.color = color;
        after.push(temp);
    }
    this.velBust = after;
    this.lifespan = 500;


    this.show = function(){
        for(var i=0;i<this.velBust.length;i++){
            this.velBust[i].applyForce(createVector(0,0.1));
            this.velBust[i].update();
            this.velBust[i].show();
            if(random(1)<0.5){
                this.velBust[i].vel.mult(0.95);
            }


            this.lifespan--;
            if(this.lifespan<0){
                this.velBust.pop(this.velBust[i]);
            }
        }

    }
}
