class Enemy extends Animation {

    constructor(sheetImage, sheetImageWidth, sheetImageHeight, spriteWidth, spriteHeight, numSprites, characterWidht, characterHeight, xPosition, baseHeight, velocity, delayToAppears) {
        super(sheetImage, sheetImageWidth, sheetImageHeight, spriteWidth, spriteHeight, numSprites, characterWidht, characterHeight, xPosition, baseHeight);
        
        this.velocity       = velocity;
        this.delayToAppears = delayToAppears;
        this.xPosition      = width + this.delayToAppears
    }
    
    walk() {
        this.xPosition = this.xPosition < -this.characterWidht - this.delayToAppears ? width : this.xPosition - this.velocity;
    }
}