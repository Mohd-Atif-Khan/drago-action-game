score = 0 ;
cross = true;

audiogo = new Audio('gameover.mp3');
audio = new Audio('playAudio.mp3');

setTimeout(() => {
    audio.play();
    
}, 1000);


document.onkeydown = function(e) {
    console.log("Key pressed is: ", e.key);
    console.log("Key code is: ", e.code);

    if (e.code === "ArrowUp") {
         dino = document.querySelector(".dino");
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700); // Remove class after 1 second
    }
    if (e.code === "ArrowRight") {
         dino = document.querySelector(".dino");
       
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        console.log(dinoX)
        dino.style.left = dinoX + 112 +'px'
    }
    if (e.code === "ArrowLeft") {
         dino = document.querySelector(".dino");
       
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        console.log(dinoX)
        dino.style.left = (dinoX - 112 )+'px'
    }
};
 setInterval(() => {
    dino = document.querySelector(".dino");
    gameOver = document.querySelector(".game-over");
    obstacle = document.querySelector(".obstacle");

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));
    offsetx = Math.abs(dx-ox);
    offsety = Math.abs(dy-oy);
    if(offsetx<93&& offsety<53){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audiogo.currentTime = 0; // Reset to start position
            audio.pause();
            audio.currentTime = 0; // Reset to start position
            
        }, 1000);

    }

    else if(offsetx<144 && cross){
        score += 1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur =  parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"));
            newDur = aniDur -0.1;
            obstacle.style.animationDuration = newDur +'s';
            console.log("New animation:",newDur)
        }, 500);
    }
 }, 10);

 function updateScore(score){
    scoreCont.innerHTML = "your score : " + score
 }
