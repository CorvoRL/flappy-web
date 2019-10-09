function Bird(ctx) {

    this.x = 0;
    this.y = 0;

    this.flap = false;
    this.vy = 0;
    this.gravity = 0;

    this.draw = function() {
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, 50, 50)
    }
}