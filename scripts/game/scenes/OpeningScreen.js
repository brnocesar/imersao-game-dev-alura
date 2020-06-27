class OpeningScreen {

    constructor() {

        this.titleHeight = height * 0.25;
    }

    setup() {
        // openingScreen = new Scenario(imageOpeningBackground, 1);
        // buttonStart = new Button('Iniciar', width/2, height/2); // porque nao aqui
    }

    keyPressed(key) {
    
    }

    draw() {
        this._backgroundImage();
        this._title();
        this._button();
        // texto, logo
        // botao de jogar
    }

    _backgroundImage() {
        image(imageOpeningScreen, 0, 0, width, height);
    }

    _title() {
        textAlign(CENTER);
        textFont(fontOpeningScreen);
        textSize(50);
        text('As aventuras dE', width/2, this.titleHeight);
        textSize(85);
        text('HIPSTA', width/2 + 12, this.titleHeight + 55);
    }

    _button() {
        buttonStart.yPosition = height * 5/7;
        buttonStart.draw();
    }
}