/*
1. to display the form to the player --> display()
2. click the play button and submitting the form to the database
*/

/*
input = createInput
button = createButton
element = createElement
DOM --> Documented Obejct Model
*/
class Form{
    constructor(){

    }


    display(){

        var title = createElement('h1');
        //the words to be displayed as the title --> variablename.html("text to be displayed")
        title.html("Car Racing Game");
        title.position(160, 10);

        var greeting = createElement('h2');

        var input = createInput('Enter your Name');
        input.position(130,150);

        var button = createButton('Play');
        button.position(250,200);


        //what should happen if the play button is pressed -->variblename.mousePressed()
        button.mousePressed(function(){

        //input box and the button should be hidden --> variablename.hide()
            input.hide();
            button.hide();

        //create a variable called name to store the word typed in the input box
        var name = input.value();

        //playerCount is increased
        playerCount +=1;        //playerCount = playerCount + 1

        //the name of the player should be updated
        player.updateName(name);

        //update the playerCount
        player.updateCount(playerCount);

        //greet the player with the word "Hello" and the player's name
        greeting.html("Hello " + name);
        greeting.position(130, 200);


        })
    }
}
