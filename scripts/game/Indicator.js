class Indicator {

    constructor(img, transpImg, position, indicatorWidth, indicatorHeight, max, initial) {

        this.img             = img;
        this.transpImg       = transpImg;
        this.position        = position;
        this.indicatorWidth  = indicatorWidth;
        this.indicatorHeight = indicatorHeight;
        this.max             = max;
        this.initial         = initial;
        this.margin          = width*0.01;
        this.total           = this.initial;
    }

    notEmpty() {
        return Boolean(this.total);
    }

    increase() {
        this.total = this.total >= this.max ? this.max : this.total + 1;
    }

    decrease() {
        this.total--;
    }

    draw() {
        
        for(let i=0; i<this.max; i++) {
            image(
                this.transpImg, 
                this.margin + i*(this.margin + this.indicatorWidth),
                this.position, 
                this.indicatorWidth,
                this.indicatorHeight
            );
        }
        for(let i=0; i<this.total; i++) {
            image(
                this.img, 
                this.margin + i*(this.margin + this.indicatorWidth),
                this.position, 
                this.indicatorWidth,
                this.indicatorHeight
            );
        }
    }
}