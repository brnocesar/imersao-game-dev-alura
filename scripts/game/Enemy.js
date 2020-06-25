class Enemy extends Animation {

    constructor(sheetImage, sheetImageWidth, sheetImageHeight, characterWidht, characterHeight, spriteWidth, spriteHeight, xPosition) {
        super(sheetImage, sheetImageWidth, sheetImageHeight, characterWidht, characterHeight, spriteWidth, spriteHeight, xPosition);
        
        this.velocity = 10;
    }
    
    walk() {
        this.xPosition = this.xPosition < (-this.characterWidht) ? width : this.xPosition - this.velocity;
    }
}