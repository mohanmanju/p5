var font;
var vechiles = []

function preload(){
    //font = loadFont('./AvenirNextLTPro-Demi.otf');
}

function setup(){

    createCanvas(windowWidth,windowHeight);
    background(0);
    textSize(200);
    fill(255);
    //text("hello",100,100);
    
    textFont("Georgia");

    var pix = font.textToPoints('hello world !!',50,350);
    for (var i=0; i<pix.length;i++){
        fill(255);
        var vec = new Vechile(pix[i].x,pix[i].y);
        vechiles.push(vec);
        //console.log(pix[i].x);


    }

}

function draw(){

    background(0);
    fill(255);
    for(var i=0;i<vechiles.length;i++){
        var vel = vechiles[i];
        vel.behaviors();
        vel.update();
        vel.show();
    }


}
