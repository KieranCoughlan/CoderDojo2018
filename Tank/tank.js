class Tank {
    constructor(pos, colour1, colour2)
    {
        this.pos = pos;
        this.colour1 = colour1;
        this.colour2 = colour2;
        this.angle = 0;
    }

    draw()
    {
        push();
        angleMode(DEGREES);
        rectMode(CENTER);
        translate(this.pos);
        rotate(this.angle);
        fill(this.colour1);
        rect(0, 0, 40, 20);
        fill(this.colour2);
        rect(25, 0, 30, 5);
        ellipse(5, 0, 15, 15);
        pop();
    }

    rotate(amount){
        this.angle += amount;
    }

    drive(speed){
        let offset = createVector(1, 0);
        offset.rotate(this.angle);
        offset.mult(speed);
        
        let newPos = this.pos.copy();
        newPos.add(offset);

        if (this.checkPos(newPos)){
          this.pos = newPos;
        }
        else {
            console.log("Edge");
        }
    }

    checkPos(pos){
        if(pos.x < 0 || pos.x > width ||
           pos.y < 0 || pos.y > height){
            return false;
        }
        else {
            return true;
        }
    }
}