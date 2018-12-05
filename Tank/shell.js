class Shell {
    constructor(pos, angle){
        this.pos = pos.copy();
        this.angle = angle;
        this.frames = 0;
        this.maxFrames = 120;
        this.speed = 5;
        this.hit = false;
    }

    draw(){
        push();

        translate(this.pos);
        rotate(this.angle);
        fill('white');
        rect(0, 0, 4, 2);

        let offset = createVector(this.speed, 0);
        offset.rotate(this.angle);
        this.pos.add(offset);

        this.frames++;

        this.checkHit();

        pop();
    }

    checkHit(){
        let shellPos = this.pos;
        let hit = false;

        tanks.forEach(function(tank){
            if (tank.checkHit(shellPos)){
                hit = true;
            }
        });

        this.hit = hit;
    }

    finished(){
        return this.hit || this.frames > this.maxFrames;
    }
}