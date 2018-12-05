class Tank {
    constructor(pos, colour1, colour2)
    {
        this.pos = pos.copy();
        this.colour1 = colour1;
        this.colour2 = colour2;
        this.angle = 0;
        this.health = 100;
    }

    draw()
    {
        if (this.destroyed()){
            return;
        }

        push();

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
        if (this.destroyed()){
            return;
        }
        
        this.angle += amount;
    }

    drive(speed){
        if (this.destroyed()){
            return;
        }

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

    fire(){
        if (this.destroyed()){
            return;
        }

        let endOfGun = createVector(40, 0);
        endOfGun.rotate(this.angle);
        endOfGun.add(this.pos);

        shells.push(new Shell(endOfGun, this.angle));
    }

    checkHit(shellPos){
        if (this.destroyed()){
            return false;
        }

        let dist = p5.Vector.dist(this.pos, shellPos);
    
        if (dist < 10)
        {
            this.health -= 20;
            return true;
        }

        return false;
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

    destroyed(){
        return this.health <= 0;
    }
}