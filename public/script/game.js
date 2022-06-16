

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
// document.innerHTML='f'
var w1=new GameWindow();
document.body.append('firstone')
firstwrapper.append(w1.getElement())
    let g1=new Ground();
    w1.gamewindow.append(g1.getElement());
    let s1=new Score();
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
        speedOfGround=150/speedOfObstacle
        g1.ground.style.animation=`carMove linear ${speedOfGround}s infinite`


        if (gameoverFlag == true) {
            gameoverFlag=false
            speedOfObstacle = 0;
            bird.fallingAnimation();
            if (bird.top + fallingSpeed >= bottomHeightForObstacle - heightOfBird) {
                bird.top = bottomHeightForObstacle - heightOfBird;
                bird.deadFrame();
            }

            gamewindow1.style.display = 'block';
            firststartscreen.innerHTML='Press to restart';
            w1.gamewindow.innerHTML='';

            
            w1.gamewindow.style.display = 'none';

            return gameoverFlag;
        }
        window.requestAnimationFrame(() => {
            play();
        })
    }
    play();



}


function start2(){
    var w2=new GameWindow();
    secondwrapper.append(w2.getElement())
    let g2=new Ground();
    w2.gamewindow.append(g2.getElement());
    let s2=new Score();
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
        speedOfGround=150/speedOfObstacle
        g2.ground.style.animation=`carMove linear ${speedOfGround}s infinite`


        if (gameoverFlag2 == true) {
            gameoverFlag2=false;
            speedOfObstacle = 0;
            bird2.fallingAnimation();
            if (bird2.top + fallingSpeed >= bottomHeightForObstacle - heightOfBird) {
                bird2.top = bottomHeightForObstacle - heightOfBird;
                bird2.deadFrame();
            }

            gamewindow2.style.display = 'block';
            anotherstartscreen.innerHTML='Press to restart';
            w2.gamewindow.innerHTML='';

            
            w2.gamewindow.style.display = 'none';
            
            w2.gamewindow.style.display = 'none';
            return gameoverFlag2;
        }
        window.requestAnimationFrame(() => {
            play2();
        })
    }
    play2();

}



