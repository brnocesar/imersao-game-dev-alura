class Enemy extends Animation {

    constructor(regularSheetImg, invincibleSheetImg, dashSheetImg, sheetImgWidth, sheetImgHeight, spriteWidth, spriteHeight, numSprites, characterWidht, characterHeight, xPosition, baseHeight, velocity) {
        
        super(regularSheetImg, invincibleSheetImg, dashSheetImg, sheetImgWidth, sheetImgHeight, spriteWidth, spriteHeight, numSprites, characterWidht, characterHeight, xPosition, baseHeight);
        
        this.velocity  = velocity;
        this.xPosition = width;
    }
    
    walk() {
        this.xPosition = this.xPosition < -this.characterWidht ? width : this.xPosition - this.velocity;
    }

    changeVelocity(delta) {
        this.velocity += delta;
    }
}