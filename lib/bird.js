function Bird(ctx) {

    this.x = 200; // X positie
    this.y = 250; //Y posity

    this.flap = false; //Flapped de burd
    this.vely = 0; //Velocity
    this.grav = 0.7; //Gravity
    this.ctx = ctx;

    this.draw = function() {
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.x, this.y, 20, 20);
    }
    
    this.move = function() {
        if (this.flap) {
            this.vely = 6;
            this.flap = false;
        } else {
            this.y -= this.vely;
            this.vely -= this.grav;
        }
    }
}