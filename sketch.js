let imagemCenario;
let imageHipsta;
let imageEnemy;
let gameOverImage;

let cenario;
let hipsta;
let enemy;

let backgroundMusic;
let jumpSoundEffect;

function preload() {
    imagemCenario   = loadImage('assets/images/scenario/florest.png');
    imageHipsta     = loadImage('assets/images/main-character/running.png');
    imageEnemy      = loadImage('assets/images/enemies/droplet.png');
    backgroundMusic = loadSound('assets/sounds/soundtrack.mp3');
    jumpSoundEffect = loadSound('assets/sounds/jump.mp3');
    gameOverImage   = loadImage('assets/screen/game-over.png');
}

function setup() {
    backgroundMusic.loop();
    createCanvas(windowWidth/2, windowHeight/2);
    cenario = new Cenario(imagemCenario, 3);
    frameRate(40);
    hipsta = new Personagem(
        imageHipsta,
        880, 1080,      // character-sheet dimension image (x,y)
        110, 135,       // character dimension
        220, 270,       // sprite dimension
        width * 0.1     // initial position (x)
    );
    enemy = new Enemy(
        imageEnemy,
        416, 728,
        52, 52,
        104, 104,
        width - 52
    );
}

function keyPressed() {
    
    if (key == 'ArrowUp') {
        hipsta.jump();
        jumpSoundEffect.play();
    }
}

function draw() {
    cenario.exibe();
    cenario.move();
    
    hipsta.exibe();
    hipsta.applyGravity();

    enemy.exibe();
    enemy.walk();

    if ( hipsta.isColliding(enemy) ) {
        image(gameOverImage, width/2 - 206, height/2 - 36, 412, 72);
        noLoop();
    }


    circle(mouseX, mouseY, 50);
}