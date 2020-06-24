class Animation {

    constructor(sheetImage, sheetImageWidth, sheetImageHeight, characterWidht, characterHeight, spriteWidth, spriteHeight, x) {

        this.sheetImage       = sheetImage;
        this.sheetImageWidth  = sheetImageWidth;
        this.sheetImageHeight = sheetImageHeight;
        this.characterWidht   = characterWidht;
        this.characterHeight  = characterHeight;
        this.spriteWidth      = spriteWidth;
        this.spriteHeight     = spriteHeight;
        this.x                = x;
        this.y                = height - this.characterHeight;
        this.matriz           = calculaMatriz();
        this.currentFrame     = 0;

        function calculaMatriz () {
            
            let matriz  = [];
            let xFrames = sheetImageWidth / spriteWidth;
            let yFrames = sheetImageHeight / spriteHeight;

            for (let y = yFrames; y > 0 ; y--) {
                for (let x = xFrames; x > 0; x--) {
                    
                    matriz.push([
                        sheetImageWidth - x * spriteWidth,
                        sheetImageHeight - y * spriteHeight,
                    ]);
                }
            }
            
            return matriz;
        }
    }

    exibe() {
        image(
            this.sheetImage,                                                      // character-sheet image
            this.x, this.y,                                                       // top-left corner position from character, refers to canvas
            this.characterWidht, this.characterHeight,                            // character size, refers to canvas
            this.matriz[this.currentFrame][0], this.matriz[this.currentFrame][1], // top-left corner position from frame, refers to refers to character-sheet image
            this.spriteWidth, this.spriteHeight                                   // size of each frame (sprite), refers to character-sheet image
        );
        
        this.anima();
    }

    anima() {
        this.currentFrame = this.currentFrame >= this.matriz.length - 1 ? 0 : this.currentFrame + 1;
    }
}