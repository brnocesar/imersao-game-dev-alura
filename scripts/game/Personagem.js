class Personagem {
    
    constructor(characterImage, imageWidth, imageHeight, xFrames, yFrames) {
        
        this.characterImage  = characterImage;
        this.matriz          = calculaMatriz();
        this.currentFrame    = 0;
        this.characterWidht  = imageWidth / xFrames;
        this.characterHeight = imageHeight / yFrames;

        function calculaMatriz () {
            
            let matriz      = [];
            let xCharWidth  = imageWidth / xFrames;
            let yCharHeight = imageHeight / yFrames;

            for (let y = yFrames; y > 0 ; y--) {
                for (let x = xFrames; x > 0; x--) {
                    
                    matriz.push([
                        imageWidth - x * xCharWidth,
                        imageHeight - y * yCharHeight,
                    ]);
                }
            }
            
            return matriz;
        };
    }
    
    exibe() {
        image(
            this.characterImage,                                                  // character-sheet image
            0, height - this.characterHeight/2,                                   // top-left corner position from character, refers to canvas
            this.characterWidht/2, this.characterHeight/2,                        // character size, refers to canvas
            this.matriz[this.currentFrame][0], this.matriz[this.currentFrame][1], // top-left corner position from frame, refers to refers to character-sheet image
            this.characterWidht, this.characterHeight                             // size of each frame, refers to character-sheet image
        );
        
        this.anima();
    }
    
    anima() {
        this.currentFrame++;
        
        if ( this.currentFrame >= this.matriz.length - 1 ) {
            this.currentFrame = 0;
        }
    }
}