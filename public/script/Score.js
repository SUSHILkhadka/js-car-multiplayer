class Score{


    create(){
        this.scorediv = document.createElement('div');
        scorediv.style.textAlign = 'center';
        scorediv.style.margin = '0px auto';
        scorediv.style.fontSize = '20px';
        scorediv.style.color = 'white';
        scorediv.style.display = 'relative';
        scorediv.style.zIndex = '3';
    }

    getDiv(){
        return this.scorediv;
    }

}