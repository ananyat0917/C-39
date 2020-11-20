class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Join Here");
        this.greeting = createElement("h2");
    }

    display(){
        var title = createElement("h3");
        title.html("Welcome to the Car Race");
        title.position(300,20);
        this.input.position(100,40);
        this.button.position(100,60);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.playerName = this.input.value();
            this.greeting.html("Welcome "+player.playerName);
            this.greeting.position(100,80);
            playerCount+=1
            player.playerIndex = playerCount;
            player.update();
            player.updateCount(playerCount);
        })
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}