class Animation {

    constructor(regularSheetImg, invincibleSheetImg, sheetImgWidth, sheetImgHeight, spriteWidth, spriteHeight, numSprites, characterWidht, characterHeight, xPosition, baseHeight) {

        this.regularSheetImg    = regularSheetImg;
        this.invincibleSheetImg = invincibleSheetImg;
        this.sheetImgWidth      = sheetImgWidth;
        this.sheetImgHeight     = sheetImgHeight;
        this.spriteWidth        = spriteWidth;
        this.spriteHeight       = spriteHeight;
        this.numSprites         = numSprites;
        this.characterWidht     = characterWidht;
        this.characterHeight    = characterHeight;
        this.groundHeight       = 30;
        this.baseHeight         = baseHeight;
        this.xPosition          = xPosition;
        this.yPosition          = height - this.characterHeight - this.groundHeight - this.baseHeight;
        this.matriz             = calculaMatriz();
        this.currentFrame       = 0;
        this.invincible         = false;

        function calculaMatriz () {
            
            let matriz  = [];
            let xFrames = sheetImgWidth / spriteWidth;
            let yFrames = sheetImgHeight / spriteHeight;
            let frames  = 0;

            for (let y = yFrames; y > 0 ; y--) {
                for (let x = xFrames; x > 0; x--) {
                    
                    matriz.push([
                        sheetImgWidth - x * spriteWidth,
                        sheetImgHeight - y * spriteHeight,
                    ]);
                    frames++;

                    if ( frames >= numSprites ) {
                        return matriz;
                    }
                }
            }
            
            return matriz;
        }
    }

    show() {
        // /*dev*/ noFill();
        /*dev*/ rect(this.xPosition, this.yPosition, this.characterWidht, this.characterHeight);
        /*dev*/ circle(this.xPosition + this.characterWidht/2, this.yPosition + this.characterHeight/2, (this.characterWidht + this.characterHeight)/2);
        
        image(
            this.invincible ? this.invincibleSheetImg : this.regularSheetImg,     // character-sheet image
            this.xPosition, this.yPosition,                                       // top-left corner position from character, refers to canvas
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