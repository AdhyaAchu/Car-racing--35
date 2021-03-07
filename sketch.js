var database;
var gameState = 0;
var playerCount;
var form,game,player;  //objects of the the respective class

function setup(){
    createCanvas (400,400);

    //create the database inside the database variable using firebase.database() 
    database = firebase.database();

    //a game object created for the Game class
    game = new Game();

    //read the gameState
    game.readState();

    //call the wait function
    game.wait();
}

function draw(){

}