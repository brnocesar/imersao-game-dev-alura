let imagemCenario;
let imagemPersonagem;
let cenario;
let personagem;
let somDoJogo;

function preload() {
    imagemCenario = loadImage('assets/images/scenario/florest.png');
    imagemPersonagem = loadImage('assets/images/main-character/running.png');
    somDoJogo = loadSound('assets/sounds/soundtrack.mp3');
}

function setup() {
    // somDoJogo.loop();
    createCanvas(windowWidth/2, windowHeight/2);
    cenario = new Cenario(imagemCenario, 3);
    frameRate(40);
    personagem = new Personagem(imagemPersonagem);
}

function draw() {
    cenario.exibe();
    cenario.move();
    
    personagem.exibe();

    circle(mouseX, mouseY, 50);
}