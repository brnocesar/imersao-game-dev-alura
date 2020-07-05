class Gameplay {

    constructor() {

        this.currentEnemy = 0;
        this.map          = configFile.map;
        this.beatedEnemies = 0;
        this.beatedEnemiesForSpecial = configFile.hipsta.beatedEnemiesForSpecial;
    }

    setup() {
        
        scenario      = new Scenario(imageScenario, 3);
        score         = new Score();
        lifeIndicator = new Indicator(
            imgLifeIndicator, transpImgLifeIndicator,
            width*0.01, 50, 40,
            configFile.hipsta.maxLife, configFile.hipsta.initialLife
        );
        specialIndicator = new Indicator(
            imgSpecialIndicator, transpImgSpecialIndicator,
            width*0.02 + 40, 50, 50,
            configFile.hipsta.maxSpecial, configFile.hipsta.initialSpecial
        );
        
        hipsta = new Personagem(
            imgHipsta, imgInvincibleHipsta, imgDashing,
            880, 1080, 220, 270, 16,     // character-sheet dimension image (x,y), sprite dimension (x,y), sprites quantity on sheet
            110, 135, width * 0.1, 0     // character dimension (x,y), initial position (x), base height (y)
        );
        ghost = new Enemy(
            imageGhost, imageGhost, imageGhost,
            150, 150, 150, 150, 1,      // character-sheet dimension image (x,y), sprite dimension (x,y), sprites quantity on sheet
            100, 100, width - 100, 0,   // character dimension (x,y), initial position (x), base height (y)
            10                          // velocity (x)
        );
        troll = new Enemy(
            imageTroll, imageTroll, imageTroll,
            1904, 1692, 380.8, 282, 28,
            254, 188, width - 254, 0,
            6
        );
        flyingDroplet = new Enemy(
            imageFlyingDroplet, imageFlyingDroplet, imageFlyingDroplet, 
            549, 648, 183, 108, 16, 
            91.5, 54, width - 91.5, 100, 
            6
        );
    
        enemies.push(ghost);
        enemies.push(troll);
        enemies.push(flyingDroplet);
    }

    keyPressed(key) {
    
        if (key == 'ArrowUp' && hipsta.invincible == false) {
            hipsta.jump();
        }

        if (key == 'ArrowRight' && hipsta.invincible == false) {
            hipsta.startDash(scenario, specialIndicator);
        }
    }

    draw() {
        scenario.show();
        scenario.move();
        lifeIndicator.draw();
        specialIndicator.draw();
        score.show();
        score.increase();
        
        const currentMapRow = this.map[this.currentEnemy];
        const enemy = enemies[currentMapRow.enemy];
        const enemyOffScreen = enemy.xPosition < -enemy.characterWidht;

        enemy.velocity = currentMapRow.velocity;
        hipsta.countDashFrames(scenario, enemies);
        
        enemy.show();
        enemy.walk();

        hipsta.show();
        hipsta.applyGravity();
    
        if ( enemyOffScreen ) {
            this.currentEnemy++;
            if ( this.currentEnemy >= this.map.length - 1 ) {
                this.currentEnemy = 0;
            }

            this.beatedEnemies++;
            if ( this.beatedEnemies >= this.beatedEnemiesForSpecial ) {
                this.beatedEnemies = 0;
                specialIndicator.increase();
            }
        }
        
        if ( hipsta.isColliding(enemy) ) {
            
            lifeIndicator.decrease();
            hipsta.becomesInvincible();
            this.beatedEnemies = -1;

            if ( lifeIndicator.total === 0 ) {
                image(gameOverImage, width/2 - 206, height/2 - 36, 412, 72);
                // noLoop();
            }
        }
    
        circle(mouseX, mouseY, 50);
    }
}