window.onload = function() {
    var canvas = document.getElementById('canvas');

    var ctx = canvas.getContext('2d');

    var width = canvas.width = 800;
    var height = canvas.height = 500;

    var bird = new Bird(ctx);

    function cDraw() {

        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, width, height);
        
        bird.move();
        bird.draw();

    }

    setInterval(cDraw, 30);

    window.addEventListener("keypress", function(e){
        if(e.keyCode == 32){
            bird.flap = true;
        }
    })

}