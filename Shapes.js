const colors = [[88, 120, 68], [1, 140, 216], [88, 120, 68], [1, 140, 216]];

class Shapes{
    constructor(){
        this.x = Math.floor(random(0, 1920));
        this.y = Math.floor(random(0, 1080));
        this.d = Math.floor(random(50, 600));
        this.fillColor = colors[Math.floor(Math.random()*3)];
        this.shapeSelector = random(0, 100);
    }

    display(){
        if(this.shapeSelector < 50){
        fill(this.fillColor[0], this.fillColor[1], this.fillColor[2], random(40, 90));
        noStroke();
        ellipse(this.x, this.y, this.d, this.d);
    }
        else{
        fill(this.fillColor[0], this.fillColor[1], this.fillColor[2], random(40, 90));
        noStroke();
        rect(this.x, this.y, this.d, this.d);
    }
        }
    }
