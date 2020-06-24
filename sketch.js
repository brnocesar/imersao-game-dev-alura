let imagemCenario;
let imageCharacter;
let imageEnemy;

let cenario;
let backgroundMusic;
let character;
let enemy;

function preload() {
    imagemCenario   = loadImage('assets/images/scenario/florest.png');
    imageCharacter  = loadImage('assets/images/main-character/running.png');
    imageEnemy      = loadImage('assets/images/enemies/droplet.png');
    backgroundMusic = loadSound('assets/sounds/soundtrack.mp3');
}

function setup() {
    // backgroundMusic.loop(); // nao esta funcionando com isso
    createCanvas(windowWidth/2, windowHeight/2);
    cenario = new Cenario(imagemCenario, 3);
    frameRate(40);
    character = new Personagem(
        imageCharacter,
        880, 1080,      // character-sheet dimension image (x,y)
        110, 135,       // character dimension
        220, 270        // sprite dimension
    );
    enemy = new Enemy(
        imageEnemy,
        416, 728,      // character-sheet dimension image (x,y)
        52, 52,       // character dimension
        104, 104,       // sprite dimension
        width - 52
    );
}

function draw() {
    cenario.exibe();
    cenario.move();
    
    character.exibe();
    enemy.exibe();

    circle(mouseX, mouseY, 50);
}