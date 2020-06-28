class Personagem extends Animation{
    
    constructor(sheetImage, sheetImageWidth, sheetImageHeight, spriteWidth, spriteHeight, numSprites, characterWidht, characterHeight, xPosition, baseHeight) {

        super(sheetImage, sheetImageWidth, sheetImageHeight, spriteWidth, spriteHeight, numSprites, characterWidht, characterHeight, xPosition, baseHeight);
        
        this.yInitial     = height - this.characterHeight - this.groundHeight - this.baseHeight;
        this.yPosition    = this.yInitial;
        this.jumpVelocity = 0;
        this.gravity      = 4;
        this.impulse      = -32;
        this.jumpsInARow  = 0;
        this.maxJumps     = 2;
        this.invincible   = false;
    }
    
    jump() {
        if (this.jumpsInARow < this.maxJumps) {
            this.jumpVelocity = this.impulse;
            this.jumpsInARow++;
        }
    }

    applyGravity() {
        this.yPosition += this.jumpVelocity
        this.jumpVelocity += this.gravity;

        if ( this.yPosition > this.yInitial ) {
            this.yPosition = this.yInitial;
            this.jumpsInARow = 0;
        }
    }

    becomesInvincible() {
        this.invincible = true;
        // setTimeout(() => {
        //     this.invincible = false;
        // }, 1000);
    }

    // tornar a "precisao" uniforme em todas as direções
    isColliding(enemy) {

        const accuracy = 0.7; // "hitbox"

        const result = collideRectRect(
            this.xPosition,
            this.yPosition,
            this.characterWidht * accuracy,
            this.characterHeight * accuracy,
            enemy.xPosition,
            enemy.yPosition,
            enemy.characterWidht * accuracy,
            enemy.characterHeight * accuracy
        );

        if ( !result ) {
            this.invincible = false;
        }

        return result && !this.invincible;
    }
}