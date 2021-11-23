var img1;
var img2;
var circles = [];

function preload(){
    img1 = loadImage("logo1.png");
    img2 = loadImage("logo2.png");
}

function setup(){
var logos = [img1, img2, img1, img2];
var logoSelection = Math.floor(Math.random()*3);
createCanvas(1920, 1080);
background('#04344e');

makeCircles();

image(logos[logoSelection], 760, 281);

}

function makeCircles() {
    for(let i = 0; i < 100; i++){
        circles.push(new Shapes());
    }

    for(let circle of circles){
        circle.display();
    }
}

function keyPressed(){
    if(key === "n"){
        circles = [];
        setup();
    }
    else if(key === "s"){
        saveCanvas("yetiWallpaper", "png");
    }
}

/*function draw(){

}*/