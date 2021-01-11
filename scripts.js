let nameInput;
//          btns    0,   1    2    3   4    5    6    7    8
let buttonArray = [null,null,null,null,null,null,null,null,null]
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

//i should comment this 
function setTicTacArray(buttonNumber,buttonID){//takes the button number and iterates
    let arrayIndex = buttonNumber; // for iterating through the array storing tictactoe and changing the array
    //alert(buttonID);
    let i;
    for (i =0;i<=arrayIndex;i++){
        
        if (i == arrayIndex){
            //alert(arrayIndex);
            
            if (xoro == 0){
                document.getElementById(buttonID).innerHTML = "O";
                buttonArray[i]= 0;
                xoro = 1;
            }else{
                document.getElementById(buttonID).innerHTML = "X";
                buttonArray[i] = 1;
                xoro = 0;
            }
            console.log(buttonArray);
        } 
    }
}