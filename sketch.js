var database, gameState, playerCount, form, game, player, allPlayers, car1, car2, car3, car4, carArray, car1Img, car2Img, car3Img, car4Img, groundImg, trackImg;

function preload(){
  car1Img = loadImage("images/car1.png")
  car2Img = loadImage("images/car2.png");
  car3Img = loadImage("images/car3.png");
  car4Img = loadImage("images/car4.png");
  groundImg = loadImage("images/ground.png");
  trackImg = loadImage("images/track.jpg");
}

function setup(){
  database = firebase.database();
  createCanvas(displayWidth-300,displayHeight-300);

  gameState = 0;
  game = new Game();
  game.getGameState();
  game.start();
}

function draw(){
  background("brown");
  if(playerCount === 4){
    game.updateGameState(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
    console.log("vaal")
  }
}