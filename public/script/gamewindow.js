class GameWindow {
    constructor(){
        this.create();
    }


    create() {
        this.gamewindow = document.createElement('div');
        this.gamewindow.style.margin = '0rem auto';
        this.gamewindow.style.width = `${widthOfWindowInPercent}%`;
        this.gamewindow.style.height = toPx(heightOfWindow);
        this.gamewindow.style.position = 'relative';
        this.gamewindow.style.background = 'url(../assets/background-night.png)';
        this.gamewindow.style.overflowX = 'clip';
        this.gamewindow.style.display = 'flex';
        this.gamewindow.style.zIndex = '1';
    }
    getElement(){
        return this.gamewindow;
    }
}

class Ground {
    constructor(){
        this.create();
    }

    create() {
        this.ground = document.createElement('div');
        this.ground.style.width = '100%';
        this.ground.style.height = toPx(heightOfGround);
        this.ground.style.position = 'relative';
        this.ground.style.left = toPx(0);
        this.ground.style.top = toPx(heightOfWindow - heightOfGround);
        this.ground.style.zIndex = '1';
        this.ground.style.background = 'url(../assets/base.png)';
    }
    getElement(){
        return this.ground;
    }
}

class Score{
    constructor(){
        this.create();
    }

    create(){
        this.scorediv = document.createElement('div');
        this.scorediv.style.textAlign = 'center';
        this.scorediv.style.margin = '0px auto';
        this.scorediv.style.fontSize = '50px';
        this.scorediv.style.color = 'white';
        this.scorediv.style.position = 'absolute';
        this.scorediv.style.left=toPx(0);
        this.scorediv.style.zIndex = '3';
    }

    getElement(){
        return this.scorediv;
    }

}