

firststartscreen.addEventListener('click', event => {
    gamewindow1.style.display = 'none';
    speedOfObstacle = 10;
    let status = start();

})
anotherstartscreen.addEventListener('click', event => {
    gamewindow2.style.display = 'none';
    speedOfObstacle = 10;
    let status = start2();


})




function start() {

    var w1 = new GameWindow();
    document.body.append('firstone')
    firstwrapper.append(w1.getElement())
    let g1 = new Ground();
    w1.gamewindow.append(g1.getElement());
    let s1 = new Score();
    w1.gamewindow.append(s1.getElement());
    let obstacleArray1 = []
    for (let q = 0; q < 3; q++) {
        let obs = new Obstacle(100, widthOfWindow + q * spacingBetweenObstacle);
        w1.gamewindow.append(obs.getFirstRect());
        w1.gamewindow.append(obs.getSecRect());
        obstacleArray1.push(obs);
    }
    let bird = new Bird(50, 200);
    bird.listenKeyPress();
    w1.gamewindow.append(bird.getRect())

    let gameoverFlag = false;
    let timeoutFlag = 0;


    function play() {

        if (gameoverFlag == false) {

            for (let p = 0; p < obstacleArray1.length; p++) {
                obstacleArray1[p].moveObstacle();
                gameoverFlag = obstacleArray1[p].respawnCheck(p, bird);
                if (gameoverFlag == true) {
                    break;
                }
            }



            bird.updatePosition();
            bird.flappingAnimation();
        }
        if (gameoverFlag == false) { gameoverFlag = bird.collisionCheck(); }
        s1.scorediv.innerHTML = `Score = ${bird.score}&emsp;&emsp; Record =    ${highestScore}`
        speedOfObstacle = 10 + bird.score;
        speedOfGround = 150 / speedOfObstacle
        g1.ground.style.animation = `carMove linear ${speedOfGround}s infinite`


        if (gameoverFlag == true) {
            bird.fallingAnimation();
            if (bird.top + fallingSpeed >= bottomHeightForObstacle - heightOfBird) {
                bird.top = bottomHeightForObstacle - heightOfBird;
                bird.deadFrame();


                timeoutFlag++;
                if (timeoutFlag == 1) {
                    speedOfObstacle = 0;
                    var gg = setTimeout(function () {
                        gamewindow1.style.display = 'block';
                        firststartscreen.innerHTML = 'Press to restart';
                        w1.gamewindow.innerHTML = '';

                        w1.gamewindow.style.display = 'none';
                        gameoverFlag = false;
                        return gameoverFlag;

                    }, 100);
                }


            }




        }
        window.requestAnimationFrame(() => {
            play();
        })
    }
    play();



}


function start2() {
    var w2 = new GameWindow();
    secondwrapper.append(w2.getElement())
    let g2 = new Ground();
    w2.gamewindow.append(g2.getElement());
    let s2 = new Score();
    w2.gamewindow.append(s2.getElement());
    let obstacleArray2 = []
    for (let i = 0; i < 5; i++) {
        let obs = new Obstacle(100, widthOfWindow + i * spacingBetweenObstacle);
        w2.gamewindow.append(obs.getFirstRect());
        w2.gamewindow.append(obs.getSecRect());
        obstacleArray2.push(obs);
    }
    let bird2 = new Bird(50, 200);
    bird2.listenKeyPress2();
    w2.gamewindow.append(bird2.getRect())
    let gameoverFlag2 = false;
    let timeoutFlag2 = 0;


    function play2() {
        if (gameoverFlag2 == false) {

            for (let j = 0; j < obstacleArray2.length; j++) {
                obstacleArray2[j].moveObstacle();
                gameoverFlag2 = obstacleArray2[j].respawnCheck(j, bird2);
                if (gameoverFlag2 == true) {
                    break;
                }
            }



            bird2.updatePosition();
            bird2.flappingAnimation();
        }
        if (gameoverFlag2 == false) { gameoverFlag2 = bird2.collisionCheck(); }
        s2.scorediv.innerHTML = `Score = ${bird2.score}&emsp;&emsp; Record =    ${highestScore}`
        speedOfObstacle = 10 + bird2.score;
        speedOfGround = 150 / speedOfObstacle
        g2.ground.style.animation = `carMove linear ${speedOfGround}s infinite`




        if (gameoverFlag2 == true) {
            bird2.fallingAnimation();
            if (bird2.top + fallingSpeed >= bottomHeightForObstacle - heightOfBird) {
                bird2.top = bottomHeightForObstacle - heightOfBird;
                bird2.deadFrame();


                timeoutFlag2++;
                if (timeoutFlag2 == 1) {
                    speedOfObstacle = 0;
                    var gg = setTimeout(function () {
                        gamewindow2.style.display = 'block';
                        anotherstartscreen.innerHTML = 'Press to restart';
                        w2.gamewindow.innerHTML = '';

                        w2.gamewindow.style.display = 'none';
                        gameoverFlag2 = false;
                        return gameoverFlag2;
                    }, 100);
                }


            }




        }
        window.requestAnimationFrame(() => {
            play2();
        })
    }
    play2();

}



