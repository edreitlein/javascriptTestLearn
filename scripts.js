let nameInput;
//          btns    0,   1    2    3   4    5    6    7    8
let buttonArray = [null,null,null,null,null,null,null,null,null] //used to check for wins in tictactoe
let xoro = 0;//tracks if the button for tic tac toe is going to be an X or and O, 0 = O, 1 = X
function grabInput(){//this gets the input from the button myText and alerts it to screen using the .value to grab the HTMLinputelement's value as String
            nameInput = document.getElementById("myText");
            alert("you input " + nameInput.value);
}


function displayInput(){//displays the input from grabInput() and myText button
    document.getElementById("displayText").innerHTML = nameInput.value;

}

//this function in obsolute for making a tictactoe game as game should never be more then 3x3
function makeButtons(x,y){//takes 2 inputs and makes a grid of buttons x in height and y
    console.log(x,y);
    
    let i, j;
    for (i =0;i<x;i++){
        for (j=0;j<y;j++){
            let element = document.createElement("button");//creates the buttons
            element.innerHTML = "&nbsp&nbsp";//displays empty buttons 
            element.onclick = function() {ticTac(element)};//assigns the buttons generated what they should do when clicked
            let body= document.getElementsByTagName("body")[0];//i have no clue how or why this works i think its indexing all the elemends in the document when its called and then starting at 0 to append them
            body.appendChild(element);

        }
        var space = document.write("<br>");
    }

}


//TODO check if a winner has been made with tictactoe - ideas is store values in an 2d array and check for wins

 
function setTicTacArray(buttonNumber,buttonID){//takes buttonNumber and buttonId and sets buttonArray to a X or O value when clicked, then checks for wins
    let arrayIndex = buttonNumber; // for iterating through the array storing tictactoe and changing the array
    
    let i;
    for (i =0;i<=arrayIndex;i++){//moves pointer to buttonArray 
        
        if (i == arrayIndex){
            
            
            if (xoro == 0){
                document.getElementById(buttonID).innerHTML = "O";//sets button to O on screen
                buttonArray[i]= 0;//sets buttonArray to correct value to checkForWin() 
                xoro = 1;//sets binary variable to determining if click should be X or O
                checkForWin();
            }else{
                document.getElementById(buttonID).innerHTML = "X";//sets button to X on screen
                buttonArray[i] = 1;//sets buttonArray to correct value for checkForWin()
                xoro = 0;//binary varible for X or O
                checkForWin();
            }
            //console.log(buttonArray);
        } 
    }
}

function checkForWin(){//uses the buttonArray to check for a winner by comparing array elements for the same number stored ie [1,1,1,null,null,ect.] is considered a win
    if(buttonArray[0] == 0 && buttonArray[1] == 0 && buttonArray[2]== 0){//check for O win
        alert("Winner");
    }else if (buttonArray[3] == 0 && buttonArray[4] == 0 && buttonArray[5]== 0){
        alert("Winner");
    }else if (buttonArray[6] == 0 && buttonArray[7] == 0 && buttonArray[8]== 0){
        alert("Winner");
    }else if (buttonArray[0] == 0 && buttonArray[3] == 0 && buttonArray[6]== 0){
        alert("Winner");
    }else if (buttonArray[1] == 0 && buttonArray[4] == 0 && buttonArray[7]== 0){
        alert("Winner");
    }else if (buttonArray[2] == 0 && buttonArray[5] == 0 && buttonArray[8]== 0){
        alert("Winner");
    }else if (buttonArray[0] == 0 && buttonArray[4] == 0 && buttonArray[8]== 0){
        alert("Winner");
    }else if (buttonArray[2] == 0 && buttonArray[4] == 0 && buttonArray[6]== 0){
        alert("Winner");
    }else if(buttonArray[0] == 0 && buttonArray[1] == 0 && buttonArray[2]== 0){//check for X win
        alert("Winner");
    }else if (buttonArray[3] == 1 && buttonArray[4] == 1 && buttonArray[5]== 1){
        alert("Winner");
    }else if (buttonArray[6] == 1 && buttonArray[7] == 1 && buttonArray[8]== 1){
        alert("Winner");
    }else if (buttonArray[0] == 1 && buttonArray[3] == 1 && buttonArray[6]== 1){
        alert("Winner");
    }else if (buttonArray[1] == 1 && buttonArray[4] == 1 && buttonArray[7]== 1){
        alert("Winner");
    }else if (buttonArray[2] == 1 && buttonArray[5] == 1 && buttonArray[8]== 1){
        alert("Winner");
    }else if (buttonArray[0] == 1 && buttonArray[4] == 1 && buttonArray[8]== 1){
        alert("Winner");
    }else if (buttonArray[2] == 1 && buttonArray[4] == 1 && buttonArray[6]== 1){
        alert("Winner");
    }

    

}