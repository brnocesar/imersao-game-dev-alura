class OpeningScreen {

    constructor() {

        this.titleHeight = height * 0.25;
        this.menuHeight  = height * 0.075;
        this.menu = [];
    }

    setup() {

        extraWitch = new Enemy(
            imgExtraWitch, imgExtraWitch,
            733, 688, 733, 688, 1,
            100, 94, width - 50, height - 155,
            3
        );
        
        buttonStart   = new Button('Jogar', width/2 - 65, height/2);
        buttonHistory = new Button('História da Hipsta', width/2 - 200, height/2);
        buttonHelp    = new Button('Controles', width/2 - 115, height/2);

        this.menu.push(buttonStart);
        this.menu.push(buttonHistory);
        this.menu.push(buttonHelp);
    }

    keyPressed(key) {
        // navegar entre os botoes
    }

    _backgroundImage() {
        image(imgOpeningScreen, 0, 0, width, height);
    }

    _title() {
        textAlign(CENTER);
        textFont(fontOpeningScreen);
        textSize(50);
        text('As aventuras dE', width/2, this.titleHeight);
        textSize(85);
        text('HIPSTA', width/2 + 12, this.titleHeight + 55);
    }

    _menu() {
        let i = 2; // colocar no config.json
        this.menu.map(button => {
            i++;
            button.yPosition = height/2 + i*this.menuHeight;
            button.draw();
        });
    }

    draw() {
        this._backgroundImage();
        extraWitch.show();
        extraWitch.walk();
        this._title();
        this._menu();
    }
}