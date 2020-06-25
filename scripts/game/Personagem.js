class Personagem extends Animation{
    
    constructor(sheetImage, sheetImageWidth, sheetImageHeight, characterWidht, characterHeight, spriteWidth, spriteHeight, xPosition) {

        super(sheetImage, sheetImageWidth, sheetImageHeight, characterWidht, characterHeight, spriteWidth, spriteHeight, xPosition);
        
        this.yInitial     = height - this.characterHeight;
        this.yPosition    = this.yInitial;
        this.jumpVelocity = 0;
        this.gravity      = 4;
    }
    
    jump() {
        this.jumpVelocity = -32;
    }

    applyGravity() {
        this.yPosition += this.jumpVelocity
        this.jumpVelocity += this.gravity;

        if ( this.yPosition > this.yInitial ) {
            this.yPosition = this.yInitial;
        }
    }

    isColliding(enemy) {

        // noFill();
        // rect(this.xPosition, this.yPosition, this.characterWidht, this.characterHeight);
        // rect(enemy.xPosition, enemy.yPosition, enemy.characterWidht, enemy.characterHeight);
        // return false;

        const accuracy = 0.7; // "hitbox"

        return collideRectRect(
            this.xPosition,
            this.yPosition,
            this.characterWidht * accuracy,
            this.characterHeight * accuracy,
            enemy.xPosition,
            enemy.yPosition,
            enemy.characterWidht * accuracy,
            enemy.characterHeight * accuracy
        )
    }
}