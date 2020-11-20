class Player{
    constructor(){
        this.playerIndex = 0;
        this.playerName = null;
        this.playerDistance = 0;
    }

    getCount(){
        var countReference = database.ref('playerCount');
        countReference.on('value',function(data){
            playerCount = data.val();
        });
    }

    update(){
        var index = "players/player"+this.playerIndex;
        var ref = database.ref(index);
        ref.set({
            name:this.playerName,
            distance:this.playerDistance
        });
    }

    updateCount(count){
        var ref = database.ref('/');
        ref.update({
            playerCount:count
        });
    }

    static getPlayerInfo(){
        database.ref('players').on('value',(data)=>{
            allPlayers = data.val();
        })
    }
}