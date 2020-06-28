class Enemy extends Animation {

    constructor(sheetImage, sheetImageWidth, sheetImageHeight, spriteWidth, spriteHeight, numSprites, characterWidht, characterHeight, xPosition, baseHeight, velocity) {
        
        super(sheetImage, sheetImageWidth, sheetImageHeight, spriteWidth, spriteHeight, numSprites, characterWidht, characterHeight, xPosition, baseHeight);
        
        this.velocity  = velocity;
        this.xPosition = width;
    }
    
    walk() {
        this.xPosition = this.xPosition < -this.characterWidht ? width : this.xPosition - this.velocity;
    }

    changeVelocity() {
        /* de forma global são definidas as velocidades minima e maxima
         * o atual atributo 'velocity' passa a ser o 'rangeVelocity'
         * esse metodo altera a velocidade para um intervalo dentro do range iniciando no valor minimo
         */
    }
}