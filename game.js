/*
1. read the gameState --> readState()
2. update the gameState in the database --> update(state)
3. to introduce the wait state --> wait()

*/

class Game {
    constructor(){
        //empty
    }

    readState(){
    //create a variable called gameStateRef to refer the 'gameState' field in the database --> database.ref()
    var gameStateRef = database.ref('gameState');

    //create a listener to the variable --> .on("value",function)
    gameStateRef.on("value", function(data){

        //store the listened values inside the gameState variable --> data.val()
        gameState = data.val();
    })
    }

    update(state){
        //refer to the database and update the gameState field as state --> .update()
        //state has the listened values
        database.ref('/').update({
            gameState: state
        })
    }

    wait(){
        //what happens in the waitState (gameState = 0)
        if(gameState === 0){
            //a new player Object is created
            player = new Player();

            //read the playerCount
            player.readCount();

            //a new form object is created for every player
            form = new Form();

            //display the form
            form.display();
        }

    }
}
//box1 = new Box()