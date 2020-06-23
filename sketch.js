let imagemCenario;
let imageCharacter;
let cenario;
let character;
let backgroundMusic;

function preload() {
    imagemCenario   = loadImage('assets/images/scenario/florest.png');
    imageCharacter  = loadImage('assets/images/main-character/running.png');
    backgroundMusic = loadSound('assets/sounds/soundtrack.mp3');
}

function setup() {
    // backgroundMusic.loop(); // nao esta funcionando com isso
    createCanvas(windowWidth/2, windowHeight/2);
    cenario = new Cenario(imagemCenario, 3);
    frameRate(40);
    character = new Personagem(
        imageCharacter,
        880,            // horizontal dimension from image
        1080,           // vertical dimension from image
        4,              // columns, frames per row
        4               // rows, frames per column
    );
}

function draw() {
    cenario.exibe();
    cenario.move();
    
    character.exibe();

    circle(mouseX, mouseY, 50);
}