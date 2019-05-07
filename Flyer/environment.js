class Environment extends GameObject {
    constructor(xinc, ymin, ymax){
        super();

        this.xinc = xinc;
        this.ymin = ymin;
        this.ymax = ymax;
        this.xstart = 0.0;
        this.points = [];
    }

    move(){
        this.xstart += speed;
    }

    show(){
        fill('white');
        this.calculatePoints();

        beginShape();
        
        for (let x = 0; x < width; x++){
            vertex(x, this.points[x]);
        }

        vertex(width, height);
        vertex(0, height);
        endShape(CLOSE);

        if (random(100) < 1){
            let lasty = this.points[width - 1];
            gameObjects.push(new Person(this.xinc, width, lasty));
        }
    }

    calculatePoints(){
        this.points = [];

        let xoff = this.xstart;

        for (let x = 0; x < width; x++){
            let y = map(noise(xoff), 0, 1, this.ymin, this.ymax);
            this.points.push(y);
            xoff += this.xinc;
        }
    }

    isBelowGround(x, y){
       return (y > this.points[x]);
    }
}