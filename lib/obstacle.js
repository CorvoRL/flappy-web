function Obstacle(ctx) {

this.heightTop = 0;
this.heightBottom = 330;
this.width = 60;
this.speed = 4;
this.x = 700;
this.topy = 200;
this.bottomy = 200;
this.ctx = ctx;

this.draw = function() {
    this.calc();
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.x, this.heightTop, this.width, this.topy)
    this.ctx.fillRect(this.x, this.heightBottom, this.width, this.bottomy)
    this.x -= this.speed;
}

this.calc = function() {
    while(this.heightTop+this.heightBottom > 500 - 3*20 || this.heightTop+this.heightBottom < (500-200)) {
        this.heightTop = Math.floor(Math.random() * 500-10)+1;
        this.heightBottom = Math.floor(Math.random() * 500 - 10)+1;
    }   
}

}