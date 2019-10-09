function Bird(ctx) {

    this.x = 0;
    this.y = 0;

    this.flap = false;
    this.vy = 0;
    this.gravity = 0;

    this.draw = function() {
        ctx.fillStyle = "blue";
        ctx.fillRect(200, 250, 20, 20);
    }

    this.move = function() {
        if (this.flap == true) {
            this.vy = 4;
            this.flap = false;
        } else {
            this.y -= this.vy;
            this.vy -= this.gravity;
        }
    }
}