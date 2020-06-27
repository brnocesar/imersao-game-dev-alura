class Score {
    constructor() {
        this.points = 0;
    }

    show() {
        textAlign(RIGHT);
        fill('#fff')
        textSize(50);
        text(parseInt(this.points), width - 50, 50);
    }

    increase() {
        this.points += 0.2;
    }
}