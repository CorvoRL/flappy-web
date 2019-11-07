window.onload = function() {
    
    //variables
    var canvas = document.getElementById('canvas');

    var ctx = canvas.getContext('2d');

    var width = canvas.width = 800;
    var height = canvas.height = 500;

    var bird = new Bird(ctx);

    var obstacle = new Obstacle(ctx);
    var obstacles = [];

    var i;


    // teken functie
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

    // Intervals
    setInterval(cDraw, 30);
    setInterval(createPillars, 3000);

    //Laat de bird omhoog gaan met spatie
    window.addEventListener("keypress", function(e){
        if(e.keyCode == 32){
            bird.flap = true;
        }
    })

    // Push een nieuwe obstacle in de array.
    function createPillars() {
        obstacles.push(new Obstacle(ctx));
    }

    //zeg hit in console wanneer er een collision is
    function collision() {
            console.log("hit");
    }


    // Dit is mijn manier

    // if(bird.x >= obstacles[i].x){
    //     collision();
    // }



    // Dit is de manier van internet

    // if (bird.x < obstacle.x + obstacle.height &&
    //     bird.x + bird.height > obstacle.x &&
    //     bird.y < obstacle.y + obstacle.height &&
    //     bird.height + bird.y > obstacle.y) {
    //     // collision detected!
    //     collision();
    // }

}