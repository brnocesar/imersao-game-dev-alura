// da pra fazer algo similar a uma interface do PHP, obrigando que a classe implemente os metodos?
class Gameplay {

    constructor() {

        this.currentEnemy = 0;
        this.map          = configFile.map;
    }

    setup() {
        
        scenario      = new Scenario(imageScenario, 3);
        lifeIndicator = new Life(
            configFile.hipsta.maxLife,
            configFile.hipsta.initialLife
        );
        score         = new Score();

        hipsta = new Personagem(
            imageHipsta,
            880, 1080, 220, 270, 16,     // character-sheet dimension image (x,y), sprite dimension (x,y), sprites quantity on sheet
            110, 135, width * 0.1, 0     // character dimension (x,y), initial position (x), base height (y)
        );
        droplet = new Enemy(
            imageDroplet,
            416, 728, 104, 104, 28,      // character-sheet dimension image (x,y), sprite dimension (x,y), sprites quantity on sheet
            52, 52, width - 52, 0,       // character dimension (x,y), initial position (x), base height (y)
            10                           // velocity (x)
        );
        troll = new Enemy(
            imageTroll,
            1904, 1692, 380.8, 282, 28,
            254, 188, width - 254, 0,
            6
        );
        flyingDroplet = new Enemy(
            imageFlyingDroplet, 
            549, 648, 183, 108, 16, 
            91.5, 54, width - 91.5, 100, 
            6
        );
    
        enemies.push(droplet);
        enemies.push(troll);
        enemies.push(flyingDroplet);
    }

    keyPressed(key) {
    
        // gambiarra
        if (key == 'ArrowUp' && hipsta.invincible == false) {
            hipsta.jump();
            jumpSoundEffect.play();
        }
    }

    draw() {
        scenario.exibe();
        scenario.move();
        lifeIndicator.draw();
        score.show();
        score.increase();
        
        hipsta.exibe();
        hipsta.applyGravity();

        const currentMapRow = this.map[this.currentEnemy]  
        const enemy = enemies[currentMapRow.enemy];
        const enemyOffScreen = enemy.xPosition < -enemy.characterWidht;

        enemy.velocity = currentMapRow.velocity;
        
        enemy.exibe();
        enemy.walk();
    
        if ( enemyOffScreen ) {
            this.currentEnemy++;
            if ( this.currentEnemy >= this.map.length - 1 ) {
                this.currentEnemy = 0;
            }
        }
        
        if ( hipsta.isColliding(enemy) ) {
            
            lifeIndicator.decrease();
            hipsta.becomesInvincible();
            
            if ( lifeIndicator.total === 0 ) {
                image(gameOverImage, width/2 - 206, height/2 - 36, 412, 72);
                noLoop();
            }
        }
        
    
        circle(mouseX, mouseY, 50);
    }
}