
function getRandomIntBetween(min,max){ //returns an integer between the two numbers provided inclusively with even distrobution
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
}


var i;
document.write("generating random numbers <br>");
for (i=0; i<10; i++){

    document.write(getRandomIntBetween(0,10));
    document.write("<br>");
}

