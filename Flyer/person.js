class Person extends GameObject {
    constructor(xinc, x, y){
        super();
        this.xinc = xinc;
        this.x = x;
        this.y = y;
    }

    move() {
        this.x -= speed / this.xinc;
        if (this.x < 0) {
            this.active = false;
        }
    }

    show() {
        push();

        fill('yellow');
        translate(this.x, this.y);
        rectMode(CENTER);
        rect(0, -10, 20, 20);

        pop();
    }
}