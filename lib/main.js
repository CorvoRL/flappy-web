window.onload = function() {
    var canvas = document.getElementById('canvas');

    var ctx = canvas.getContext('2d');

    var width = canvas.width = 800;
    var height = canvas.height = 500;

    var bird = new Bird(ctx);

    var obstacle = new Obstacle(ctx);
    var obstacles = [];

    var i;

    function cDraw() {

        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, width, height);
        
        bird.move();
        bird.draw();

        obstacle.draw();

    	for(i = 0; i < obstacles.length; i++){
            obstacles[i].draw();
        };
            

    }

    setInterval(cDraw, 30);
    setInterval(createPillars, 3000);

    window.addEventListener("keypress", function(e){
        if(e.keyCode == 32){
            bird.flap = true;
        }
    })

    function createPillars() {
        obstacles.push(new Obstacle(ctx));
    }

    function collision() {
            console.log("hit");
    }

    if (bird.x < obstacle.x + obstacle.height &&
        bird.x + bird.height > obstacle.x &&
        bird.y < obstacle.y + obstacle.height &&
        bird.height + bird.y > obstacle.y) {
        // collision detected!
        collision();
    }

}