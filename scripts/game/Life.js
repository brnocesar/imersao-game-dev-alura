class Life {

    constructor(max, initial) {

        this.max             = max;
        this.initial         = initial;
        this.total           = this.initial;
        this.indicatorWidth  = 50;
        this.indicatorHeight = 42;
    }

    increase() {
        this.total = this.total >= this.max ? this.max : this.total + 1;
    }

    decrease() {
        this.total--;
    }

    // variar a quantidade de vida perdida de acordo com o inimigo
    // indice impar desenha metade esquerda, par a direita
    draw() {

        let margin = width*0.01;
        
        for(let i=0; i<this.total; i++) {
            image(
                imageLifeIndicator, 
                margin + i*(margin + this.indicatorWidth),
                margin, 
                this.indicatorWidth,
                this.indicatorHeight
            );
        }
    }
}