class Player extends GameObject {
    constructor(x, yspeed){
        super();
        this.x = x;
        this.y = 30;
        this.yspeed = yspeed;
    }

    handleInput(){
        if (keyIsDown(UP_ARROW) && this.y > 10){
            this.y -= this.yspeed;
        }
        else if (keyIsDown(DOWN_ARROW) && this.x < height - 10) {
            this.y += this.yspeed;
        }
    }

    show(){
        push();
        translate(this.x, this.y);
        rectMode(CENTER);
        fill('LightBlue');
        rect(0, 0, 30, 10);
        fill('Blue');
        rect(-10, -5, 10, 20);
        pop();
    }
}