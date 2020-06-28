function setup() {

    // setar as dimensoes sempre em proporcao fixa, de acordo com o tamanho da tela
    createCanvas(configFile.screen.width, configFile.screen.height);
    frameRate(40);
    backgroundMusic.loop();
    
    gameplay = new Gameplay();
    gameplay.setup();

    openingScreen = new OpeningScreen();
    openingScreen.setup();
    
    allScenes = {
        openingScreen,
        gameplay
    };

    buttonStart = new Button('Iniciar', width/2, height/2);
}

function keyPressed() {
    
    gameplay.keyPressed(key);
}

function draw() {

    allScenes[currentScene].draw();
}