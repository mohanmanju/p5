

function piece(x,y){

    var after = []
    for(var i=0;i<10;i++){
        var temp = new Vechile(10,10);
        temp.pos = createVector(x,y);
        temp.vel = createVector(random(-2,2),random(-2,2));
        temp.applyForce(createVector(0,1))
        after.push(temp);
    }
    this.velBust = after;
    this.lifespan = 1000;


    this.show = function(){
        for(var i=0;i<this.velBust.length;i++){
            this.velBust[i].update();
            this.velBust[i].show();

            this.lifespan--;
            if(this.lifespan<0){
                this.velBust.pop(this.velBust[i]);
            }
        }

    }
}
