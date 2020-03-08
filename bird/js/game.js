(function() {
    var cnv = document.getElementById("canvas");
    var ctx = cnv.getContext ("2d");
    
    var bg = new Image();
    var bird = new Image();
    var fg = new Image();
    var pipeBottom = new Image();
    var pipeUp = new Image();
    
    // Звуковые файлы
    var fly = new Audio();
    var scoreAudio = new Audio();
    
    fly.src = "audio/fly.mp3";
    scoreAudio.src = "audio/score.mp3";
    
    bg.src = "img/bg.png";
    bird.src = "img/bird.png";
    fg.src = "img/fg.png";
    pipeBottom.src = "img/pipeBottom.png";
    pipeUp.src = "img/pipeUp.png";
    
    var gap = 90,
        posY = 200,
        posX = 20,
        grav = 1;    
        
    var pipe = [];
    pipe[0] = {
        x: cnv.width,
        y: 0
    };

    var score = 0;
    
    function onKeydown() {
        posY -= 25;
        fly.play();
    }
    document.addEventListener('keydown', onKeydown);
    
    function draw() {
        ctx.drawImage(bg, 0, 0);
        for (var i = 0; i < pipe.length; i++) {
            ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
            ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
            pipe[i].x--;
    
            if (pipe[i].x === 125) {
                pipe.push({
                    x: cnv.width,
                    y: Math.floor((Math.random() * pipeUp.height) - pipeUp.height)
                });
            }
    
            if (posX + bird.width >= pipe[i].x && pipe[i].x + pipeUp.width >= posX && (posY <= pipe[i].y + pipeUp.height || posY + bird.height >= pipe[i].y + pipeUp.height + gap) || posY + bird.height >= bg.height - fg.height) {
                location.reload();
            }

            if (pipe[i].x === 5) {
                score++;
                scoreAudio.play();
            }
        }
        ctx.drawImage(fg, 0, 0 + bg.height - fg.height);
        ctx.drawImage(bird, posX, posY);

        ctx.font = "24px Tahoma";
        ctx.fillText(`Счет: ${score}`, 20, bg.height - 20);
    
        posY += grav;
        requestAnimationFrame(draw);
    }
    
    pipeUp.onload = draw;    
})();

