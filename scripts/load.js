function preload() {
    configFile          = loadJSON('config.json')
    backgroundMusic     = loadSound('assets/sounds/soundtrack.mp3');
    imgOpeningScreen    = loadImage('assets/images/opening/home.png');
    fontOpeningScreen   = loadFont('assets/images/opening/font-hs.otf');
    imageScenario       = loadImage('assets/images/gameplay/scenario/florest.png');
    imgHipsta           = loadImage('assets/images/gameplay/main/running.png');
    imgInvincibleHipsta = loadImage('assets/images/gameplay/main/running-invincible.png');
    imageLifeIndicator  = loadImage('assets/images/gameplay/main/heart.png');
    imageDroplet        = loadImage('assets/images/gameplay/enemies/droplet.png');
    imageTroll          = loadImage('assets/images/gameplay/enemies/troll.png');
    imageFlyingDroplet  = loadImage('assets/images/gameplay/enemies/flying-droplet.png');
    jumpSoundEffect     = loadSound('assets/sounds/jump.mp3');
    gameOverImage       = loadImage('assets/images/gameplay/game-over.png');
}