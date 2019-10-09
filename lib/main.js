window.onload = setInterval(function() {
    var canvas = document.getElementById('canvas');

    var ctx = canvas.getContext('2d');

    var width = canvas.width = 800;
    var height = canvas.height = 500;

    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, width, height)

    var bird = new Bird(ctx);

    bird.draw();

    setInterval(function move() {
        bird.move();
        window.addEventListener("keypress", function(e) {
            if(e.keyCode == 32){bflap = true;}
        })
    }, 30); 

}, 30);