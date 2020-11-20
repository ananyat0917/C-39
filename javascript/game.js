class Game{
    constructor(){
        console.log("Hi");
    }

    getGameState(){
        var gameReference = database.ref('gameState');
        gameReference.on('value',function(data){
            gameState = data.val();
        });
    }

    updateGameState(state){
        var ref = database.ref('/');
        ref.update({
            gameState:state
        });
    }

    start(){
        if(gameState === 0){
            form = new Form();
            form.display();
            player = new Player();
            player.getCount();
        }
        car1 = createSprite(100,100);
        car2 = createSprite(200,200);
        car3 = createSprite(300,300);
        car4 = createSprite(400,400);
        carArray = [car1,car2,car3,car4];

        car1.addImage("images/car1.png",car1Img);
        car2.addImage("images/car2.png",car2Img);
        car3.addImage("images/car3.png",car3Img);
        car4.addImage("images/car4.png",car4Img);
    }

    play(){
        form.hide();
        Player.getPlayerInfo();
        var index = 0;
        if(allPlayers !== undefined){
            imageMode(CENTER);
            image(trackImg,width/2,-3924+1.2*height,width,7848);
            var x = 100;
            var y = 0;
            for(var data in allPlayers){
                index += 1;
                x += 180;
                y = height - 80 - allPlayers[data].distance;
                carArray[index-1].x = x;
                carArray[index-1].y = y;
                if(index === player.playerIndex){
                    carArray[index-1].shapeColor = "red";
                    camera.position.x = width/2;
                    camera.position.y = carArray[index-1].y;
                }
            }
        }
        if(keyIsDown(UP_ARROW) && player.playerIndex !== null){
            player.playerDistance += 20;
            player.update();
        }

        if(player.playerDistance > 500){
            gameState = 2;
            console.log("Entered the if condition");
        }

        drawSprites();
    }

    end(){
        console.log("game ended");
    }
}