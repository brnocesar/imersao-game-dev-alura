// da pra fazer algo similar a uma interface do PHP, obrigando que a classe implemente os metodos?
class Gameplay {

    constructor() {

        this.currentEnemy = 0;
    }

    setup() {
        
        scenario = new Scenario(imageScenario, 3);
        score   = new Score();

        hipsta = new Personagem(
            imageHipsta,
            880, 1080, 220, 270, 16,     // character-sheet dimension image (x,y), sprite dimension (x,y), sprites quantity on sheet
            110, 135, width * 0.1, 0     // character dimension (x,y), initial position (x), base height (y)
        );
        droplet = new Enemy(
            imageDroplet,
            416, 728, 104, 104, 28,      // character-sheet dimension image (x,y), sprite dimension (x,y), sprites quantity on sheet
            52, 52, width - 52, 0,       // character dimension (x,y), initial position (x), base height (y)
            10, 0                        // velocity (x), delay to it appears on screen
        );
        troll = new Enemy(
            imageTroll,
            1904, 1692, 380.8, 282, 28,
            254, 188, width - 254, 0,
            6, 0
        );
        flyingDroplet = new Enemy(
            imageFlyingDroplet, 
            549, 648, 183, 108, 16, 
            91.5, 54, width - 91.5, 100, 
            6, 0
        );
    
        enemies.push(droplet);
        enemies.push(troll);
        enemies.push(flyingDroplet);
    }

    keyPressed(key) {
    
        if (key == 'ArrowUp') {
            hipsta.jump();
            jumpSoundEffect.play();
        }
    }

    draw() {
        scenario.exibe();
        scenario.move();
        score.show();
        score.increase();
        
        hipsta.exibe();
        hipsta.applyGravity();
    
        const enemy = enemies[this.currentEnemy];
        const enemyOffScreen = enemy.xPosition < -enemy.characterWidht;
        
        enemy.exibe();
        enemy.walk();
    
        if ( enemyOffScreen ) {
            this.currentEnemy++;
            if ( this.currentEnemy >= enemies.length ) {
                this.currentEnemy = 0;
            }
    
            enemy.velocity = parseInt(random(5, 30));
        }
        
        if ( hipsta.isColliding(enemy) ) {
            image(gameOverImage, width/2 - 206, height/2 - 36, 412, 72);
            // noLoop();
        }
        
    
        circle(mouseX, mouseY, 50);
    }
}