/*
1. read the playerCount --> readCount()
2. update the playerCount in the database --> updateCount(count)
3. update the name of the player --> updateName(name)

*/

class Player {
    constructor(){

    }

    readCount(){
       
            //create a variable called playerCountRef to refer the 'playerCount' feild in the database --> database.ref()
            var playerCountRef = database.ref('playerCount');
        
            //create a listener to the variable --> .on("value",function)
            playerCountRef.on("value", function(data){

                 //store the listened values inside the gameState variable --> data.val()
                   playerCount = data.val();
            })
    }

    updateCount(count){
             database.ref('/').update({
                 playerCount: count
             })
    }

    updateName(name){
        //create a variable called playerIndex to store all the individual players
        //playerIndex --> joining the word "player"+playerCount (player1,player2,player3,player4)

        var playerIndex = "player" + playerCount;

        database.ref(playerIndex).set({
            //name in database = name in the form
            name:name
        })
    }
}

/*
.update() --> gameState: 0
            playerCount: 0

            change any existing value in the database

.set()--> player1 --> name: " "

        add any new value to the database
*/