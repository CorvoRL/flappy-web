function Bird(ctx) {

    var bxpos = this.x = 200; // X positie
    var bypos = this.y = 250; //Y posity

    var bflap = false; //Flapped de burd
    var bvely = this.vy = 0; //Velocity
    var bgrav = this.gravity = 0; //Gravity

    this.draw = function() {
        ctx.fillStyle = "blue";
        ctx.fillRect(bxpos, bypos, 20, 20);
    }

    this.move = function() {
        if (bflap == true) {
            bvely = 4;
            bflap = false;
        } else {
            bypos -= bvely;
            bvely -= bgrav;
        }
    }
}