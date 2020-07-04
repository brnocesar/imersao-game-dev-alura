class Button {

    constructor(text, xPosition, yPosition/* , destination */) {

        this.text      = text;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        // this.destination = destination;
        this.destination = 'gameplay';
        this.button    = createButton(this.text);
        
        this.button.mousePressed(() => this._changeScene());
        this.button.addClass('start-play-button');
    }

    draw() {
        this.button.position(this.xPosition, this.yPosition);
    }

    _changeScene() {
        let buttons = document.getElementsByTagName("button");
        for (let i=0; i<buttons.length; i++) {
            buttons[i].remove();
        }
        buttons = document.getElementsByTagName("button");
        for (let i=0; i<buttons.length; i++) {
            buttons[i].remove();
        }
        
        currentScene = this.destination;
    }
}