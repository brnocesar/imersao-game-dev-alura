let imagemCenario;
let imageHipsta;
let imageDroplet;
let imageTroll;
let imageFlyingDroplet;
let gameOverImage;

let backgroundMusic;
let jumpSoundEffect;
let cenario;
let hipsta;
let droplet;
let troll;
let flyingDroplet;
let score;

const enemies = [];

function preload() {
    imagemCenario       = loadImage('assets/images/scenario/florest.png');
    imageHipsta         = loadImage('assets/images/main-character/running.png');
    imageDroplet        = loadImage('assets/images/enemies/droplet.png');
    imageTroll          = loadImage('assets/images/enemies/troll.png');
    imageFlyingDroplet  = loadImage('assets/images/enemies/flying-droplet.png');
    backgroundMusic     = loadSound('assets/sounds/soundtrack.mp3');
    jumpSoundEffect     = loadSound('assets/sounds/jump.mp3');
    gameOverImage       = loadImage('assets/screen/game-over.png');
}

function setup() {
    backgroundMusic.loop();
    createCanvas(windowWidth/2, windowHeight/2);
    cenario = new Cenario(imagemCenario, 3);
    score = new Score();
    hipsta = new Personagem(
        imageHipsta,
        880, 1080,      // character-sheet dimension image (x,y)
        220, 270,       // sprite dimension
        16,             // sprites quantity on sheet
        110, 135,       // character dimension
        width * 0.1,    // initial position (x)
        0               // base height (y)
    );
    droplet = new Enemy(
        imageDroplet,
        416, 728,       // character-sheet dimension image (x,y)
        104, 104,       // sprite dimension
        28,             // sprites quantity on sheet
        52, 52,         // character dimension
        width - 52,     // initial position (x)
        0,              // base height (y)
        10,             // velocity (x)
        200             // delay to it appears on screen
    );
    troll = new Enemy(
        imageTroll,
        1904, 1692,
        380.8, 282,
        28,
        254, 188,
        width - 254,
        0,
        6,
        2000
    );
    flyingDroplet = new Enemy(
        imageFlyingDroplet, 
        549, 648, 
        183, 108, 
        16, 
        91.5, 54, 
        width - 91.5, 
        100, 
        6, 
        200
    );

    enemies.push(droplet);
    enemies.push(troll);
    enemies.push(flyingDroplet);
    frameRate(40);
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
    score.show();
    score.increase();
    
    hipsta.exibe();
    hipsta.applyGravity();

    enemies.forEach(enemy => {
        enemy.exibe();
        enemy.walk();

        if ( hipsta.isColliding(enemy) ) {
            image(gameOverImage, width/2 - 206, height/2 - 36, 412, 72);
            // noLoop();
        }
    });
    


    circle(mouseX, mouseY, 50);
}