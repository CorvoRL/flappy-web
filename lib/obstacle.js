function Obstacle(ctx) {

    this.heightTop = 0;
    this.heightBottom = 330;
    this.width = 60;
    this.speed = 7;
    this.x = 900;
    this.topy = 200;
    this.bottomy = 200;
    this.ctx = ctx;

    this.gapTop = Math.floor(Math.random() * 140) + 80;
    this.gapHeight = Math.floor(Math.random() * 200) + 100;
    this.bottomTop = this.gapTop + this.gapHeight;

    this.draw = function() {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(this.x, 0, this.width, this.gapTop - 1);
        this.ctx.fillRect(this.x, this.bottomTop, this.width, 500);
        this.x = this.x -= this.speed;
    }

}