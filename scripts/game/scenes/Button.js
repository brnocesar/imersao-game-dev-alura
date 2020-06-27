class Button {

    constructor(text, xPosition, yPosition) {

        this.text      = text;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.button    = createButton(this.text);
        
        this.button.mousePressed(() => this._changeScene());
        this.button.addClass('start-play-button');
    }

    draw() {
        this.button.position(this.xPosition, this.yPosition);
        this.button.center('horizontal');
    }

    _changeScene() {
        this.button.remove();
        currentScene = 'gameplay';
    }
}