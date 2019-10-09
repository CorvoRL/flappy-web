window.onload = setInterval(function() {
    var canvas = document.getElementById('canvas');

    var ctx = canvas.getContext('2d');

    var width = canvas.width = 800;
    var height = canvas.height = 500;

    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, width, height)

    var bird = new Bird(ctx);

    bird.draw();

}, 30);